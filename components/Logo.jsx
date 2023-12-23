import Link from 'next/link';
import Image from 'next/image';
import styles from './postPage.module.css'

const Logo = () => {
  return (
    <Link href='/'>
      <img src='/VANDER-w.png' className={`${styles.portfolioLogo}`} priority alt=''/>
    </Link>
  )
}

export default Logo