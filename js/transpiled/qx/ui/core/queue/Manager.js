(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.handler.UserAction": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.bom.AnimationFrame": {},
      "qx.ui.core.queue.Widget": {},
      "qx.log.Logger": {},
      "qx.ui.core.queue.Visibility": {},
      "qx.ui.core.queue.Appearance": {},
      "qx.ui.core.queue.Layout": {},
      "qx.html.Element": {
        "defer": "runtime"
      },
      "qx.ui.core.queue.Dispose": {},
      "qx.event.Registration": {
        "defer": "runtime"
      },
      "qx.bom.client.Event": {
        "defer": "runtime"
      }
    },
    "environment": {
      "provided": [],
      "required": {
        "event.touch": {
          "defer": true,
          "className": "qx.bom.client.Event"
        }
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * This class performs the auto flush of all layout relevant queues.
   *
   * @require(qx.event.handler.UserAction)
   */
  qx.Class.define("qx.ui.core.queue.Manager", {
    statics: {
      /** @type {Boolean} Whether a flush was scheduled */
      __scheduled: false,

      /** @type {Boolean} true, if the flush should not be executed */
      __canceled: false,

      /** @type {Map} Internal data structure for the current job list */
      __jobs: {},

      /** @type {Integer} Counts how often a flush failed due to exceptions */
      __retries: 0,

      /** @type {Integer} Maximum number of flush retries */
      MAX_RETRIES: 10,

      /**
       * Schedule a deferred flush of all queues.
       *
       * @param job {String} The job, which should be performed. Valid values are
       *     <code>layout</code>, <code>decoration</code> and <code>element</code>.
       */
      scheduleFlush: function scheduleFlush(job) {
        // Sometimes not executed in context, fix this
        var self = qx.ui.core.queue.Manager;
        self.__jobs[job] = true;

        if (!self.__scheduled) {
          self.__canceled = false;
          qx.bom.AnimationFrame.request(function () {
            if (self.__canceled) {
              self.__canceled = false;
              return;
            }

            self.flush();
          }, self);
          self.__scheduled = true;
        }
      },

      /**
       * Flush all layout queues in the correct order. This function is called
       * deferred if {@link #scheduleFlush} is called.
       *
       */
      flush: function flush() {
        // Sometimes not executed in context, fix this
        var self = qx.ui.core.queue.Manager; // Stop when already executed

        if (self.__inFlush) {
          return;
        }

        self.__inFlush = true; // Cancel timeout if called manually

        self.__canceled = true;
        var jobs = self.__jobs;

        self.__executeAndRescheduleOnError(function () {
          // Process jobs
          while (jobs.visibility || jobs.widget || jobs.appearance || jobs.layout || jobs.element) {
            // No else blocks here because each flush can influence the following flushes!
            if (jobs.widget) {
              delete jobs.widget;
              {
                try {
                  qx.ui.core.queue.Widget.flush();
                } catch (e) {
                  qx.log.Logger.error(qx.ui.core.queue.Widget, "Error in the 'Widget' queue:" + e, e);
                }
              }
            }

            if (jobs.visibility) {
              delete jobs.visibility;
              {
                try {
                  qx.ui.core.queue.Visibility.flush();
                } catch (e) {
                  qx.log.Logger.error(qx.ui.core.queue.Visibility, "Error in the 'Visibility' queue:" + e, e);
                }
              }
            }

            if (jobs.appearance) {
              delete jobs.appearance;
              {
                try {
                  qx.ui.core.queue.Appearance.flush();
                } catch (e) {
                  qx.log.Logger.error(qx.ui.core.queue.Appearance, "Error in the 'Appearance' queue:" + e, e);
                }
              }
            } // Defer layout as long as possible


            if (jobs.widget || jobs.visibility || jobs.appearance) {
              continue;
            }

            if (jobs.layout) {
              delete jobs.layout;
              {
                try {
                  qx.ui.core.queue.Layout.flush();
                } catch (e) {
                  qx.log.Logger.error(qx.ui.core.queue.Layout, "Error in the 'Layout' queue:" + e, e);
                }
              }
            } // Defer element as long as possible


            if (jobs.widget || jobs.visibility || jobs.appearance || jobs.layout) {
              continue;
            }

            if (jobs.element) {
              delete jobs.element;
              qx.html.Element.flush();
            }
          }
        }, function () {
          self.__scheduled = false;
        });

        self.__executeAndRescheduleOnError(function () {
          if (jobs.dispose) {
            delete jobs.dispose;
            {
              try {
                qx.ui.core.queue.Dispose.flush();
              } catch (e) {
                qx.log.Logger.error("Error in the 'Dispose' queue:" + e);
              }
            }
          }
        }, function () {
          // Clear flag
          self.__inFlush = false;
        }); // flush succeeded successfully. Reset retries


        self.__retries = 0;
      },

      /**
       * Executes the callback code. If the callback throws an error the current
       * flush is cleaned up and rescheduled. The finally code is called after the
       * callback even if it has thrown an exception.
       *
       * @signature function(callback, finallyCode)
       * @param callback {Function} the callback function
       * @param finallyCode {Function} function to be called in the finally block
       */
      __executeAndRescheduleOnError: function __executeAndRescheduleOnError(callback, finallyCode) {
        callback();
        finallyCode();
      },

      /**
       * Handler used on touch devices to prevent the queue from manipulating
       * the dom during the touch - mouse - ... event sequence. Usually, iOS
       * devices fire a click event 300ms after the touchend event. So using
       * 500ms should be a good value to be on the save side. This is necessary
       * due to the fact that the event chain is stopped if a manipulation in
       * the DOM is done.
       *
       * @param e {qx.event.type.Data} The user action data event.
       */
      __onUserAction: function __onUserAction(e) {
        qx.ui.core.queue.Manager.flush();
      }
    },

    /*
    *****************************************************************************
       DESTRUCT
    *****************************************************************************
    */
    defer: function defer(statics) {
      // Replace default scheduler for HTML element with local one.
      // This is quite a hack, but allows us to force other flushes
      // before the HTML element flush.
      qx.html.Element._scheduleFlush = statics.scheduleFlush; // Register to user action

      qx.event.Registration.addListener(window, "useraction", qx.core.Environment.get("event.touch") ? statics.__onUserAction : statics.flush);
    }
  });
  qx.ui.core.queue.Manager.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Manager.js.map?dt=1566750098440