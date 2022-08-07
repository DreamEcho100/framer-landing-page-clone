import classes from './index.module.css';
import { useState } from 'react';
import { pageWhiteIconUrl } from '@data/index';
import CustomNextImage from '@components/common/CustomNextImage';

const mainHeaderData = {
	logo: {
		href: '#',
		text: 'Framer',
		iconUrl: pageWhiteIconUrl,
	},
	nav: [
		{ href: '#', text: 'Templates' },
		{ href: '#', text: 'Learn' },
		{ href: '#', text: 'Plugins' },
		{ href: '#', text: 'Gallery' },
		{
			__type: 'DROP_DOWN_LIST',
			entry: 'Use cases',
			list: [
				{ href: '#', text: 'Everyone' },
				{ href: '#', text: 'Marketing Teams' },
				{ href: '#', text: 'Freelancers' },
				{ href: '#', text: 'Organizations' },
				{ href: '#', text: 'Prototyping' },
			],
		},
		{
			__type: 'DROP_DOWN_LIST',
			entry: 'Resources',
			list: [
				{ href: '#', text: 'Desktop app' },
				{ href: '#', text: 'Figma Plugin' },
				{ href: '#', text: 'SEO' },
				{ href: '#', text: 'Experts' },
			],
		},
		{
			__type: 'DROP_DOWN_LIST',
			entry: 'Support',
			list: [
				{ href: '#', text: 'Updates' },
				{ href: '#', text: 'Discord' },
				{ href: '#', text: 'Startups' },
				{ href: '#', text: 'Contact' },
			],
		},

		{ href: '#', text: 'Pricing' },
	],
	specialButton: {
		href: '#',
		text: 'Start for free',
	},
};

const SubMenuOnSmallerScreens = ({
	item,
}: {
	item: {
		__type: string;
		entry: string;
		list: {
			href: string;
			text: string;
		}[];
		href?: undefined;
		text?: undefined;
	};
}) => {
	const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

	return (
		<li
			className={`mx-1 my-1 relative ${classes.navOnHoverContainer}`}
			key={item.entry}
		>
			<button
				className='px-3 py-2 flex justify-between items-center hover:bg-zinc-700 rounded-lg cursor-pointer'
				onClick={() => setIsSubMenuVisible((prev) => !prev)}
				title={`show ${item.entry} dropdown on hover or focus`}
			>
				{item.entry} <span className='px-1' />
				<span
					style={{
						borderLeft: '0.25rem solid transparent',
						borderRight: '0.25rem solid transparent',
						borderTop: '0.25rem solid #fff',
						fontSize: 0,
						lineHeight: 0,
					}}
				/>
			</button>
			<nav className={isSubMenuVisible ? '' : 'hidden'}>
				<ul className='mx-4 flex flex-col justify-between items-center min-w-[12rem]'>
					{item.list.map((subItem) => (
						<li
							className='w-full hover:bg-zinc-700 px-3 py-2 rounded-lg cursor-pointer'
							key={subItem.text}
						>
							<a href={subItem.href}>{subItem.text}</a>
						</li>
					))}
				</ul>
			</nav>
		</li>
	);
};

const MainHeader = () => {
	const [isNavOnHoverContainerVisible, setIsNavOnHoverContainerVisible] =
		useState(false);

	return (
		<header className='z-10 relative bg-black text-white w-full text-lg font-bold h-16'>
			<div className='w-full h-full max-w-[1400px] mx-auto flex justify-between items-center px-4'>
				<div className='bg-zinc-700 px-4 py-1 rounded-lg'>
					<a
						href={mainHeaderData.logo.href}
						className=' flex justify-between items-center'
					>
						<CustomNextImage
							width={16}
							height={16}
							className='w-4 h-4'
							src={mainHeaderData.logo.iconUrl}
							alt=''
						/>
						<span className='px-1' />
						{mainHeaderData.logo.text}
					</a>
				</div>
				<nav className='hidden lg:flex'>
					<ul className='flex justify-between items-center'>
						{mainHeaderData.nav.map((item) => {
							if (item.__type === 'DROP_DOWN_LIST')
								return (
									<li
										className={`hover:bg-zinc-700 px-2 py-1 rounded-lg cursor-pointer relative ${classes.navOnHoverContainer}`}
										key={item.entry}
									>
										<button className='flex justify-between items-center'>
											{item.entry} <span className='px-1' />
											<span
												style={{
													borderLeft: '0.25rem solid transparent',
													borderRight: '0.25rem solid transparent',
													borderTop: '0.25rem solid #fff',
													fontSize: 0,
													lineHeight: 0,
												}}
											/>
										</button>
										<nav
											className={`bg-zinc-800 rounded-2xl ${classes.navOnHover}`}
										>
											<ul className='flex flex-col justify-between items-center min-w-[12rem]'>
												{item.list.map((subItem) => (
													<li
														className='w-full hover:bg-zinc-700 px-4 py-2 rounded-lg cursor-pointer'
														key={subItem.text}
													>
														<a href={subItem.href}>{subItem.text}</a>
													</li>
												))}
											</ul>
										</nav>
									</li>
								);

							return (
								<li
									className='hover:bg-zinc-700 px-2 py-1 rounded-lg cursor-pointer'
									key={item.text}
								>
									<a href={item.href}>{item.text}</a>
								</li>
							);
						})}
					</ul>
				</nav>
				<button className='bg-img-special-1 px-2 py-1 rounded-lg hidden lg:flex'>
					<a href={mainHeaderData.specialButton.href}>
						{mainHeaderData.specialButton.text}
					</a>
				</button>

				<button
					className='flex flex-col justify-around lg:hidden w-6 h-6'
					onClick={() => setIsNavOnHoverContainerVisible((prev) => !prev)}
				>
					<span className='w-full h-1 bg-white'></span>
					<span className='w-full h-1 bg-white'></span>
					<span className='w-full h-1 bg-white'></span>
				</button>
			</div>
			<div
				className={`${classes.dropdownOnSmallScreens} ${
					isNavOnHoverContainerVisible ? '' : 'hidden'
				} bg-black flex lg:hidden absolute top-full left-0 w-full`}
			>
				<nav>
					<ul className='flex flex-col justify-between'>
						{mainHeaderData.nav.map((item) => {
							if (item.__type === 'DROP_DOWN_LIST')
								return <SubMenuOnSmallerScreens item={item} key={item.entry} />;

							return (
								<li
									className='hover:bg-zinc-700 px-4 py-4 rounded-lg cursor-pointer'
									key={item.text}
								>
									<a href={item.href}>{item.text}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default MainHeader;
