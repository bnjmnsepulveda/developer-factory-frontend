import { useRef, useEffect } from 'react';

/**
 * A setInterval hook that calls a callback after a interval duration
 * when a condition is true
 *
 * @param cb The callback to be invoked after interval
 * @param intervalDurationMs Amount of time in ms after which to invoke
 * @param when The condition which when true, sets the interval
 * @param startImmediate If the callback should be invoked immediately
 */
function useIntervalWhen(
  callback_: () => void,
  intervalDurationMs = 0,
  when = true,
  startImmediate = false,
): void {
  const savedRefCallback = useRef<() => any>();

  useEffect(() => {
    savedRefCallback.current = callback_;
  });

  function callback() {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    savedRefCallback.current && savedRefCallback.current();
  }

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (when) {
        if (startImmediate) {
          callback();
        }
        const interval = window.setInterval(callback, intervalDurationMs);

        return () => {
            console.log('Stopping interval')
          window.clearInterval(interval);
        };
      }
    } else {
      console.warn('useIntervalWhen: window is undefined.');
    }
  }, [when, intervalDurationMs]);
}

export { useIntervalWhen };