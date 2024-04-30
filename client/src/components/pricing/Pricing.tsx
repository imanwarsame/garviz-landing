import { Box, Button, Grid, Typography } from '@mui/material';
import SinglePricePlan from './SinglePricePlan';

export default function Pricing() {
	return (
		<Box
			component='div'
			sx={{
				position: 'relative',
				height: '100vh',
				width: '100vw',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '40px',
				textAlign: 'center',
				paddingY: '50px',
			}}
		>
			<Typography sx={{ typography: { xs: 'h3', md: 'h2' } }}>Pricing</Typography>
			<Grid container spacing={3} sx={{ width: { xs: '90%', md: '80%' } }}>
				<Grid item xs={12} md={4}>
					<SinglePricePlan
						title='Conference'
						currency='£'
						value={49}
						summary='Access to essential features and resources for beginners.'
						whatsIncluded={['Access to basic features', 'Limited support']}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<SinglePricePlan
						title='Europa'
						currency='£'
						value={99}
						summary='Ideal for those who need additional features and support.'
						whatsIncluded={['Access to standard features', 'Priority support']}
						highlighted={true}
					/>
				</Grid>
				<Grid item xs={12} md={4}>
					<SinglePricePlan
						title='Champions'
						currency='£'
						value={149}
						summary='Advanced features and premium support for professionals.'
						whatsIncluded={['Access to premium features', '24/7 priority support']}
					/>
				</Grid>
				<Grid item xs={0} md={4}>
					{/* This is a spacer to make sure the button is in the middle */}
				</Grid>
				<Grid item xs={12} md={4}>
					<Button
						variant='contained'
						size='large'
						onClick={() => console.log('Get started')}
						sx={{ borderRadius: 8, width: '100%' }}
					>
						Get started
					</Button>
				</Grid>
			</Grid>
		</Box>
	);
}
