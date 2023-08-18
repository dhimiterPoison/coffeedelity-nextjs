import Image from 'next/image';
import { Libre_Bodoni } from 'next/font/google';

const title = Libre_Bodoni({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='flex flex-col h-full w-full justify-between'>
			<div className='flex flex-col w-full mt-4 mb-8'>
				<div className='flex justify-between px-4 text-[#245953] text-lg'>
					<span className={`${title.className}`}>Explore</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</div>
				<div className="flex pl-4 py-4 gap-4 w-full overflow-auto snap-x">
					{/* qua ci vanno le card */}
					<div className="esplora-1 w-16 h-16 rounded-full border border-[#245953]"></div>
					<div className="esplora-1 w-16 h-16 rounded-full border border-[#245953]"></div>
					<div className="esplora-1 w-16 h-16 rounded-full border border-[#245953]"></div>
					<div className="esplora-1 w-16 h-16 rounded-full border border-[#245953]"></div>
				</div>
			</div>
			<div className='flex flex-col w-full mt-4 mb-8'>
				<div className='flex justify-between px-4 text-[#245953] text-lg'>
					<span className={`${title.className}`}>My cards</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</div>
				<div className="flex pl-4 py-4 gap-4 w-full overflow-x-auto snap-x">
					{/* qua ci vanno le card */}
					<div className="esplora-1 w-48 h-20 rounded-xl border border-[#245953]"></div>
					<div className="esplora-1 w-48 h-20 rounded-xl border border-[#245953]"></div>
					<div className="esplora-1 w-48 h-20 rounded-xl border border-[#245953]"></div>
				</div>
			</div>
			<div className='flex flex-col w-full mt-4 mb-8'>
				<div className='flex justify-between px-4 text-[#245953] text-lg'>
					<span className={`${title.className}`}>Favourite</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</div>
				<div className="flex py-4 gap-4 w-full overflow-auto snap-x justify-center">
					{/* qua ci vanno le card */}
					<div className="favourite-1 w-72 h-44 rounded-2xl border border-[#245953]"></div>
				</div>
			</div>

		</main>
	);
}
