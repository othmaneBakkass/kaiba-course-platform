import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * merges multiple class values into a single string. while removing any classes that have the same effect
 * uses clsx under the hood
 * @param {ClassValue[]} inputs - can be a class name or an object
 * with class names as keys and expressions that can be reduced to boolean values.
 * @returns a string of classes
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * The `sleep` function is a function that returns a promise that resolves or reject after a specified
 * amount of time.
 *
 * @param {sleepProps} [options]
 * @default {time:10000ms,resolve:true,response:{ok:true}
 *
 */
export function sleep<Res extends sleepResponse = { ok: boolean }>(
	options: sleepProps<Res>
): sleepRT<Res> {
	const { time = 10_000, resolve = true, response } = options;

	return new Promise((res, rej) => {
		setTimeout(() => {
			resolve
				? res(response ?? ({ ok: true } as Res))
				: rej(response ?? { ok: false });
		}, time);
	});
}

type sleepProps<T> = {
	time?: number;
	resolve?: boolean;
	response?: T;
};
type sleepResponse = { ok: boolean; [key: string]: any };
type sleepRT<T> = Promise<T>;
