import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import DarkModeToggle from '../darkmode/DarkModeToggle';

export default function MobileNavbar() {
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
					paddingRight: 0,
				}}
			>
				<Typography fontWeight='bold' variant='h6' onClick={() => window.scrollTo(0, 0)}>
					GARVIZ.
				</Typography>
				<Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
					<DarkModeToggle />
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
