import { Hero } from '@/components/features/hero';
import { LogosSlider } from '@/components/features/logos-slider';
import { PopularProducts } from '@/components/features/popular-products';

export default function Home() {
	return (
		<main className="h-full">
			<Hero />
			<LogosSlider />
			<PopularProducts />
		</main>
	);
}
