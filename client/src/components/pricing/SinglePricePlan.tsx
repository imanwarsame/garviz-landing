import { Paper, Stack, Typography, useTheme } from '@mui/material';

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
			<Stack direction='column' spacing={{ xs: 0.5, md: 2 }}>
				<Typography fontWeight='bold' sx={{ typography: { xs: 'h5', md: 'h4' } }}>
					{title}
				</Typography>
				<Typography fontWeight='bold' sx={{ typography: { xs: 'h6', md: 'h2' } }}>
					{currency + value.toString()}
				</Typography>
				<Typography sx={{ display: { xs: 'none', md: 'block' }, typography: { xs: 'caption', md: 'h6' } }}>
					{summary}
				</Typography>
				<Stack direction='column'>
					<Typography fontWeight='bold' sx={{ typography: { xs: 'body2', md: 'body1' } }}>
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
