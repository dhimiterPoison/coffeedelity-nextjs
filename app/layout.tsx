import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import BottomNavbar from './components/BottomNavbar';
import { ClerkProvider } from '@clerk/nextjs';
import Titlebar from './components/Titlebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CoffeeDelity',
	description: 'Un nuovo modo di vedere il caffè',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' data-theme='light'>
			<ClerkProvider>
				<body className={inter.className}>
					<Titlebar />
					<div className='app'>{children}</div>
					<BottomNavbar />
				</body>
			</ClerkProvider>
		</html>
	);
}
