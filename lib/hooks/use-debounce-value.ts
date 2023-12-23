import { useEffect, useState } from 'react';

/**
 * The `useDebounce` function is a custom hook in TypeScript that returns a debounced value based on
 * the input value and delay.
 * @param {T} value - The value that you want to debounce. This can be of any type.
 * @param {number} [delay] - Optional, specifies the delay in milliseconds.
 * @default 500 ms
 * @returns  the debounced value.
 */
export function useDebounce<T>(value: T, delay?: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

		return () => {
			clearTimeout(timer);
		};
	}, [value, delay]);

	return debouncedValue;
}
