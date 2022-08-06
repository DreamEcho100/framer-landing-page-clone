import MainHeader from './Header';

const CommonLayout = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	return (
		<>
			<MainHeader />
			{children}
			<footer></footer>
		</>
	);
};

export default CommonLayout;
