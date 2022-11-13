import { Button } from '@mui/material';

type ButtonType = {
	label: string;
};

type FooterProps = {
	config: {
		buttons: ButtonType[];
	};
};

const Footer = ({ config }: FooterProps) => {
	const { buttons = [] } = config || {};

	return (
		<>
			{buttons.map(({ label }) => (
				<Button sx={{ m: 1 }} variant="contained" color="primary" key={label}>
					{label}
				</Button>
			))}
		</>
	);
};

export default Footer;
