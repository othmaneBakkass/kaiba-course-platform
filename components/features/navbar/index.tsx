import { logoFont } from '@/app/fonts';

import { Menu } from '@/components/features/navbar/menu';
import { SearchCourses } from '@/components/features/search-modal';

export function Navbar() {
	return (
		<header className="fixed isolate z-40 w-full  py-4 backdrop-blur-sm">
			<nav className="relative mx-auto grid w-full max-w-[calc(100%_-_32px)] grid-cols-2 grid-rows-2 items-center gap-y-2 xxs:grid-cols-[auto,_1fr_,auto] xxs:grid-rows-1 xxs:gap-x-3 md:max-w-[calc(100%_-_96px)] md:grid-cols-[auto,_1fr_,minmax(200px,380px),auto] md:gap-x-4">
				<p
					className={`text-md col-[1/2] row-[1/2] capitalize ${logoFont.className}`}
				>
					Kaiba
				</p>

				<Menu />
				<SearchCourses />
				<div className="mx-auto hidden h-5 w-5 rounded-full bg-purple-400 md:col-[4/5] md:block md:h-6 md:w-6"></div>
			</nav>
		</header>
	);
}
