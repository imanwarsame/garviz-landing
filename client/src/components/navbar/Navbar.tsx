import { scroller } from 'react-scroll';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppBar, Button, Stack, Toolbar, Typography, useTheme } from '@mui/material';
import NavigationLinks from './NavigationLinks';
import DarkModeToggle from '../darkmode/DarkModeToggle';

export default function Navbar() {
	const theme = useTheme();
	const navigate = useNavigate();
	const location = useLocation();
	const currentLocation = location.pathname;

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

	/**
	 * The function `handleRouteChange` navigates to a new route and closes the menu (for mobile).
	 * @param {string} href - The `href` parameter in the `handleRouteChange` function is a string that
	 * represents the URL of the route that the application will navigate to.
	 */
	const handleRouteChange = (href: string) => {
		navigate(href);
	};

	const links = [
		{
			title: 'Features',
			action: async () => {
				if (currentLocation !== '/') {
					await handleRouteChange('/');
					scrollToElement('features_element');
				} else {
					scrollToElement('features_element');
				}
			},
		},
		{
			title: 'Pricing',
			action: async () => {
				if (currentLocation !== '/') {
					await handleRouteChange('/');
					scrollToElement('pricing_element');
				} else {
					scrollToElement('pricing_element');
				}
			},
		},
		{
			title: 'Contact',
			action: async () => {
				if (currentLocation !== '/') {
					await handleRouteChange('/');
					scrollToElement('contact_element');
				} else {
					scrollToElement('contact_element');
				}
			},
		},
	];

	return (
		<AppBar
			position='fixed'
			component={motion.div}
			sx={{
				boxShadow: 0,
				borderRadius: 0,
				backgroundImage:
					currentLocation === '/'
						? 'none'
						: `radial-gradient(rgba(0, 0, 0, 0) 1px, ${theme.palette.background.default} 1px)`,
				backgroundSize: currentLocation === '/' ? 'none' : '4px 4px',
				backgroundColor: 'transparent',
				backdropFilter: 'blur(3px)',
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
				<Typography fontWeight='bold' variant='h4'>
					GARVIZ.
				</Typography>
				<NavigationLinks links={links} />
				<Stack direction='row' spacing={1}>
					<Button variant='outlined' sx={{ borderRadius: '25px' }}>
						Get in touch
					</Button>
					<DarkModeToggle />
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
