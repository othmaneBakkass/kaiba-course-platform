'use client';

import { useEffect, useState } from 'react';

import {
	NextJsLogo,
	PrismaLogo,
	ReactLogo,
	ShadcnUiLogo,
	TailwindCssLogo,
	TypescriptLogo,
	VercelLogo
} from '@/components/ui/icons/logos';

import { usePrefersReducedMotion } from '@/lib/hooks/use-prefer-reduced-motion';

type LogosObject = {
	key: string;
	component: JSX.Element;
	'aria-hidden': boolean;
};
export function LogosSlider() {
	const reduceMotion = usePrefersReducedMotion();
	const [logos, setLogos] = useState<LogosObject[] | undefined>();

	// Duplicate Logos to make it look like a infinite slider
	useEffect(() => {
		const logosList: LogosObject[] = [
			{
				key: 'tailwind',
				component: <TailwindCssLogo className="text-foreground" />,
				'aria-hidden': false
			},
			{
				key: 'vercel',
				component: <VercelLogo className="text-foreground" />,
				'aria-hidden': false
			},
			{
				key: 'nextjs',
				component: <NextJsLogo className="text-foreground" />,
				'aria-hidden': false
			},
			{
				key: 'shadcn',
				component: <ShadcnUiLogo />,
				'aria-hidden': false
			},
			{
				key: 'react',
				component: <ReactLogo className="text-foreground" />,
				'aria-hidden': false
			},
			{
				key: 'prisma',
				component: <PrismaLogo className="text-foreground" />,
				'aria-hidden': false
			},
			{
				key: 'typescript',
				component: <TypescriptLogo className="text-foreground" />,
				'aria-hidden': false
			}
		];

		if (reduceMotion) {
			setLogos(logosList);
			return;
		}
		const logosCopy = logosList.map((logo, i) => ({
			key: `${logo.key}-${i}`,
			component: logo.component,
			'aria-hidden': true
		}));
		setLogos(logosList.concat(logosCopy));
	}, [reduceMotion]);

	return (
		<section className="mask-fade-in-from-both-sides mx-auto flex w-full max-w-5xl flex-col items-start justify-center gap-y-2 overflow-hidden">
			{!logos ? (
				// we add this div to avoid layout shifts on the first render
				<div className="h-[114px] w-1" aria-hidden></div>
			) : (
				<>
					<h2 className="self-center text-xl font-medium capitalize text-muted-foreground">
						Built using
					</h2>
					<ul
						aria-label="list of tools used to built this website"
						className="infinite-scroll flex items-center justify-start gap-x-16"
					>
						{logos.map((logo) => (
							<li aria-hidden={logo['aria-hidden']} key={logo.key}>
								{logo.component}
							</li>
						))}
					</ul>
				</>
			)}
		</section>
	);
}
