import { TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import React, { ReactNode, SyntheticEvent } from 'react';
import { useActiveTabContext } from '../ActiveTabsProvider';

type TabItem = { id: string; label: string; tab: ReactNode };

type TabsProps = {
	tabs: TabItem[];
};

const Tabs = ({ tabs = [] }: TabsProps) => {
	const { activeTab, setActiveTab } = useActiveTabContext();

	const handleTabChange = (event: SyntheticEvent, newValue: string) => {
		setActiveTab(newValue);
	};

	return (
		<TabContext value={activeTab}>
			<TabList value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons={false}>
				{tabs.map(({ label, id }) => (
					<Tab label={label} key={id} value={id} />
				))}
			</TabList>
			{tabs.map(({ tab, id }) => (
				<TabPanel key={id} value={id}>
					{tab}
				</TabPanel>
			))}
		</TabContext>
	);
};

export default Tabs;
