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
			<div className="relative h-72 rounded-t-xl">
				<Image
					className="rounded-t-xl"
					fill
					sizes="(min-width: 350px) 100vw, 80vw"
					src={courseThumbnail}
					alt={'course thumbnail'}
				/>
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
