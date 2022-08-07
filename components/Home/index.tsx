import Head from 'next/head';
import CommonLayout from '../layouts/Common';
import DesignPublishDoneSection from './DesignPublishDoneSection';
import HeroSection from './Hero';

const Home = () => {
	return (
		<CommonLayout>
			<Head>
				<title>Framer: Ship sites with style</title>
				<meta
					name='description'
					content='Easily go from design to world-class site with Framer, the web builder for creative pros.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='w-full'>
				<HeroSection />
				<DesignPublishDoneSection />
			</main>
		</CommonLayout>
	);
};

export default Home;
