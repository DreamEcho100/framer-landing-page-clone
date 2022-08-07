import Head from 'next/head';
import CommonLayout from '../layouts/Common';
import DesignPublishDoneSection from './sections/DesignPublishDoneSection';
import HeroSection from './sections/HeroSection';
import TopNotchTemplatesSection from './sections/TopNotchTemplatesSection';
import ItIsLikeMagicSection from './sections/ItIsLikeMagicSection';
import StartForFree from './sections/StartForFree';

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
				<TopNotchTemplatesSection />
				<ItIsLikeMagicSection />
				<StartForFree />
			</main>
		</CommonLayout>
	);
};

export default Home;
