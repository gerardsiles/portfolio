import { motion } from 'framer-motion';

type Props = {};
export default function ExperienceCard({}: Props) {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-srhink-0 min-w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200] object-cover object-center'
				src='https://www.edx.org/images/logos/edx-logo-elm.svg'
				alt=''
			/>

			<div className='px-0 md:px-10'>
				<h4 className='text-4xl font-light'>Position in the company</h4>
				<p className='font-bold text-2xl mt-1'>Company</p>
				<div className='flex space-x-2 my-2'>
					<img
						className='h-10 w-10 rounded-full '
						src='https://www.logodesign.net/images/home-page-logo-03.png'
						alt='logo from the company'
					/>
				</div>
				<p className='uppercase py-5 text-gray-300'>Started... - Ended ...</p>
				<ul className='list-disc space-y-4 ml-5 text-lg'>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
					<li>Summary points</li>
				</ul>
			</div>
		</article>
	);
}
