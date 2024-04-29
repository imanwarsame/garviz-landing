import { Box, Stack, Typography } from '@mui/material';
import { ParallaxLayer } from '@react-spring/parallax';

export default function Analyse() {
	return (
		<ParallaxLayer speed={0}>
			<Box
				aria-label='analyse-feature-text'
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
						Analyse
					</Typography>
					<Typography sx={{ typography: { xs: 'caption', md: 'h6' } }}>
						Use our advances analytics engine to take your team to the next level
					</Typography>
				</Stack>
			</Box>
		</ParallaxLayer>
	);
}
