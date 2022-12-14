import CustomNextImage from '@components/Home/components/CustomNextImage';
import SectionHeader from '@components/core/SectionHeader';
import {
	addRoundedGrayBg,
	dataBaseRoundedGrayBg,
	layoutRoundedGrayBg,
	pageBlackIconUrl,
	PlusWhiteIcon,
	settingsBlack,
	squareRoundedGrayBg,
	startBlack,
	StartWhiteIcon,
	tLetterRoundedGrayBg,
	UpCurvedLTRArrow,
} from '@data/index';
import React, { Fragment } from 'react';
import ShowCaseExample from '@components/Home/components/ShowCaseExample';

const linearGradient =
	'linear-gradient(301deg, rgb(0, 204, 255) 0%, rgb(0, 136, 255) 100%)';
const linearGradient2 =
	'linear-gradient(315deg, rgb(7, 222, 255) 0%, rgb(15, 151, 255) 100%)';

const DesignPublishDoneSection = () => {
	return (
		<section
			className='w-full'
			style={{
				backgroundImage:
					'linear-gradient(180deg, rgb(0, 5, 25), rgb(19 63 160)',
			}}
		>
			<div className='pt-40'></div>
			<SectionHeader
				className='text-white'
				h2={{
					text: 'Design, publish, done.',
					linearGradient,
				}}
				p={{
					text: "Framer's canvas is incredible for web design. Create web pages with text, links, media, and animations—no code needed. Ready to ship? Publish your site with a single click.",
				}}
				button={{
					href: '#',
					linearGradient: linearGradient2,
					text: 'Watch beginner tutorial',
				}}
			/>
			<div className='w-full overflow-hidden'>
				<div className='w-[200%] min-w-[1600px] mt-24 flex items-center justify-center -translate-x-1/3 md:-translate-x-1/4 m-auto relative'>
					<span className='w-20 h-6 absolute top-0 left-1/2 translate-x-1/2 -translate-y-1/2'>
						<UpCurvedLTRArrow />
					</span>
					<div className='w-[40%] max-w-[1200px] text-sm'>
						<div className='text-white font-bold w-full flex items-center justify-end text-lg mb-4'>
							just design and…
						</div>
						<div className='bg-[rgb(209 221 231)] rounded-t-lg overflow-hidden'>
							<header className='bg-white w-full flex items-center justify-between px-2 h-12 font-bold'>
								<div className='flex items-center justify-center text-gray-400'>
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
										<span className='text-black'>Detail</span>· detail.co
									</span>
								</div>
								<div className='flex items-center justify-center'>
									{[
										{
											alt: '',
											src: 'https://framerusercontent.com/images/uLup0zfUiK1uPPQPXjWFFT1XFE.jpg',
										},
										{
											alt: '',
											src: 'https://framerusercontent.com/images/a7dyLqNdiLsSOW4xIRAEOWthhV0.jpg',
										},
										{
											alt: '',
											src: 'https://framerusercontent.com/images/xiftXgFpu1fdeUigjHL7mQuc.png',
										},
										{
											alt: '',
											src: 'https://framerusercontent.com/images/SN4oE17ztiVUFJOxsWt9aKmg0.gif',
										},
									].map((item) => (
										<Fragment key={item.src}>
											<span>
												<CustomNextImage
													src={item.src}
													alt={item.alt}
													width={20}
													height={20}
													className='rounded-md'
												/>
											</span>

											<span className='px-1'></span>
										</Fragment>
									))}
									<button className='p-1 bg-gray-200 rounded-lg'>
										<CustomNextImage
											src={settingsBlack}
											alt={''}
											width={20}
											height={20}
										/>
									</button>

									<span className='px-1'></span>
									<button className='p-1 bg-gray-200 rounded-lg'>
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
							<div className='bg-gray-200 px-4 pt-20 flex items-end relative'>
								<span className='px-12' />
								<ShowCaseExample
									img={{
										src: 'https://framerusercontent.com/images/QDskOegtO9Mi7zlcyHENctrYu0.jpg',
										width: 650,
										height: 600,
										alt: '',
									}}
								/>
								<span className='px-4' />
								<ShowCaseExample
									img={{
										src: 'https://framerusercontent.com/images/B1QmVFcePTR5dbg9Nu0RC4pB1U.jpg',
										width: 250,
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
					</div>
					<span className='px-20'></span>
					<div className='w-[40%] max-w-[1000px] text-sm'>
						<div className='text-white font-bold w-full flex items-center justify-start text-lg mb-4'>
							…publish!
						</div>
						<div className='bg-[rgb(209 221 231)] rounded-t-lg overflow-hidden'>
							<header className='bg-white w-full flex items-center justify-between px-2 h-12 font-bold'>
								<div className='flex items-center justify-center'>
									<div className='w-3 h-3 rounded-full bg-gray-300 mx-1' />
									<div className='w-3 h-3 rounded-full bg-gray-300 mx-1' />
									<div className='w-3 h-3 rounded-full bg-gray-300 mx-1' />
								</div>
								<div className='border text-gray-300 hover:text-black border-gray-200 w-1/2 flex items-center justify-center p-1 rounded-lg'>
									<a href='#'>https://detail.co/</a>
								</div>
								<div>
									<CustomNextImage
										src='https://framerusercontent.com/images/xiftXgFpu1fdeUigjHL7mQuc.png'
										width={25}
										height={25}
										className='rounded-full'
									/>
								</div>
							</header>
							<div className='w-full'>
								<CustomNextImage
									src='https://framerusercontent.com/images/QDskOegtO9Mi7zlcyHENctrYu0.jpg'
									width={1000}
									height={720}
									style={{ width: '100%', height: 720, maxWidth: 1000 }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DesignPublishDoneSection;
