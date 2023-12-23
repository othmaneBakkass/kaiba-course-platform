import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';

import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default:
					'bg-primary text-white shadow-xl shadow-primary/60 hover:bg-primary-hover focus:bg-primary-focus active:bg-primary-focus',
				destructive:
					'bg-destructive text-white hover:bg-destructive-hover focus:bg-destructive-focus focus-visible:ring-destructive active:bg-destructive-focus',
				secondary:
					'bg-secondary text-white hover:bg-secondary-hover focus:bg-secondary-focus focus-visible:ring-secondary active:bg-secondary-focus',
				outline:
					'border-2 border-popover bg-background shadow-xl shadow-gray-500/60 hover:bg-foreground hover:text-background focus:bg-neutral-200 focus:text-background focus-visible:ring-foreground active:bg-neutral-200 active:text-background',
				ghost:
					'bg-background hover:bg-foreground hover:text-background focus:bg-neutral-200 focus:text-background focus-visible:ring-foreground active:bg-neutral-200 active:text-background',
				muted:
					'border border-border hover:bg-popover hover:text-primary-foreground focus:bg-popover ',
				link: 'font-semibold text-link underline-offset-4 hover:underline focus-visible:ring-link',
				accent:
					'bg-foreground text-background hover:bg-primary hover:text-foreground'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9  px-3',
				lg: 'h-11 px-8',
				xl: 'h-12 w-48',
				icon: 'h-10 w-10',
				'icons-xs': 'h-8 w-8'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
