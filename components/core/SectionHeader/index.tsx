import { CSSProperties, HTMLAttributes } from 'react';

const H2 = ({
	linearGradient,
	text,
	style,
	className,
}: {
	text: string;
	linearGradient: string;
	className?: ((className: string) => string) | string; //((className: string) => string) | string
	style?: ((style: CSSProperties) => CSSProperties) | CSSProperties;
} & Pick<HTMLAttributes<HTMLHeadingElement>, 'className' | 'style'>) => {
	style && console.log('style', style);
	const h2Styles = (() => {
		const initStyles = {
			backgroundImage: linearGradient,
			backgroundClip: 'text',
			WebkitBackgroundClip: 'text',
			WebkitTextFillColor: 'transparent',
		};

		if (!style) return initStyles;

		if (typeof style === 'function') return style(initStyles);

		return {
			...initStyles,
			...style,
		};
	})();
	const h2ClassNames = (() => {
		const initClasses = 'text-8xl font-bold';

		if (!className) return initClasses;

		if (typeof className === 'function')
			return (className as (className: string) => string)(initClasses);
		// return className(initClasses);

		return `${initClasses} ${className}`;
	})();

	return (
		<h2 style={h2Styles} className={h2ClassNames}>
			{text}
		</h2>
	);
};

const SectionHeader = ({
	h2,
	button,
	p,
	className,
	...props
}: HTMLAttributes<HTMLElement> & {
	h2: Parameters<typeof H2>[0];
	p: { text: string };
	button?: { text: string; href: string; linearGradient: string };
}) => {
	return (
		<header
			className={`w-full px-8 pt-32 pb-24 flex flex-col items-center justify-center text-center font-medium ${className}`}
			{...props}
		>
			<H2 {...h2} />
			<p className='my-8 text-4xl max-w-[800px] leading-relaxed'>{p.text}</p>
			{button && (
				<button
					className='text-4xl px-6 py-4 rounded-lg text-white'
					style={{ backgroundImage: button.linearGradient }}
				>
					<a href={button.href}>{button.text}</a>
				</button>
			)}
		</header>
	);
};

export default SectionHeader;
