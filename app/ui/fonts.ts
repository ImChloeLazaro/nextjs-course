import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const lusitana = Lusitana({ 
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});
export const inter = Inter({ subsets: ['latin'] });