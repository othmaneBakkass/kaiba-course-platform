import { SVGAttributes } from 'react';

export function RoadMapIcon({
	className,
	...props
}: {
	className?: string;
} & SVGAttributes<SVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 14 14"
			className={className}
			stroke="#fff"
			{...props}
		>
			<g
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.4}
			>
				<path d="M7 11.643h6.5m-1.857-1.857l1.857 1.857l-1.857 1.857M3.286 1.893a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0M7 6.536a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0m-2.786 5.107a1.393 1.393 0 1 0 2.786 0a1.393 1.393 0 1 0-2.786 0"></path>
				<path d="M7 6.536H3.054a2.554 2.554 0 0 0 0 5.107h1.16m5.572-5.107h1.393a2.321 2.321 0 0 0 0-4.643H6.07m-2.784 0H.5"></path>
			</g>
		</svg>
	);
}
