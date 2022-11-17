import Ajv from 'ajv';

const schema = {
	type: 'object',
	required: ['items'],
	properties: {
		header: {
			type: 'object',
			properties: {
				label: { type: 'string' },
			},
			required: ['label'],
			additionalProperties: false,
		},
		items: {
			type: 'array',
			items: {
				anyOf: [
					{
						type: 'object',
						properties: {
							label: {
								type: 'string',
							},
							type: {
								enum: ['numberField', 'textField', 'textArea', 'checkBox', 'dateField'],
							},
						},
						required: ['label', 'type'],
						additionalProperties: false,
					},
					{
						type: 'object',
						properties: {
							label: {
								type: 'string',
							},
							type: {
								enum: ['radioGroup'],
							},
							options: {
								type: 'array',
								items: {
									type: 'object',
									properties: {
										label: {
											type: 'string',
										},
										value: {
											type: 'string',
										},
									},
									required: ['label', 'value'],
									additionalProperties: false,
								},
							},
						},
						required: ['label', 'type', 'options'],
						additionalProperties: false,
					},
				],
			},
		},
		footer: {
			type: 'object',
			properties: {
				buttons: {
					type: 'array',
					items: {
						type: 'object',
						properties: {
							label: {
								type: 'string',
							},
						},
						required: ['label'],
						additionalProperties: false,
					},
				},
			},
			required: ['buttons'],
			additionalProperties: false,
		},
	},
};

const ajv = new Ajv();

export const validate = ajv.compile(schema);
