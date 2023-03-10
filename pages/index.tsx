import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
				<Head>
					<title>Gerard's Portfolio</title>
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<Header />
				{/* Hero */}
				<section id='hero' className='snap-start'>
					<Hero />
				</section>
				{/* About */}
				<section id='about' className='snap-center'>
					<About />
				</section>
				{/* Experience */}
				<section id='experience' className='snap-center'>
					<Experience />
				</section>
				{/* Skills  */}
				<section id='skills' className='snap-start'>
					<Skills />
				</section>

				{/* Projects */}

				{/* Contact */}
			</div>
		</>
	);
}
