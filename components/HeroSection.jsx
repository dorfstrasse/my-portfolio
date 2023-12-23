import React from 'react'
import Image from 'next/image'
import styles from './postPage.module.css'

const HeroSection = () => {
  return (
    <section className={`flex justify-center ${styles.hero}`}>
			<div className='grid grid-cols-1 sm:grid-cols-12'>
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className='mb-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white'>
						Hello, I'm Vandersen
					</h1>
					<p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
					Junior Full Stack Developer with an interest in programming and business, <br></br>
					and has experience working as IT Support and DevOps Tech Lead.
					</p>
					<div className=''>
						<button className={`px-6 py-3 w-full sm:w-fit rounded-full mr-4 text-white ${styles.contactMeButton}`}>
							Contact Me
						</button>
						<button className={`px-6 py-3 w-full sm:w-fit rounded-full mr-4 ${styles.downloadCVButton}`}>
							Download CV
						</button>
					</div>
				</div>
				<div className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="flex justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] relative">
						<img className={`${styles.heroPhoto}`} src="/images/photo1.png" alt="hero image" />
						{/* <Image
						className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
						src='/images/photo1.png'
						alt='hero image' /> */}
					</div>
				</div>
			</div>
    </section>
  )
}

export default HeroSection