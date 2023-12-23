'use client';

import { History } from 'lucide-react';

import type React from 'react';
import { useEffect, useState } from 'react';

import { useGetCoursesByNameQuery } from '@/store/queries/courses';

import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandItem,
	CommandList
} from '@/components/ui/command';

import { SearchInput } from '@/components/features/search-modal/search-input';

import { useDebounce } from '@/lib/hooks/use-debounce-value';

type SearchModalProps = {
	open: boolean;
	setOpen: (value: React.SetStateAction<boolean>) => void;
};

// Open modal on ctrl+k or ⌘+k event
function useOpenOnKeyPress(
	setOpen: (value: React.SetStateAction<boolean>) => void
) {
	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, [setOpen]);
}

export function SearchModal({ open, setOpen }: SearchModalProps) {
	useOpenOnKeyPress(setOpen);
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 350);
	const { isSuccess, data } = useGetCoursesByNameQuery(debouncedSearch);

	return (
		<CommandDialog open={open} onOpenChange={setOpen}>
			<SearchInput
				debouncedSearch={debouncedSearch}
				setSearch={setSearch}
				setOpen={setOpen}
			/>
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup>
					<CommandItem className="group flex items-center justify-between">
						<p>Calendar</p>
						<History
							aria-hidden
							className="h-4 w-4 text-muted-foreground/50 group-hover:text-primary-foreground group-aria-selected:text-primary-foreground"
						/>
					</CommandItem>
					<CommandItem>Search Emoji</CommandItem>
					<CommandItem>Calculator</CommandItem>
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	);
}
