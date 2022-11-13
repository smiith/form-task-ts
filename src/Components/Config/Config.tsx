import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useConfigContext } from '../ConfigProvider';

const ERROR_MESSAGE = 'Error during parsing json';

const Config = () => {
	const [inputValue, setInputValue] = useState('');
	const [inputError, setInputError] = useState(false);

	const { setConfig } = useConfigContext();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
		setInputValue(event.target.value);
		setInputError(false);
	};

	const handleApplyButtonClick = () => {
		try {
			const parsedConfig = JSON.parse(inputValue);
			setConfig(parsedConfig);
		} catch (error) {
			setInputError(true);
		}
	};

	return (
		<Stack spacing={2}>
			<TextField
				value={inputValue}
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
