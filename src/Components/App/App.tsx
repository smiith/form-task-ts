import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Config from '../Config';
import Result from '../Result';
import Tabs from '../Tabs';
import { ConfigProvider } from '../ConfigProvider';
import { ActiveTabProvider } from '../ActiveTabsProvider';
import { TAB_ID } from './constants';

const tabs = [
	{ id: TAB_ID.CONFIG, label: 'Config', tab: <Config /> },
	{ id: TAB_ID.RESULT, label: 'Result', tab: <Result /> },
];

const App = () => (
	<Container maxWidth="sm" className="App">
		<Box sx={{ width: '100%', typography: 'body1' }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Form task
			</Typography>
			<ConfigProvider>
				<ActiveTabProvider defaultTabId={TAB_ID.CONFIG}>
					<Tabs tabs={tabs} />
				</ActiveTabProvider>
			</ConfigProvider>
		</Box>
	</Container>
);

export default App;
