import { motion } from 'framer-motion';
import { scroller } from 'react-scroll';
import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import DarkModeToggle from '../darkmode/DarkModeToggle';

export default function MobileNavbar() {
	/**
	 * The scrollToElement function scrolls to a specified element with a smooth animation using specified
	 * duration and easing function.
	 * @param {string} elementName - The `elementName` parameter in the `scrollToElement` function is a
	 * string that represents the name or identifier of the element to which you want to scroll on the
	 * webpage.
	 */
	const scrollToElement = (elementName: string) => {
		scroller.scrollTo(elementName, {
			duration: 3000, //Duration of the scroll animation in milliseconds
			delay: 0, //Delay before scrolling begins in milliseconds
			smooth: 'easeInOutQuart', //Scrolling animation easing function
		});
	};

	return (
		<AppBar
			position='fixed'
			component={motion.div}
			sx={{
				boxShadow: 0,
				borderRadius: 0,
				background: 'transparent',
				zIndex: 2,
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					fontWeight='bold'
					variant='h6'
					onClick={() => {
						scrollToElement('home_element');
					}}
				>
					GARVIZ.
				</Typography>
				<Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
					<DarkModeToggle />
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
