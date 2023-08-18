import React from 'react';
import { Libre_Bodoni } from 'next/font/google';

const title = Libre_Bodoni({ subsets: ['latin'] });

const Titlebar = () => {
	return <div className={`flex justify-center text-3xl font-semibold p-2 text-[#245953] ${title.className}`}>Coffeedelity</div>;
};

export default Titlebar;
