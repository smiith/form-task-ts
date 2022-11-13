import { Stack, TextField } from '@mui/material';
import React, { createElement } from 'react';
import { CheckboxField, DateField, NumberField, OptionType, RadioGroupField, TextAreaField } from '../Library';
import { useConfigContext } from '../ConfigProvider';
import Header from './Header';
import Footer from './Footer';

export type ItemTypeStrings = 'numberField' | 'textField' | 'textArea' | 'checkBox' | 'dateField' | 'radioGroup';

type ItemType = {
	type: ItemTypeStrings;
	label: string;
	options?: OptionType[];
};

const itemControls = {
	numberField: NumberField,
	textField: TextField,
	textArea: TextAreaField,
	checkBox: CheckboxField,
	dateField: DateField,
	radioGroup: RadioGroupField,
};

const renderItem = (item: ItemType, index: number) => {
	const { type, label, options = [] } = item;
	const itemControl = itemControls[type];
	return createElement(itemControl, { label, key: index, options });
};

const Result = () => {
	const { config } = useConfigContext();
	const { header, items = [], footer } = config;

	return (
		<>
			{header && <Header config={header} />}
			<Stack spacing={2}>{items.map(renderItem)}</Stack>
			{footer && <Footer config={footer} />}
		</>
	);
};

export default Result;
