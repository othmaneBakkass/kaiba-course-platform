'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import { ProductCard } from '@/components/ui/product-card';

export function PopularProducts() {
	return (
		<section className="mx-auto my-32 w-[calc(100%-48px)] text-start sm:w-full sm:max-w-xl md:max-w-2xl lg:w-[90%] lg:max-w-5xl">
			<h2 className="mb-16 text-2xl font-bold capitalize xs:text-4xl lg:text-5xl">
				<span className="text-gradient-main">Popular Courses.</span> Dive into
				Courses <br className="hidden lg:inline" />
				Loved by Learners Everywhere
			</h2>
			<div className="w-full "></div>

			<Carousel>
				<CarouselContent>
					<CarouselItem className="basis-auto">
						<ProductCard />
					</CarouselItem>
					<CarouselItem className="basis-auto">
						<ProductCard />
					</CarouselItem>
					<CarouselItem className="basis-auto">
						<ProductCard />
					</CarouselItem>
					<CarouselItem className="basis-auto">
						<ProductCard />
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	);
}
