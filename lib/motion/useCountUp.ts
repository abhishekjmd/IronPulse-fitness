"use client";

import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface UseCountUpOptions {
    end: number;
    duration?: number;
    decimals?: number;
    once?: boolean;
}

/**
 * Premium Count Up Hook
 * Follows Apple-standard: cubic-bezier(0.16, 1, 0.3, 1)
 */
export function useCountUp({
    end,
    duration = 1000,
    decimals = 0,
    once = true,
}: UseCountUpOptions) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const domRef = useRef<HTMLSpanElement>(null);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasStarted(true);
                    if (once && domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            },
            { threshold: 0.1 }
        );

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => observer.disconnect();
    }, [once]);

    useEffect(() => {
        if (!hasStarted) return;

        if (shouldReduceMotion) {
            setCount(end);
            return;
        }

        let startTimestamp: number | null = null;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Easing: cubic-bezier(0.16, 1, 0.3, 1) approx: 1 - pow(1-x, 4)
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            const currentCount = easeProgress * end;
            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(end);
            }
        };

        window.requestAnimationFrame(step);
    }, [hasStarted, end, duration, shouldReduceMotion]);

    return {
        ref: domRef,
        displayValue: count.toFixed(decimals),
    };
}
