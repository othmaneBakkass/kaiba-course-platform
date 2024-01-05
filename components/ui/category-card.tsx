'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowUpRightSquare } from 'lucide-react';

import type { MouseEvent } from 'react';

import Link from 'next/link';

type props = {
	name: string;
	description: string;
};

export function CategoryCard({ name, description }: props) {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
		const bounds = currentTarget.getBoundingClientRect();

		mouseX.set(clientX - bounds.left);
		mouseY.set(clientY - bounds.top);
	}

	return (
		<Link
			href={'#'}
			prefetch={false}
			onMouseMove={handleMouseMove}
			className="group relative my-4 block w-fit max-w-xs rounded-xl border-2 border-card/80 bg-card p-4"
		>
			<motion.div
				className="pointer-events-none absolute -inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, #ffffff0d , transparent)`
				}}
			></motion.div>
			<div className="isolate mb-2 flex items-center justify-between">
				<h4 className="font-medium">{name}</h4>
				<ArrowUpRightSquare strokeWidth={1.5} className="stroke-foreground" />
			</div>

			<p className="text-sm text-muted-foreground">{description}</p>
		</Link>
	);
}
