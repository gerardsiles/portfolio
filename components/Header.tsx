import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};
function Header({}: Props) {
	return (
		<header className='sticky top-0 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center p-5'>
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5,
				}}
				transition={{
					duration: 0.7,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				className='flex flex-row items-center'
			>
				{/* Social Icons */}
				<SocialIcon
					url='https://twitter.com/gerardsiles'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://youtube.com/gerardsiles'
					fgColor='gray'
					bgColor='transparent'
				/>
				<SocialIcon
					url='https://github.com/gerardsiles'
					fgColor='gray'
					bgColor='transparent'
				/>
			</motion.div>
			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5,
				}}
				transition={{
					duration: 0.7,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				className='flex flex-row items-center text-gray-300 cursor-pointer'
			>
				<SocialIcon
					className='cursor-pointer'
					network='email'
					url='https://twitter.com/gerardsiles'
					fgColor='gray'
					bgColor='transparent'
				/>
				<p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
					Get in Touch
				</p>
			</motion.div>
		</header>
	);
}
export default Header;
