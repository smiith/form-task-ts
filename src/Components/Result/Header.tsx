import { Typography } from '@mui/material';

type HeaderProps = {
	config: {
		label: string;
	};
};

const Header = ({ config }: HeaderProps) => {
	const { label } = config || {};
	return (
		<Typography variant="h5" component="h5" gutterBottom>
			{label}
		</Typography>
	);
};

export default Header;
