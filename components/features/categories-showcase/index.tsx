import { CategoryCard } from '@/components/ui/category-card';

export function CategoriesShowCase() {
	return (
		<section className="mx-auto my-32 w-[calc(100%-48px)] text-start sm:w-full sm:max-w-xl md:max-w-2xl lg:w-[90%] lg:max-w-5xl">
			<h2 className="mb-16 text-2xl font-bold capitalize xs:text-4xl lg:text-5xl">
				<span className="text-gradient-main">Ready for Something New? </span>
				checkout
				<br className="hidden lg:inline" />
				Our Categories
			</h2>
			<div className="mt-8 ">
				<CategoryCard
					name="web development"
					description="learn how to build exceptional websites and powerful web applications"
				/>
				<CategoryCard
					name="web development"
					description="learn how to build exceptional websites and powerful web applications"
				/>
				<CategoryCard
					name="web development"
					description="learn how to build exceptional websites and powerful web applications"
				/>
				<CategoryCard
					name="web development"
					description="learn how to build exceptional websites and powerful web applications"
				/>
			</div>
		</section>
	);
}
