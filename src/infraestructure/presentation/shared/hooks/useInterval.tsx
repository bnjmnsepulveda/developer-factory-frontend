import { useRef, useEffect, useState } from 'react';

interface Hook {
    status: boolean;
    start: () => void;
    stop: () => void;
}
/**
 * A setInterval hook that calls a callback after a interval duration
 * when a condition is true
 *
 * @param callbackFn The callback to be invoked after interval
 * @param seconds Amount of time in ms after which to invoke
 * @param when The condition which when true, sets the interval
 */
function useInterval(callbackFn: () => void, seconds = 0, immediate = false): Hook {
    const savedRefCallback = useRef<() => any>();
    const [start, setStart] = useState(false);

    useEffect(() => {
        savedRefCallback.current = callbackFn;
    });

    function callback() {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        savedRefCallback.current && savedRefCallback.current();
    }

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (start) {
                if (immediate) {
                    callback();
                }
                const interval = window.setInterval(callback, seconds * 1000);

                return () => {
                    console.log('Stopping interval')
                    window.clearInterval(interval);
                };
            }
        } else {
            console.warn('useInterval: window is undefined.');
        }
    }, [start, seconds]);

    return {
        status: start,
        start: () => {
            setStart(true)
        },
        stop: () => {
            setStart(false)
        }
    }
}

export {
    useInterval
};