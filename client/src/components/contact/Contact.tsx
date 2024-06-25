import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

export default function Contact() {
	const form = useRef<HTMLFormElement>(null);
	const currentYear = new Date().getFullYear();
	const copyrightText = '© ' + currentYear;

	/**
	 * The function `sendEmail` sends an email using the EmailJS service when a form is submitted.
	 */
	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form)
		if (form.current) {
			emailjs
				.sendForm(
					"service_q8iijln",
					"template_sn7ftxx",
					form.current,
					"LnvLlB7bX1XhwLjLd",
				)
				.then(
					(result) => {
						console.log(form.current)
						console.log(result.text);
						form.current?.reset();
					},
					(error) => {
						console.log(error.text);
					},
				);
		}
	};

	return (
		<Box
			component='div'
			sx={{
				height: '100lvh',
				width: '100vw',
				overflow: 'hidden',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				position: 'relative',
				paddingTop: '50px',
			}}
		>
			<Typography variant='h4'>Get in touch!</Typography>
			<form ref={form} onSubmit={sendEmail} className='contact_form'>
				<Grid container spacing={2} sx={{ padding: 10 }}>
					<Grid item xs={12} md={6}>
						<TextField required fullWidth type='text' name='from_name' id='from_name' label='Name' />
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField required fullWidth type='email' name='from_email' id='from_email' label='Email' />
					</Grid>
					<Grid item xs={12}>
						<TextField required fullWidth type='text' name='message' id='message' label='Message' multiline rows={4} />
					</Grid>
					<Grid item xs={12}>
						<Button
							disableElevation
							color='secondary'
							type='submit'
							variant='contained'
							aria-label='submit-contact-form-button'
						>
							Submit
						</Button>
					</Grid>
				</Grid>
			</form>
			<Typography
				sx={{
					position: 'absolute',
					transform: 'translateX(-50%)',
					bottom: 0,
					left: '50%',
					typography: { xs: 'caption' },
					textAlign: 'center',
					padding: '5px',
				}}
			>
				{'Garviz ' + copyrightText}
			</Typography>
		</Box>
	);
}
