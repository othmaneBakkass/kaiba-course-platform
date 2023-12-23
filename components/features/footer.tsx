import { Github } from 'lucide-react';

import Link from 'next/link';

export function Footer() {
	return (
		<footer className="mt-auto w-full bg-card py-6">
			<div className="mx-auto flex max-w-[calc(100%_-_96px)] flex-col items-center justify-between gap-y-4 sm:flex-row sm:gap-y-0 lg:max-w-5xl 2xl:max-w-6xl">
				<p className="text-sm text-muted-foreground">
					&copy; All Rights Reserved. {new Date().getFullYear()}
				</p>

				<Link
					className="text-muted-foreground hover:text-primary-foreground"
					href={'https://github.com/othmaneBakkass'}
				>
					<Github aria-hidden size={'16'} className="mr-2 inline-block" />
					<span className="text-sm">Made by Oath</span>
				</Link>
			</div>
		</footer>
	);
}
