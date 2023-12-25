import { Hero } from '@/components/features/hero';
import { LogosSlider } from '@/components/features/logos-slider';

export default function Home() {
	return (
		<main className="h-full">
			<Hero />
			<LogosSlider />
		</main>
	);
}
