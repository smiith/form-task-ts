import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Config from '../Config';
import Result from '../Result';
import Tabs from '../Tabs';
import { ConfigProvider } from '../ConfigProvider';

const tabs = [
	{ id: '1', label: 'Config', tab: <Config /> },
	{ id: '2', label: 'Result', tab: <Result /> },
];

const App = () => (
	<Container maxWidth="sm" className="App">
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Form task
			</Typography>
			<ConfigProvider>
				<Tabs tabs={tabs} defaultTabID="1" />
			</ConfigProvider>
		</Box>
	</Container>
);

export default App;
