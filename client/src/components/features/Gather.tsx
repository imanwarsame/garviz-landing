import { Box, Stack, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import { ParallaxLayer } from '@react-spring/parallax';
import GatherImage from '../../assets/Gather.png';

export default function Gather() {
	return (
		<Element name='features_element'>
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
				<ParallaxLayer speed={0}>
					<Box
						aria-label='gather-feature-image'
						component='img'
						src={GatherImage}
						sx={{
							position: 'absolute',
							top: '50%', //Centre vertically
							left: '5%', //Adjust distance from the left
							transform: 'translateY(-50%)', //Shift upward by half of its height
							width: '40%',
							zIndex: 2,
						}}
					></Box>
				</ParallaxLayer>
				<ParallaxLayer speed={0}>
					<Box
						aria-label='gather-feature-text'
						component='div'
						sx={{
							position: 'absolute',
							top: '50%', //Centre vertically
							right: '5%', //Adjust distance from the right
							transform: 'translateY(-50%)', //Shift upward by half of its height
							textAlign: 'right', //Align text to the right
							paddingRight: '5%', //Add padding to the right for spacing
							zIndex: 2,
						}}
					>
						<Stack direction='column' spacing={1}>
							<Typography fontWeight='bold' sx={{ typography: { xs: 'h4', md: 'h2' } }}>
								Gather
							</Typography>
							<Typography sx={{ typography: { xs: 'body2', md: 'h6' } }}>
								An intuitive platform to gather all the raw data for your team
							</Typography>
						</Stack>
					</Box>
				</ParallaxLayer>
			</Box>
		</Element>
	);
}
