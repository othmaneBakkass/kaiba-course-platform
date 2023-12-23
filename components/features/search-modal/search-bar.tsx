import { Search } from 'lucide-react';

import type React from 'react';

import { cn } from '@/lib/utils';

type SearchBarProps = {
	setOpen: (value: React.SetStateAction<boolean>) => void;
};

export function SearchBar({ setOpen }: SearchBarProps) {
	return (
		<>
			<button
				onClick={() => setOpen((open) => !open)}
				role="search"
				className={cn(
					'group col-[1/3] mx-auto  flex w-full max-w-lg items-center justify-between rounded-md bg-card px-4 py-2  text-muted-foreground',
					'xxs:col-[2/3] md:max-w-[380px]',
					'md:col-[3/4] md:mx-0 md:justify-self-end'
				)}
			>
				<div className=" inline-flex w-full items-center justify-between gap-x-2 group-hover:text-primary-foreground lg:justify-start">
					<Search
						aria-hidden="true"
						className="order-2 inline-block h-4 w-4 opacity-75 lg:-order-none"
					/>
					<span className="text-sm font-medium">Search for courses...</span>
				</div>
				<kbd className="hidden tracking-[0.25em] opacity-75 group-hover:text-primary-foreground lg:block">
					⌘k
				</kbd>
			</button>
		</>
	);
}
