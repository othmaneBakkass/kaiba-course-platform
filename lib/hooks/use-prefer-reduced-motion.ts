'use client';

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';
/**
 * The `usePrefersReducedMotion` function returns a boolean value indicating whether the user prefers
 * reduced motion based on their system settings.
 * @returns The function `usePrefersReducedMotion` returns the value of `prefersReducedMotion`, which
 * is a boolean indicating whether the user prefers reduced motion.
 */

export function usePrefersReducedMotion() {
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(QUERY);
		const listener = (e: MediaQueryListEvent) => {
			setPrefersReducedMotion(!e.matches);
		};
		mediaQueryList.addEventListener('change', listener);
		return () => {
			mediaQueryList.removeEventListener('change', listener);
		};
	}, []);
	return prefersReducedMotion;
}
