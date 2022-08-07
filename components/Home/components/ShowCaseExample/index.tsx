import { StartWhiteIcon, PlusWhiteIcon } from '@data/index';
import CustomNextImage from '../CustomNextImage';

interface IShowCaseExampleProps {
	img: { src: string; alt: string; width: number; height: number };
	darkTheme?: boolean;
}

const ShowCaseExample = ({ img, darkTheme }: IShowCaseExampleProps) => {
	return (
		<div>
			<header
				className={`flex items-center justify-between px-2 h-10 font-bold rounded-t-lg ${
					darkTheme
						? 'bg-neutral-800 text-neutral-400'
						: 'bg-gray-300 text-gray-400'
				}`}
			>
				<div className='flex items-center justify-between'>
					<button className='flex items-center justify-between'>
						<StartWhiteIcon />
					</button>
					<span className='px-1' />
					<span>Desktop · 1000</span>
				</div>
				<div className='flex items-center justify-between'>
					<span>Breakpoint</span>
					<span className='px-1' />
					<button className='flex items-center justify-between'>
						<PlusWhiteIcon />
					</button>
				</div>
			</header>
			<div>
				<CustomNextImage
					src={img.src}
					width={img.width}
					height={img.height}
					alt={img.alt}
					// className={`w-[${img.width}px] h-[${img.height}px]`}
					style={{ width: img.width, height: img.height }}
				/>
			</div>
		</div>
	);
};

export default ShowCaseExample;
