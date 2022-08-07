import CustomNextImage from '@components/common/CustomNextImage';
import classes from './index.module.css';

type Props = {};

const linearGradient = 'linear-gradient(to bottom right, #ffa607, #ff07e3)';

const TopNotchTemplatesSection = (props: Props) => {
	return (
		<div>
			<div className='w-full px-8 py-16 flex flex-col items-center justify-center text-center font-medium'>
				<h2
					style={{
						backgroundImage: linearGradient,
						backgroundClip: 'text',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
					className='text-8xl'
				>
					Top-notch templates.
				</h2>
				<p className='my-8 text-4xl max-w-[800px]'>
					Browse dozens of professionally designed templates. Easily change
					structure, style, and graphics—then publish instantly.
				</p>
				<button
					className='text-4xl px-6 py-4 rounded-lg text-white font-bold'
					style={{ backgroundImage: linearGradient }}
				>
					View all templates
				</button>
			</div>
			<div className='flex flex-wrap items-center justify-center md:justify-evenly'>
				{[
					{
						image: {
							alt: '',
							src: 'https://framerusercontent.com/images/etm6dpNWOpxcvkWH8hU7FeBFBjk.jpg',
						},
						header: 'Agency',
						description: 'Sell your services',
					},
					{
						image: {
							alt: '',
							src: 'https://framerusercontent.com/images/wfV8kG3I5LYM3pXTP0a7d6bO0.jpg',
						},
						header: 'Blog',
						description: 'Host your thoughts',
					},
					{
						image: {
							alt: '',
							src: 'https://framerusercontent.com/images/kt9SdwmslMDCcqHX4nxQ3ASbDPM.jpg',
						},
						header: 'Landing Pages',
						description: 'Convert your visitors',
					},
					{
						image: {
							alt: '',
							src: 'https://framerusercontent.com/images/MCnnI3BpCHrlxHc8ZqLtFSuirg.jpg',
						},
						header: 'Personal',
						description: 'Share your story',
					},
					{
						image: {
							alt: '',
							src: 'https://framerusercontent.com/images/8OZze1PjZxSmVxTqZCGNaghQI.jpg',
						},
						header: 'Photography',
						description: 'Display your craft',
					},
					{
						image: {
							alt: '',
							src: 'https://framerusercontent.com/images/5pTvgX7fKe47rXmKisag3OLcV2s.jpg',
						},
						header: 'Portfolio',
						description: 'Build your brand',
					},
					{
						image: {
							alt: '',
							src: 'https://framerusercontent.com/images/eBVhscrEe65w29nAdSJIrewoXs.jpg',
						},
						header: 'Splash Pages',
						description: 'Announce your product',
					},
					{
						image: {
							alt: '',
							src: 'https://framerusercontent.com/images/uOn7GZizG4kNNNFz59kv5MW4.jpg',
						},
						header: 'Startup',
						description: 'Launch your SaaS',
					},
				].map((item) => (
					<div
						key={item.header}
						className={`w-full  m-4 md:w-2/5 lg:w-[25rem] ${classes.card}`}
					>
						<a href='#'>
							<div
								className='w-full rounded-lg overflow-hidden
              lg:h-[30rem]'
							>
								<CustomNextImage
									src={item.image.src}
									width={320}
									height={480}
									className={`w-full h-full transition-transform  duration-300 ${classes.imgContainer}`}
								/>
							</div>
							<div
								className={`transition-all duration-200 text-center p-2 font-medium ${classes.details}`}
							>
								<h3 className='transition-all duration-200 text-3xl text-gray-900'>
									{item.header}
								</h3>
								<p className='transition-all duration-200 text-2xl text-gray-400'>
									{item.description}
								</p>
							</div>
						</a>
					</div>
				))}
				;
			</div>
		</div>
	);
};

export default TopNotchTemplatesSection;
