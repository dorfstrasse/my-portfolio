'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Logo from './Logo';
import styles from './postPage.module.css';
import { usePathname } from 'next/navigation';

const Header = () => {
	const [header, setHeader] = useState(false);
	const pathname = usePathname();
  return (
    <header className={`${styles.header}`}>
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					<Logo />
					<div className="flex items-center gap-x-6">
						<Navbar
						containerStyles='hidden xl:flex lg:flex gap-x-8 items-center'
						linkStyles='relative hover:text-primary transition-all'
						underlineStyles='absolute left-0 top-full h-[2px] w-full' />
						
						<div className='xl:hidden lg:hidden'>
							<MobileNav />
						</div>

					</div>
				</div>
			</div>
		</header>
  )
}

export default Header