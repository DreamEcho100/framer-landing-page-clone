import { HTMLAttributes } from 'react';

const SectionHeader = ({
	h2,
	button,
	p,
	className,
	...props
}: HTMLAttributes<HTMLElement> & {
	h2: { text: string; linearGradient: string };
	p: { text: string };
	button: { text: string; href: string; linearGradient: string };
}) => {
	return (
		<header
			className={`w-full px-8 pt-32 pb-24 flex flex-col items-center justify-center text-center font-medium ${className}`}
			{...props}
		>
			<h2
				style={{
					backgroundImage: h2.linearGradient,
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				}}
				className='text-8xl font-bold'
			>
				{h2.text}
			</h2>
			<p className='my-8 text-4xl max-w-[800px] leading-relaxed'>{p.text}</p>
			<button
				className='text-4xl px-6 py-4 rounded-lg text-white'
				style={{ backgroundImage: button.linearGradient }}
			>
				<a href={button.href}>{button.text}</a>
			</button>
		</header>
	);
};

export default SectionHeader;
