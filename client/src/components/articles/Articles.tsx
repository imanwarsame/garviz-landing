import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

export default function Articles() {
	return (
		<Box
			component={motion.div}
			initial={{ opacity: 0 }} //Initial state (invisible)
			animate={{ opacity: 1 }} //Final state (fully visible)
			transition={{ duration: 1, ease: 'easeInOut' }} //Duration of the fade-in effect
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'center',
			}}
		>
			<Stack direction='column' spacing={2} paddingTop='10vh'>
				<Typography>Articles</Typography>
			</Stack>
		</Box>
	);
}
