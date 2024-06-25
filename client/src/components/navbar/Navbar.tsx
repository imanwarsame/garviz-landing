import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material';
import DarkModeToggle from '../darkmode/DarkModeToggle';
import NavigationLinks from './NavigationLinks';

export default function Navbar({ scrollTo }: { scrollTo: (index: number) => void }) {
	const links = [
		{
			title: 'Features',
			action: async () => scrollTo(1),
		},
		// {
		// 	title: 'Pricing',
		// 	action: async () => scrollTo(5),
		// },
		{
			title: 'Contact',
			action: async () => scrollTo(6),
		},
	];

	return (
		<AppBar
			position='fixed'
			component='div'
			sx={{
				boxShadow: 0,
				borderRadius: 0,
				background: 'transparent',
				backdropFilter: 'blur(20px)',
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
					variant='h4'
					sx={{
						'&:hover': {
							cursor: 'pointer', //Change cursor to pointer on hover
						},
					}}
					onClick={() => scrollTo(0)}
				>
					GARVIZ.
				</Typography>
				<NavigationLinks links={links} />
				<Stack direction='row' spacing={1}>
					<Button variant='outlined' sx={{ borderRadius: 8 }}>
						COMING SOON
					</Button>
					<DarkModeToggle />
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
