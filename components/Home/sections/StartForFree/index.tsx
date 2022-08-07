import CustomNextImage from '@components/Home/components/CustomNextImage';
import SectionHeader from '@components/core/SectionHeader';
import React, { Fragment } from 'react';
import {
	addRoundedGrayBg,
	dataBaseRoundedGrayBg,
	layoutRoundedGrayBg,
	pageBlackIconUrl,
	settingsBlack,
	squareRoundedGrayBg,
	startBlack,
	tLetterRoundedGrayBg,
} from '@data/index';
import ShowCaseExample from '@components/Home/components/ShowCaseExample';

const linearGradient =
	'linear-gradient(315deg, rgb(0, 153, 255) 0%, rgb(0, 204, 255) 100%)';

const linearGradient2 =
	'linear-gradient(315deg, rgb(7, 222, 255) 0%, rgb(15, 151, 255) 100%)';

const StartForFree = () => {
	return (
		<section className='bg-black'>
			<SectionHeader
				className='text-white'
				h2={{
					text: 'Start for free.',
					linearGradient,
				}}
				p={{
					text: 'Design and publish your first free site with Framer today.',
				}}
				button={{
					href: '#',
					linearGradient: linearGradient2,
					text: 'Try Framer for free',
				}}
			/>
			<div className='bg-[rgb(209 221 231)] rounded-t-lg overflow-hidden w-full max-w-[1200px] mx-auto'>
				<header className='bg-neutral-900 w-full flex items-center justify-between px-2 h-12 font-bold'>
					<div className='flex items-center justify-center text-neutral-400'>
						<div>
							<CustomNextImage
								src={pageBlackIconUrl}
								alt=''
								width={15}
								height={15}
							/>
							<span></span>
						</div>
						<span className='px-1'></span>
						{[
							{
								text: 'Insert',
								icon: { alt: '', src: addRoundedGrayBg },
							},
							{
								text: 'Layout',
								icon: { alt: '', src: layoutRoundedGrayBg },
							},
							{
								text: 'Frame',
								icon: { alt: '', src: squareRoundedGrayBg },
							},
							{
								text: 'Text',
								icon: { alt: '', src: tLetterRoundedGrayBg },
							},
							{
								text: 'CMS',
								icon: { alt: '', src: dataBaseRoundedGrayBg },
							},
						].map((item) => (
							<span
								key={item.text}
								className='flex items-center justify-center px-1'
							>
								<CustomNextImage
									src={item.icon.src}
									alt={item.icon.alt}
									width={20}
									height={20}
								/>
								<span className='px-1'></span>
								<span>{item.text}</span>
							</span>
						))}
						<span className='p-4' />
						<span>
							<span className='text-neutral-500'>Detail</span>· detail.co
						</span>
					</div>
					<div className='flex items-center justify-center'>
						<span>
							<CustomNextImage
								src='https://framerusercontent.com/images/pTGZ5KtUMeVrd2GE4pEozsWoKfI.png'
								alt=''
								width={20}
								height={20}
								className='rounded-md'
							/>
						</span>

						<span className='px-1' />
						<button className='p-1 bg-neutral-400 rounded-lg'>
							<CustomNextImage
								src={settingsBlack}
								alt={''}
								width={20}
								height={20}
							/>
						</button>

						<span className='px-1'></span>
						<button className='p-1 bg-neutral-400 rounded-lg'>
							<CustomNextImage
								src={startBlack}
								alt={''}
								width={20}
								height={20}
							/>
						</button>

						<span className='px-1'></span>
						<button
							className='text-white px-2 py-1 rounded-lg'
							style={{ backgroundColor: 'rgb(15, 153, 255)' }}
						>
							Publish
						</button>
					</div>
				</header>
				<div className='bg-neutral-700 px-4 pt-20 flex items-end relative'>
					<span className='px-12' />
					<ShowCaseExample
						darkTheme
						img={{
							src: 'https://framerusercontent.com/images/kgbbDuMXQcrih1cAJ6ILx5WjUs.jpg',
							width: 650,
							height: 600,
							alt: '',
						}}
					/>
					<span className='px-4' />
					<ShowCaseExample
						darkTheme
						img={{
							src: 'https://framerusercontent.com/images/IQe6pB7tB2VbH0hxRBUyUO04OA.jpg',
							width: 300,
							height: 600,
							alt: '',
						}}
					/>
					<div
						className='absolute top-0 left-0 w-full h-full'
						style={{
							backgroundImage:
								'linear-gradient(0deg, rgb(17, 61, 128, 0.3), transparent, transparent, transparent, transparent)',
						}}
					/>
				</div>
			</div>
		</section>
	);
};

export default StartForFree;
