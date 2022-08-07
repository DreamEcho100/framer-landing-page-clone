import CustomNextImage from '@components/Home/components/CustomNextImage';
import {
	discordWhiteIconUrl,
	dribbleWhiteIconUrl,
	instagramWhiteIconUrl,
	pageWhiteIconUrl,
	twitterWhiteIconUrl,
	youtubeWhiteIconUrl,
} from '@data/index';

const mainFooterData = {
	generalLinks: [
		{
			header: 'Framer',
			list: [
				{ href: '#', text: 'Start for free' },
				{ href: '#', text: 'Download' },
				{ href: '#', text: 'Use Cases' },
				{ href: '#', text: 'Gallery' },
				{ href: '#', text: 'Learn' },
				{ href: '#', text: 'Updates' },
				{ href: '#', text: 'Pricing' },
			],
		},
		{
			header: 'Templates',
			list: [
				{ href: '#', text: 'Plugins' },
				{ href: '#', text: 'Figma Plugin' },
				{ href: '#', text: 'Experts' },
				{ href: '#', text: 'Startups' },
				{ href: '#', text: 'Developers' },
			],
		},
		{
			header: 'Templates',
			list: [
				{ href: '#', text: 'New' },
				{ href: '#', text: 'Free' },
				{ href: '#', text: 'Agency' },
				{ href: '#', text: 'Blog' },
				{ href: '#', text: 'Brand Guidelines' },
				{ href: '#', text: 'Changelog' },
				{ href: '#', text: 'Landing Page' },
				{ href: '#', text: 'Personal' },
				{ href: '#', text: 'Photography' },
				{ href: '#', text: 'Podcast' },
				{ href: '#', text: 'Portfolio' },
				{ href: '#', text: 'Splash Page' },
				{ href: '#', text: 'Startup' },
				{ href: '#', text: 'web3' },
				{ href: '#', text: '3D' },
				{ href: '#', text: 'Submit' },
			],
		},
		{
			header: 'Company',
			list: [
				{ href: '#', text: 'About' },
				{ href: '#', text: 'Careers' },
				{ href: '#', text: 'Discord' },
				{ href: '#', text: 'Contact' },
			],
		},
	],
	securityLinks: {
		header: '© 2022 Framer B.V.',
		list: [
			{ href: '#', text: 'Cookies' },
			{ href: '#', text: 'Security' },
			{ href: '#', text: 'Abuse' },
			{ href: '#', text: 'Terms of Service' },
			{ href: '#', text: 'Privacy' },
		],
	},
	socialLinks: [
		{ href: '', iconUrl: discordWhiteIconUrl },
		{ href: '', iconUrl: youtubeWhiteIconUrl },
		{ href: '', iconUrl: instagramWhiteIconUrl },
		{ href: '', iconUrl: twitterWhiteIconUrl },
		{ href: '', iconUrl: dribbleWhiteIconUrl },
	],
};

const MainFooter = () => {
	const { generalLinks, securityLinks, socialLinks } = mainFooterData;
	return (
		<footer className='w-full bg-black text-zinc-500 font-bold text-lg px-6 py-8'>
			<div className='flex items-start justify-between max-w-[1000px] mx-auto flex-wrap md:flex-nowrap '>
				<div className='m-6'>
					<a href='#'>
						<CustomNextImage
							width={24}
							height={24}
							className='w-6 h-6'
							src={pageWhiteIconUrl}
							alt=''
						/>
					</a>
				</div>
				{generalLinks.map((item) => (
					<div key={item.header} className='m-6'>
						<h3 className='font-bold text-white text-xl'>{item.header}</h3>
						<nav>
							<ul>
								{item.list.map((listItem) => (
									<li key={listItem.text} className='my-2'>
										<a href={listItem.href}>{listItem.text}</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				))}
			</div>
			<div className='w-full flex flex-wrap justify-between lg:flex-row'>
				<div className='m-6 flex flex-col lg:flex-row lg:items-center lg:w-fit'>
					<h3 className='font-bold text-zinc-400 text-sm'>
						{securityLinks.header}
					</h3>
					<nav>
						<ul className='flex flex-col lg:flex-row lg:items-center'>
							{securityLinks.list.map((listItem) => (
								<li key={listItem.text} className='m-2'>
									<a href={listItem.href}>
										<small>{listItem.text}</small>
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className='m-6 flex w-full justify-center items-center lg:flex-row lg:w-fit'>
					<nav>
						<ul className='flex flex-col md:flex-row md:items-center'>
							{socialLinks.map((listItem) => (
								<li key={listItem.iconUrl} className='m-2'>
									<a href={listItem.href}>
										<CustomNextImage
											width={24}
											height={24}
											className='w-6 h-6'
											src={listItem.iconUrl}
											alt=''
										/>
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default MainFooter;
