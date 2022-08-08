import SectionHeader from '@components/core/SectionHeader';
import CustomNextImage from '@components/Home/components/CustomNextImage';
import { StartRoundedIcon, upLeftWhiteTriangle } from '@data/index';
import classes from './index.module.css';

const linearGradient = Object.freeze({
	design: 'linear-gradient(128deg, rgb(242, 5, 117) 0%, rgb(111, 0, 248) 100%)',
	collaboration:
		'linear-gradient(315deg, var(--token-61e699c7-742b-47d0-bb16-f42065b06637, #fd7702)  0%, var(--token-0c4c4e00-f4fc-4e6a-9a97-509a95a3e5d4, rgb(255, 0, 102))  100%)',
});

const SimplyPowerfulSection = () => {
	return (
		<section className='max-w-[1400px] mx-auto'>
			<SectionHeader
				h2={{
					text: 'Simply powerful.',
					linearGradient: linearGradient.design,
					style: { height: '7rem' },
				}}
				p={{
					text: "Framer's tools simplify building professional sites while delivering best-in-class performance on the web.",
				}}
			/>
			<Design_LayoutSection />
			<Collaboration_ContentManagementSystemSection />
		</section>
	);
};

export default SimplyPowerfulSection;

const Section = ({
	customClasses,
	customStyles,
	header,
	content,
	className,
}: {
	customStyles?: { linearGradient?: string };
	customClasses: { hoverRing?: `hover:${string}`; lgWidth: `lg:w-${string}` };
	header: {
		title: {
			h3: { text: string; className?: string };
			titleIcon?: JSX.Element;
			className?: string;
		};
		p: { text: string; className?: string };
		className?: string;
	};
	content: JSX.Element | JSX.Element[];
	className?: string;
}) => {
	return (
		<div
			className={`${
				customClasses.hoverRing
					? ` hover:ring-8 ${customClasses.hoverRing} `
					: ''
			} duration-300 flex flex-col rounded-2xl w-full ${
				customClasses.lgWidth
			} lg:max-h-[28rem] h-[28rem] text-gray-300 font-medium ${className} justify-around my-8 lg:my-0`}
			style={{ backgroundImage: customStyles?.linearGradient || '' }}
		>
			<header className=' h-1/5 font-medium mb-12 py-4'>
				<div
					className={`flex justify-between px-8 ${
						header.title.className || ''
					}`}
				>
					<h3 className={`text-4xl ${header.title.h3.className}`}>
						{header.title.h3.text}
					</h3>
					{header.title.titleIcon && (
						<span className='w-12 h-12 flex'>{header.title.titleIcon}</span>
					)}
				</div>
				<p className={`text-3xl px-8 my-2 w-3/4 ${header.p.className || ''}`}>
					{header.p.text}
				</p>
			</header>
			<div className='flex justify-start items-end w-full '>
				{/* h-4/5 */}
				{content}
			</div>
		</div>
	);
};

const Design_LayoutSection = () => {
	return (
		<div className='flex justify-center cursor-pointer p-4 flex-col lg:flex-row'>
			<Section
				customStyles={{
					linearGradient: linearGradient.design,
				}}
				customClasses={{
					hoverRing: 'hover:ring-purple-200',
					lgWidth: 'lg:w-3/5',
				}}
				className={classes.designSection}
				header={{
					title: { h3: { text: 'Design' }, className: 'text-white' },
					p: {
						text: 'A freeform canvas with built-in icon packs, stock photos, and more.',
					},
				}}
				content={
					<div className='flex w-full mx-auto mb-2'>
						{[
							{
								text: { nameAndAddress: 'Mount Shasta, USA', year: 2021 },
								img: {
									alt: '',
									src: 'https://framerusercontent.com/images/N66vgHwS6c8WT6xXf689KZlmvFw.jpg',
								},
							},
							{
								text: { nameAndAddress: 'Stok Kangri, Asia', year: 2022 },
								img: {
									alt: 'Image of a mountain',
									src: 'https://framerusercontent.com/images/6jklnKpzlq4yNP7raNcIbK71yV0.jpg',
								},
							},
							{
								text: { nameAndAddress: 'Mount McKinley, USA', year: 2022 },
								img: {
									alt: '',
									src: 'https://framerusercontent.com/images/t0rObSyTWm3yPVIMI0duXOMYej8.jpg',
								},
							},
						].map(
							(
								item,
								index
								// arr
							) => (
								<div
									key={index}
									className={`flex flex-col border border-dotted border-sky-400 p-4 w-1/3 h-[13rem] ${
										classes[`mountainContainer${index + 1}`]
									}`}
									// w-[${(100 / arr.length).toFixed(2)}%]
								>
									<CustomNextImage
										src={item.img.src}
										alt={item.img.alt}
										width={250}
										height={250}
										className='w-full h-40 object-cover'
									/>
									<div className='flex text-sm'>
										<h2>{item.text.nameAndAddress}</h2>
										<p>{item.text.year}</p>
									</div>
								</div>
							)
						)}
					</div>
				}
			/>
			<span className='lg:px-4' />
			<Section
				customClasses={{
					hoverRing: 'hover:ring-sky-200',
					lgWidth: 'lg:w-2/5',
				}}
				className={classes.designSection}
				header={{
					title: {
						h3: { text: 'Layout', className: 'text-black' },
						titleIcon: (
							<StartRoundedIcon
								className={`text-inherit duration-300 cursor-pointer`}
							/>
						),
						className: classes.iconStart,
					},
					p: {
						text: 'Easily create layouts that adapt to any size.',
						className: 'text-gray-600',
					},
				}}
				content={
					<CustomNextImage
						src='https://framerusercontent.com/images/jcVSC9s1vAEqkbOhffVRbD7ji7Q.png'
						alt=''
						width={500}
						height={500}
						className='w-4/5 h-full'
					/>
				}
			/>
		</div>
	);
};

