'use client';

import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

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
