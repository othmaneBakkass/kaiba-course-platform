'use client';

import { useState } from 'react';

import { SearchBar } from '@/components/features/search-modal/search-bar';
import { SearchModal } from '@/components/features/search-modal/search-modal';

export function SearchCourses() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<SearchBar setOpen={setOpen} />
			<SearchModal open={open} setOpen={setOpen} />
		</>
	);
}
