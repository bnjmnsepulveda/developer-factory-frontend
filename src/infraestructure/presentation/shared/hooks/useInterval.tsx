import React, { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
    const savedCallback: any = useRef(null);

    useEffect(() => {
        const id = setTimeout(() => {
            console.log('request!!!')
        })
        return () => clearInterval(id);
    }, [callback]);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, []);
}