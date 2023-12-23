'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

const setCanvasSize = (
	canvas: HTMLCanvasElement,
	width: number,
	height: number
) => {
	canvas.width = width;
	canvas.height = height;
};

const makeStars = (count: number) => {
	const queue = [];
	for (let i = 0; i < count; i++) {
		const s = {
			x: Math.floor(Math.random() * 1600 - 800),
			y: Math.floor(Math.random() * 900 - 450),
			z: Math.floor(Math.random() * 1000)
		};
		queue.push(s);
	}
	return queue;
};

type StarsQueue = ReturnType<typeof makeStars>;

const reDrawCanvas = (
	ctx: CanvasRenderingContext2D,
	width: number,
	height: number,
	bgColor: string
) => {
	ctx.fillStyle = bgColor;
	ctx.fillRect(0, 0, width, height);
};

const renderStar = (
	ctx: CanvasRenderingContext2D,
	starColor: Props['starColor'],
	x: number,
	y: number,
	brightness: number
) => {
	const color = starColor ? addAlphaToRgba(starColor, brightness) : '#fafafa';
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
	ctx.beginPath();
	ctx.rect(x, y, 2, 2);
	ctx.fill();
};

const addAlphaToRgba = (rgba: string, alpha: number) =>
	rgba.replace(')', `,${alpha})`);

const moveStars = (stars: StarsQueue, distance: number) => {
	const count = stars.length;
	for (var i = 0; i < count; i++) {
		const s = stars[i];
		s.z -= distance;
		while (s.z <= 1) {
			s.z += 1000;
		}
	}
};

const showStars = (
	ctx: CanvasRenderingContext2D,
	stars: StarsQueue,
	starColor: Props['starColor'],
	screenWidth: number,
	screenHeight: number
) => {
	const halfScreenWidth = screenWidth / 2;
	const halfScreenHeight = screenHeight / 2;
	const count = stars.length;

	for (let i = 0; i < count; i++) {
		const star = stars[i];

		const x = halfScreenWidth + star.x / (star.z * 0.001);
		const y = halfScreenHeight + star.y / (star.z * 0.001);

		if (x < 0 || x >= screenWidth || y < 0 || y >= screenHeight) {
			continue;
		}

		const distance = star.z / 1000.0;
		const brightness = 1 - distance * distance;

		renderStar(ctx, starColor, x, y, brightness);
	}
};

interface Props {
	speedFactor?: number;
	backgroundColor?: string;
	starColor?: `rgba(${string},${string},${string})`;
	starCount?: number;
	className?: string;
	height?: number;
	width?: number;
}

export function StarField(props: Props) {
	const {
		speedFactor = 0.05,
		backgroundColor = '#121212',
		starColor = 'rgba(255, 255, 255)',
		starCount = 5000,
		className,
		width,
		height
	} = props;

	const client = useRef(false);
	const canvasEl = useRef<HTMLCanvasElement>(null);
	const [screenSize, setScreenSize] = useState({
		w: width ?? 0,
		h: height ?? 0
	});

	useEffect(() => {
		client.current = true;
		setScreenSize({ w: window.innerWidth, h: window.innerHeight });
	}, []);

	// change canvas size on window resize
	useEffect(() => {
		function handleWindowResize() {
			setScreenSize({ w: window.innerWidth, h: window.innerHeight });
			if (canvasEl.current) {
				setCanvasSize(canvasEl.current, screenSize.w, screenSize.h);
			} else {
				console.error('Could not find canvas element');
			}
		}

		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [screenSize.h, screenSize.w]);

	// handle star field animation
	useEffect(() => {
		if (!canvasEl.current) {
			console.error('Could not find canvas element');
			return;
		}

		const canvas = canvasEl.current;
		const ctx = canvas.getContext('2d', { alpha: false });

		if (!ctx) {
			console.error('Could not get 2d context from canvas element');
			return;
		}

		setCanvasSize(canvas, screenSize.w, screenSize.h);

		const stars = makeStars(starCount);

		let previousTime: number;
		const init = (time: number) => {
			previousTime = time;
			requestAnimationFrame(loop);
		};

		const loop = (currentTime: number) => {
			const elapsed = currentTime - previousTime;
			previousTime = currentTime;
			const distance = elapsed * speedFactor;
			const width = canvas.width;
			const height = canvas.height;

			moveStars(stars, distance);

			reDrawCanvas(ctx, width, height, backgroundColor);

			showStars(ctx, stars, starColor, width, height);

			requestAnimationFrame(loop);
		};

		requestAnimationFrame(init);
	}, [
		starColor,
		backgroundColor,
		speedFactor,
		starCount,
		screenSize.w,
		screenSize.h
	]);

	return (
		client && (
			<canvas
				ref={canvasEl}
				id="starfield"
				className={cn(
					'pointer-events-none absolute left-1/2 top-1/2 -z-10 m-0 -translate-x-1/2 -translate-y-1/2 p-0 opacity-100 mix-blend-screen',
					className
				)}
			></canvas>
		)
	);
}
