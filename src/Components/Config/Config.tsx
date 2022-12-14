import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { ConfigType, useConfigContext } from '../ConfigProvider';
import { useActiveTabContext } from '../ActiveTabsProvider';
import { validate } from './schema';
import { TAB_ID } from '../App/constants';

const ERROR_MESSAGE = 'Error during parsing json';

const Config = () => {
	const [inputError, setInputError] = useState(false);

	const { setConfig, setUnparsedConfig, unparsedConfig } = useConfigContext();

	const { setActiveTab } = useActiveTabContext();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUnparsedConfig(event.target.value);
		setInputError(false);
	};

	const handleApplyButtonClick = () => {
		try {
			const parsedConfig = JSON.parse(unparsedConfig);
			const valid = validate(parsedConfig);
			if (!valid) {
				setInputError(true);
				return;
			}
			setConfig(parsedConfig as ConfigType);
			setActiveTab(TAB_ID.RESULT);
		} catch (error) {
			setInputError(true);
		}
	};

	return (
		<Stack spacing={2}>
			<TextField
				value={unparsedConfig}
				multiline
				minRows={20}
				onChange={handleInputChange}
				error={inputError}
				helperText={inputError ? ERROR_MESSAGE : undefined}
			/>
			<Button variant="contained" color="primary" onClick={handleApplyButtonClick}>
				Apply
			</Button>
		</Stack>
	);
};

export default Config;