const Collaboration_ContentManagementSystemSection = () => {
	return (
		<div className='flex justify-center cursor-pointer p-4 flex-col lg:flex-row'>
			<Section
				customStyles={{ linearGradient: linearGradient.collaboration }}
				customClasses={{
					lgWidth: 'lg:w-2/5',
				}}
				className={classes.designSection}
				header={{
					title: {
						h3: { text: 'Collaboration', className: 'text-white' },
					},
					p: {
						text: 'Work together and chat with your team in real-time.',
						className: 'text-zinc-200',
					},
				}}
				content={
					<div className='w-full'>
						<div className='p-2 m-4 flex justify-center w-full'>
							<div className='relative bg-white text-black rounded-3xl p-6 mx-6'>
								<CustomNextImage
									src={upLeftWhiteTriangle}
									alt=''
									width={30}
									height={30}
									className='absolute top-0 left-0 -translate-x-3/4 -translate-y-3/4'
								/>
								<p
									className='text-4xl font-bold'
									style={{
										backgroundImage: linearGradient.collaboration,
										backgroundClip: 'text',
										WebkitBackgroundClip: 'text',
										WebkitTextFillColor: 'transparent',
									}}
								>
									Sarah
								</p>
							</div>
						</div>
						<div className='p-2 m-4 flex justify-end w-full'>
							<div className='relative bg-gray-300-alpha-1/2 text-white rounded-3xl p-6 mx-6'>
								<CustomNextImage
									src={upLeftWhiteTriangle}
									alt=''
									width={30}
									height={30}
									className='absolute top-0 left-0 -translate-x-3/4 -translate-y-3/4'
								/>
								<p className='text-4xl font-bold'>Matt</p>
							</div>
						</div>
					</div>
				}
			/>
			<span className='lg:px-4' />
			<Section
				customClasses={{
					hoverRing: 'hover:ring-sky-200',
					lgWidth: 'lg:w-3/5',
				}}
				className={classes.designSection}
				header={{
					title: {
						h3: { text: 'Content Management System', className: 'text-black' },
						titleIcon: (
							<StartRoundedIcon
								className={`text-inherit duration-300 cursor-pointer`}
							/>
						),
						className: classes.iconStart,
					},
					p: {
						text: 'Run a blog, list job openings, or manage your event schedule.',
						className: 'text-gray-600',
					},
				}}
				content={
					<CustomNextImage
						src='https://res.cloudinary.com/mazecode-image-video-usoc/image/upload/v1659969679/ScreenShot_20220808154432_wxfc52.jpg'
						alt=''
						width={500}
						height={500}
						className='w-4/5 h-full'
					/>
				}
			/>
		</div>
	);
};

const Navigation_AnimationsAndEffectsSections = () => {
	/*
	Navigation
	Turn anything into a link and easily navigate your site.
	Pricing
	Blog
	About
	Sign up
	Animations & Effects
	Set up stunning (scroll-based) animations with a few clicks.

*/

	return <div></div>;
};
