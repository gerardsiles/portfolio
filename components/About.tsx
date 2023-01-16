import { motion } from 'framer-motion';

type Props = {};
export default function About({}: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl sm:text-xl'>
				About
			</h3>

			<motion.img
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 1,
				}}
				src='https://avatars.githubusercontent.com/u/67659282?v=4'
				className='mb-20 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-95  xl:w-[500px] xl:h-[600px]'
			/>

			<div className='space-y-10 px-0 md:px-10'>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
					background
				</h4>
				<p className='text-base'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
					deserunt consequatur dolorem, nostrum rerum voluptate ratione adipisci
					excepturi distinctio, minus pariatur incidunt numquam. Alias
					cupiditate dolorem nesciunt iste odio non. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Amet deserunt consequatur dolorem,
					nostrum rerum voluptate ratione adipisci excepturi distinctio, minus
					pariatur incidunt numquam. Alias cupiditate dolorem nesciunt iste odio
					non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
					deserunt consequatur dolorem, nostrum rerum voluptate ratione adipisci
					excepturi distinctio, minus pariatur incidunt numquam. Alias
					cupiditate dolorem nesciunt iste odio non. Lorem ipsum dolor sit, amet
					consectetur adipisicing elit. Amet deserunt consequatur dolorem,
					nostrum rerum voluptate ratione adipisci excepturi distinctio, minus
					pariatur incidunt numquam. Alias cupiditate dolorem nesciunt iste odio
					non? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
					deserunt consequatur dolorem, nostrum rerum voluptate ratione adipisci
					excepturi distinctio, minus pariatur incidunt numquam. Alias
					cupiditate dolorem nesciunt iste odio non?
				</p>
			</div>
		</motion.div>
	);
}
