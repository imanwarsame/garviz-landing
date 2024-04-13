import { Button, Paper, Stack, Typography, useTheme } from '@mui/material';

interface SinglePricePlanProps {
	title: string;
	currency: string;
	value: number;
	summary: string;
	whatsIncluded: string[];
	highlighted?: boolean;
}

export default function SinglePricePlan({
	title,
	currency,
	value,
	summary,
	whatsIncluded,
	highlighted = false,
}: SinglePricePlanProps) {
	const theme = useTheme();

	return (
		<Paper
			elevation={0}
			sx={{
				border: 1,
				borderColor: highlighted ? theme.palette.text.primary : theme.palette.primary.main,
				textAlign: 'left',
				padding: '20px',
				backgroundColor: highlighted ? theme.palette.secondary.main : theme.palette.background.default,
			}}
		>
			<Stack direction='column' spacing={2}>
				<Typography fontWeight='bold' sx={{ typography: { xs: 'h6', md: 'h4' } }}>
					{title}
				</Typography>
				<Typography fontWeight='bold' sx={{ typography: { xs: 'h4', md: 'h2' } }}>
					{currency + value.toString()}
				</Typography>
				<Typography sx={{ typography: { xs: 'body1', md: 'h6' } }}>{summary}</Typography>
				<Button variant={highlighted ? 'contained' : 'outlined'} color='primary' disableElevation>
					Get started
				</Button>
				<Stack direction='column'>
					<Typography fontWeight='bold' sx={{ typography: { xs: 'caption', md: 'body1' } }}>
						What&apos;s included
					</Typography>
					{whatsIncluded.map((item, index) => (
						<Typography key={index} sx={{ typography: { xs: 'caption', md: 'body1' } }}>
							{'• ' + item}
						</Typography>
					))}
				</Stack>
			</Stack>
		</Paper>
	);
}
