import type React from 'react';
import { useEffect, useState } from 'react';

import { useGetCoursesByNameQuery } from '@/store/queries/courses';

import { Button } from '@/components/ui/button';
import { CommandInput } from '@/components/ui/command';

import { useDebounce } from '@/lib/hooks/use-debounce-value';

export function SearchInput({
	setOpen,
	setSearch,
	debouncedSearch
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
	debouncedSearch: string;
}) {
	useGetCoursesByNameQuery(debouncedSearch);

	return (
		<div className="flex items-center justify-between ">
			<CommandInput
				onValueChange={(s) => {
					setSearch(s);
				}}
				containerClassName="flex-grow"
				placeholder="Type course name"
			/>
			<Button
				onClick={() => setOpen((open) => !open)}
				aria-label="cancel"
				variant={'muted'}
				size={'icons-xs'}
				className="mx-2 shrink-0 text-xs"
			>
				esc
			</Button>
		</div>
	);
}
