import CustomNextImage from '@components/Home/components/CustomNextImage';
import classes from './index.module.css';
const imagesLists = [
	[
		{
			src: 'https://framerusercontent.com/images/86PfRIbmyrtSxaeOA4MePRm9Gg.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/t8KF7fAMOGOISlD4kKKB0owElc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/uPKaIli4tfeQtGnmHEyOLw0uYs.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/EGOpYnd3MpapkwtEKosnQUrSuY.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/y18BI7RiWORTMeVZFfgGi2WRU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/6qN0ICB4nVSZoc5g0BzWdyncU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/86PfRIbmyrtSxaeOA4MePRm9Gg.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/t8KF7fAMOGOISlD4kKKB0owElc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/uPKaIli4tfeQtGnmHEyOLw0uYs.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/EGOpYnd3MpapkwtEKosnQUrSuY.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/y18BI7RiWORTMeVZFfgGi2WRU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/6qN0ICB4nVSZoc5g0BzWdyncU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/86PfRIbmyrtSxaeOA4MePRm9Gg.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/t8KF7fAMOGOISlD4kKKB0owElc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/uPKaIli4tfeQtGnmHEyOLw0uYs.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/EGOpYnd3MpapkwtEKosnQUrSuY.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/y18BI7RiWORTMeVZFfgGi2WRU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/6qN0ICB4nVSZoc5g0BzWdyncU.jpg',
			alt: '',
		},
	],
	[
		{
			src: 'https://framerusercontent.com/images/rKY4UZRs5BrOKbzWzxjGAY9LhE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/ZaHvW0kjUk5fQWRMdJzrU4Uc88I.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/gsMYA38tnPfPHjxmLxSvV2uWI0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/wkJF69cYYucYXHl6xkvxxkMb10.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/IbdZhNFxLpxYPihjWQr0naeKkRE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/KTpJ86c6RLWkNtTnswZkYPJ9Js.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/rKY4UZRs5BrOKbzWzxjGAY9LhE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/ZaHvW0kjUk5fQWRMdJzrU4Uc88I.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/gsMYA38tnPfPHjxmLxSvV2uWI0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/wkJF69cYYucYXHl6xkvxxkMb10.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/IbdZhNFxLpxYPihjWQr0naeKkRE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/KTpJ86c6RLWkNtTnswZkYPJ9Js.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/rKY4UZRs5BrOKbzWzxjGAY9LhE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/ZaHvW0kjUk5fQWRMdJzrU4Uc88I.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/gsMYA38tnPfPHjxmLxSvV2uWI0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/wkJF69cYYucYXHl6xkvxxkMb10.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/IbdZhNFxLpxYPihjWQr0naeKkRE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/KTpJ86c6RLWkNtTnswZkYPJ9Js.jpg',
			alt: '',
		},
	],
	[
		{
			src: 'https://framerusercontent.com/images/54DRu824ete70P9usNrbN4Ljtc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/tibUOCtAwKv0WH0dZnEt50tkVG0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/YeSAVUKmWKMjdLK4VWmPmausyhQ.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/taOWjxLqNENhWw4YOWKlJhVOUU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/rfgSWjiTrB84tpUEqsj6KNlcFuE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/PcTQaOSgvZNtTBPrTiAJzXXdlU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/54DRu824ete70P9usNrbN4Ljtc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/tibUOCtAwKv0WH0dZnEt50tkVG0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/YeSAVUKmWKMjdLK4VWmPmausyhQ.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/taOWjxLqNENhWw4YOWKlJhVOUU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/rfgSWjiTrB84tpUEqsj6KNlcFuE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/PcTQaOSgvZNtTBPrTiAJzXXdlU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/54DRu824ete70P9usNrbN4Ljtc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/tibUOCtAwKv0WH0dZnEt50tkVG0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/YeSAVUKmWKMjdLK4VWmPmausyhQ.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/taOWjxLqNENhWw4YOWKlJhVOUU.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/rfgSWjiTrB84tpUEqsj6KNlcFuE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/PcTQaOSgvZNtTBPrTiAJzXXdlU.jpg',
			alt: '',
		},
	],
	[
		{
			src: 'https://framerusercontent.com/images/tH9JGaCjCwwGtTuE6bjiVHJz4EY.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/0zryWxtlper50ACaio6EMZVxtTc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/AlSQSDXa30lNJux9MW58jtkaIj0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/us0Ph1u6byxcz0ATgUH4mHvjE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/jUubgzeuwNwbOyQwkMz6hAOSxqA.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/U7HlFSyuo04kGY8Ebp23yd003Y8.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/tH9JGaCjCwwGtTuE6bjiVHJz4EY.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/0zryWxtlper50ACaio6EMZVxtTc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/AlSQSDXa30lNJux9MW58jtkaIj0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/us0Ph1u6byxcz0ATgUH4mHvjE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/jUubgzeuwNwbOyQwkMz6hAOSxqA.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/U7HlFSyuo04kGY8Ebp23yd003Y8.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/tH9JGaCjCwwGtTuE6bjiVHJz4EY.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/0zryWxtlper50ACaio6EMZVxtTc.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/AlSQSDXa30lNJux9MW58jtkaIj0.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/us0Ph1u6byxcz0ATgUH4mHvjE.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/jUubgzeuwNwbOyQwkMz6hAOSxqA.jpg',
			alt: '',
		},
		{
			src: 'https://framerusercontent.com/images/U7HlFSyuo04kGY8Ebp23yd003Y8.jpg',
			alt: '',
		},
	],
];
// #00071e
const HeroSection = () => {
	return (
		<section className='min-w-full overflow-hidden h-[75vh] max-h-[1400px] relative flex'>
			<div className='absolute top-0 left-0 min-w-full'>
				{imagesLists.map((images, imagesIndex) => (
					<ul
						key={imagesIndex}
						className={`flex items-center justify-center ${classes.listOfImages}`}
					>
						{images.map((image) => (
							<li key={image.src} className='w-80 md:w-96 lg:w-[32rem]'>
								<CustomNextImage
									width={512}
									height={320}
									className='w-full '
									src={image.src}
									alt={image.alt}
								/>
							</li>
						))}
					</ul>
				))}
			</div>
			<div
				className='relative z-[2] px-4 py-8 mx-auto w-fit text-center font-bold text-white overflow-hidden flex flex-col items-center justify-end select-none min-w-full min-h-full pointer-events-none'
				style={{
					backgroundImage:
						'linear-gradient(0deg, rgb(0, 7, 30), rgb(0, 7, 30, 0.2))',
				}}
			>
				<h1 className='text-7xl md:text-8xl'>Ship sites with style.</h1>
				<p className='text-3xl md:text-4xl md:w-2/3 my-6'>
					Easily go from design to world-class site with Framer, the web builder
					for creative pros.
				</p>
				<div className='w-full flex items-center justify-center flex-col md:flex-row'>
					<button className='text-xl md:text-2xl my-2 pointer-events-auto bg-img-special-1 px-6 py-3 rounded-lg'>
						Start for free
					</button>
					<span className='mx-2 hidden md:flex' />
					<button className='text-xl md:text-2xl my-2 pointer-events-auto bg-slate-200 text-black px-6 py-3 rounded-lg'>
						Browse sites
					</button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

/*

			<p>Design, publish, done.</p>
			<p>
				Framer's canvas is incredible for web design. Create web pages with
				text, links, media, and animations—no code needed. Ready to ship?
				Publish your site with a single click.
			</p>
			<p>Watch beginner tutorial</p>
			<p>just design and…</p>
			<p>Insert</p>
			<p>Layout</p>
			<p>Frame</p>
			<p>Text</p>
			<p>CMS</p>
			<p>Detail</p>
			<p>·</p>
			<p>detail.co</p>
			<p>Publish</p>
			<p>Desktop</p>
			<p>·</p>
			<p>1200</p>
			<p>Breakpoint</p>
			<p>Mobile</p>
			<p>·</p>
			<p>390</p>
			<p>Breakpoint</p>
			<p>…publish!</p>
			<p>🚀</p>
			<p>https://detail.co</p>
*/
