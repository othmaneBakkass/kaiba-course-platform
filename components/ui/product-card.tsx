import { Star } from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';

import courseThumbnail from '@/public/imgs/course-thumb-svelte.png';

export function ProductCard() {
	return (
		<Link
			href={'#'}
			prefetch={false}
			className="group flex max-w-xs flex-col rounded-xl border border-popover bg-card"
		>
			<div className="relative h-72 rounded-t-xl before:absolute before:bottom-0 before:h-1/2 before:w-full before:bg-gradient-to-t before:from-card before:to-transparent">
				<Image
					className="rounded-t-xl"
					fill
					sizes="(min-width: 350px) 100vw, 80vw"
					src={courseThumbnail}
					alt={'course thumbnail'}
				/>
				<p className="absolute left-4 top-4 rounded-full bg-neutral-700/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
					web development
				</p>

				<p className="absolute right-4 top-4 inline-flex items-center gap-x-1 rounded-full bg-neutral-700/50 px-3 py-1 text-xs font-medium tabular-nums text-amber-400 backdrop-blur-sm">
					5.4{' '}
					<Star
						aria-label="star"
						size={14}
						className="fill-amber-400 stroke-none"
					/>
				</p>
			</div>
			<div className="p-4 md:p-5">
				<h3 className="text-xl font-semibold text-foreground">
					svelte course for beginners
				</h3>
				<p className="mt-1 text-sm text-muted-foreground">
					<span>10 lectures</span> · <span>22 hrs</span> ·{' '}
					<span>400 students</span>
				</p>
				<p className="my-1 text-xs font-medium capitalize text-muted-foreground">
					John Doe
				</p>
				<p className="mt-1 text-sm font-semibold tabular-nums">$16.00</p>
			</div>
		</Link>
	);
}
