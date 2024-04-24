import { Button, Stack, useTheme } from '@mui/material';
import './TextEffect.css';

interface NavLink {
	title: string;
	action: () => void;
}

interface NavLinksProps {
	links: NavLink[];
}

export default function NavigationLinks({ links }: NavLinksProps) {
	const theme = useTheme();

	return (
		<Stack
			direction='row'
			sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'rgba(255, 255, 255, 0.0)',
				backdropFilter: 'blur(20px)',
				borderRadius: '25px',
				width: 'auto',
				height: 'auto',
				paddingTop: '0px',
				'.navLink::after': {
					backgroundColor: theme.palette.primary.main,
				},
			}}
			spacing={3}
		>
			{links.map((link, index) => (
				<Button
					key={index}
					className='navLink'
					size='large'
					sx={{ color: theme.palette.text.primary }}
					onClick={link.action}
				>
					{link.title}
				</Button>
			))}
		</Stack>
	);
}
