import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

export const NumberField = (props: { label: string }) => <TextField type="number" {...props} />;

export const TextAreaField = (props: { label: string }) => <TextField multiline minRows={2} {...props} />;

export const DateField = (props: { label: string }) => (
	<TextField InputLabelProps={{ shrink: true }} type="date" {...props} />
);

export const CheckboxField = ({ label, ...restProps }: { label: string }) => (
	<FormControlLabel control={<Checkbox {...restProps} />} label={label} labelPlacement="start" />
);

export type OptionType = {
	label: string;
	value: string;
};

export const RadioGroupField = ({ label, options }: { label: string; options: OptionType[] }) => (
	<FormControl component="fieldset">
		<FormLabel component="legend">{label}</FormLabel>
		<RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
			{options.map(({ label, value }) => (
				<FormControlLabel key={value} value={value} control={<Radio />} label={label} labelPlacement="start" />
			))}
		</RadioGroup>
	</FormControl>
);
