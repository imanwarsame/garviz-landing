import { Box, Stack, Typography } from '@mui/material';

export default function Gather() {
	return (
		<Box
			component='div'
			sx={{
				position: 'relative',
				height: '100vh',
				width: '100vw',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
			}}
		>
			<Box
				aria-label='gather-feature-text'
				component='div'
				sx={{
					position: 'absolute',
					width: '40vw',
					top: '50%', //Centre vertically
					right: '5%', //Adjust distance from the right
					transform: 'translateY(-50%)', //Shift upward by half of its height
					textAlign: 'right', //Align text to the right
					paddingRight: '5%', //Add padding to the right for spacing
					zIndex: 2,
				}}
			>
				<Stack direction='column' spacing={1}>
					<Typography fontWeight='bold' sx={{ typography: { xs: 'h5', md: 'h2' } }}>
						Gather
					</Typography>
					<Typography sx={{ typography: { xs: 'caption', md: 'h6' } }}>
						An intuative platform to make the logging of raw data frictionless
					</Typography>
				</Stack>
			</Box>
		</Box>
	);
}
