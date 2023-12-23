// import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './postPage.module.css';
import { useState } from 'react';

const links = [
	{path: '/', name: 'home'},
	{path: '/projects', name: 'projects'},
	{path: '/contact', name: 'contact'},
	{title: 'About', path: '#about'},
];

const Navbar = ({containerStyles, linkStyles}) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
	const path = usePathname();
  return (
    <nav className={`text-white ${containerStyles}`}>
			{links.map((link, index) => {
        return (
          <Link href={link.path}
          key={index}
          className={`capitalize ${styles.link} ${linkStyles}`}>
            {link.path === path && (
              <span initial={{y: '-100%'}}
              animate={{y: 0}}
              transition={{type: 'tween'}}
              layoutId='underline'
              className={`absolute left-0 top-full h-[2px] w-full ${styles.underlineStyle}`}/>
            )}
            {link.name}
            {link.title}
          </Link>
				)
      })}
		</nav>
  )
}

export default Navbar