import Image from 'next/image';
import Link from 'next/link';

import Grid from '@/public/imgs/grid.svg';
import LightRays from '@/public/imgs/light-rays.svg';

import { Button } from '@/components/ui/button';
import { RoadMapIcon } from '@/components/ui/icons/road-map';

import { StarField } from '@/components/features/hero/star-field';

export function Hero() {
	return (
		<section className="relative flex h-full min-h-[100dvh] w-full items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_transparent_20%,_#121212)]">
			{/* grid pattern */}
			<Image
				src={Grid}
				fill={true}
				alt="a grid pattern"
				aria-hidden
				className="-z-10 select-none object-cover"
			/>
			{/* rays of light */}
			<Image
				src={LightRays}
				className="absolute left-0 top-0 -z-10 h-auto select-none"
				aria-hidden
				width={700}
				alt="rays of light"
				priority
			/>

			<StarField backgroundColor="black" starCount={500} />
			{/* hero content */}
			<div className="mx-auto w-[calc(100%-48px)] text-start sm:w-full sm:max-w-xl md:max-w-2xl lg:w-[90%] lg:max-w-5xl lg:text-start ">
				{/* tag */}
				<p className="gradient-border-primary-transparent mb-4 w-fit rounded-full border px-4 py-2 text-xs text-primary-foreground">
					demo website
				</p>
				{/* headline */}
				<h1 className="w-fit text-2xl font-bold capitalize xs:text-4xl md:text-5xl lg:text-6xl lg:leading-normal">
					level up your coding Skills{' '}
					<br className="hidden min-[634px]:inline" />
					Anytime Anywhere
				</h1>
				<p className="mt-2 text-sm text-muted-foreground md:mt-4 md:text-base">
					Kaiba an e-learning platform for software engineers.
					<br />
					Take your coding skills to the next level with our vast library of
					courses.
				</p>
				<div className="mt-4 flex flex-col items-start justify-center gap-x-4 gap-y-4 xs:flex-row xs:justify-start">
					<Button
						className="h-12 w-full rounded-lg xs:w-48"
						variant={'default'}
						asChild
					>
						<Link
							href={'#'}
							className="inline-flex items-center justify-center"
						>
							Start learning
						</Link>
					</Button>
					<Button
						className="group h-12 w-full rounded-lg xs:w-48"
						variant={'outline'}
						asChild
					>
						<Link
							href={'#'}
							className="inline-flex items-center justify-center gap-x-2"
						>
							<span>Learning paths</span>{' '}
							<RoadMapIcon
								aria-hidden
								className="h-3 w-3 group-hover:stroke-background group-focus:stroke-background group-active:stroke-background"
							/>
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
