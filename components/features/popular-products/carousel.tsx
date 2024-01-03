'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import { ProductCard } from '@/components/ui/product-card';

export function PopularProductsCarousel() {
	return (
		<>
			<Carousel className="">
				<div className="relative after:absolute after:right-0 after:top-0 after:h-full after:w-11 after:bg-gradient-to-l after:from-background/50 after:to-transparent">
					<CarouselContent className="-ml-12 pr-11">
						<CarouselItem className="basis-auto pl-12">
							<ProductCard />
						</CarouselItem>
					</CarouselContent>
				</div>
				<div className="ml-auto mt-6 flex w-fit items-center justify-center gap-x-4">
					<CarouselPrevious positioned={false} />
					<CarouselNext positioned={false} />
				</div>
			</Carousel>
		</>
	);
}
