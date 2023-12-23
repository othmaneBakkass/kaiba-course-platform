import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const bodyFont = Inter({ subsets: ['latin'] });

export const logoFont = localFont({
	src: '../public/fonts/Outfit-Bold.woff'
});
