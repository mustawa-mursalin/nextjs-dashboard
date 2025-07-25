import '@/app/ui/global.css';
import {Inter, Lusitana} from "next/font/google";

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
    variable: '--font-lusitana',
    display: 'swap',
});