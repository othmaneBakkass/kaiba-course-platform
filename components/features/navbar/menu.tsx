'use client';

import { Menu as MenuIcon, X } from 'lucide-react';

import { useState } from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

export function Menu() {
	const [toggle, setToggle] = useState<'open' | 'close'>('close');

	function handleOpenMenu() {
		setToggle(toggle === 'open' ? 'close' : 'open');
	}
	return (
		<>
			<ul
				className={cn(
					toggle === 'open'
						? 'visible translate-y-24 opacity-100 [transition:opacity_300ms,transform_250ms]'
						: 'invisible -translate-y-20 opacity-0',
					'md:visible md:static md:z-0 md:translate-y-0 md:opacity-100 md:transition-none',
					'md:col-[2/3] md:row-[1/2] md:w-fit md:flex-row md:gap-x-2 md:bg-transparent',
					'flex w-full flex-col gap-y-2 rounded-md bg-card py-2 text-muted-foreground ',
					'absolute top-0 z-10 '
				)}
			>
				<li className="flex w-full items-center md:w-fit">
					<Link
						className="w-full rounded-sm px-2 py-2 hover:bg-popover hover:text-primary-foreground focus:bg-popover focus:text-primary-foreground md:w-fit md:hover:bg-transparent md:focus:bg-transparent"
						href=""
					>
						home
					</Link>
				</li>
				<li className="flex w-full items-center md:w-fit ">
					<Link
						className="w-full rounded-sm px-2 py-2 hover:bg-popover hover:text-primary-foreground focus:bg-popover focus:text-primary-foreground md:w-fit md:hover:bg-transparent md:focus:bg-transparent"
						href=""
					>
						browse
					</Link>
				</li>
			</ul>

			<Button
				onClick={handleOpenMenu}
				className="col-[2/3] row-[1/2] justify-self-end xxs:col-[3/4] md:hidden"
				variant={'ghost'}
				size={'icons-xs'}
				aria-label={`${toggle} navigation menu`}
			>
				{toggle === 'close' ? (
					<MenuIcon aria-hidden className="h-5 w-5" />
				) : (
					<X aria-hidden className="h-5 w-5" />
				)}
			</Button>
		</>
	);
}
