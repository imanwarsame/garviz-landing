import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import DarkModeToggle from '../darkmode/DarkModeToggle';

export default function MobileNavbar({ scrollTo }: { scrollTo: (index: number) => void }) {
	return (
		<AppBar
			position='fixed'
			component='div'
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
				<Typography fontWeight='bold' variant='h6' onClick={() => scrollTo(0)}>
					GARVIZ.
				</Typography>
				<Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
					<DarkModeToggle />
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
