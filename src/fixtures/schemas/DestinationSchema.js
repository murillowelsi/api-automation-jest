const destinationSchema = {
	$schema: 'http://json-schema.org/draft-07/schema',
	$id: 'destinationSchema',
	type: 'object',
	required: [],
	properties: {
		topPanel: {
			$id: '#/properties/topPanel',
			type: 'array',
			additionalItems: true,
			items: {
				$id: '#/properties/topPanel/items',
				anyOf: [
					{
						$id: '#/properties/topPanel/items/anyOf/0',
						type: 'object',
						required: [],
						properties: {
							isDefault: {
								$id: '#/properties/topPanel/items/anyOf/0/properties/isDefault',
								type: 'boolean',
							},
							disclaimer: {
								$id: '#/properties/topPanel/items/anyOf/0/properties/disclaimer',
								type: 'string',
							},
							icon: {
								$id: '#/properties/topPanel/items/anyOf/0/properties/icon',
								type: 'string',
							},
							title: {
								$id: '#/properties/topPanel/items/anyOf/0/properties/title',
								type: 'string',
							},
							target: {
								$id: '#/properties/topPanel/items/anyOf/0/properties/target',
								type: 'string',
							},
						},
						additionalProperties: true,
					},
				],
			},
		},
		moreTabs: {
			$id: '#/properties/moreTabs',
			type: 'object',
			required: [],
			properties: {
				icon: {
					$id: '#/properties/moreTabs/properties/icon',
					type: 'string',
				},
				title: {
					$id: '#/properties/moreTabs/properties/title',
					type: 'string',
				},
				tabs: {
					$id: '#/properties/moreTabs/properties/tabs',
					type: 'array',
					additionalItems: true,
					items: {
						$id: '#/properties/moreTabs/properties/tabs/items',
						anyOf: [
							{
								$id: '#/properties/moreTabs/properties/tabs/items/anyOf/0',
								type: 'object',
								required: [],
								properties: {
									icon: {
										$id: '#/properties/moreTabs/properties/tabs/items/anyOf/0/properties/icon',
										type: 'string',
									},
									title: {
										$id: '#/properties/moreTabs/properties/tabs/items/anyOf/0/properties/title',
										type: 'string',
									},
									target: {
										$id: '#/properties/moreTabs/properties/tabs/items/anyOf/0/properties/target',
										type: 'string',
									},
								},
								additionalProperties: true,
							},
						],
					},
				},
			},
			additionalProperties: true,
		},
	},
	additionalProperties: true,
};

export default destinationSchema;
