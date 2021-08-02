const tripsDashboardSchema = {
	$schema: 'http://json-schema.org/draft-07/schema',
	$id: 'tripsDashboardSchema',
	type: 'object',
	required: [],
	properties: {
		header: {
			$id: '#/properties/header',
			type: 'object',
			required: [],
			properties: {
				image: {
					$id: '#/properties/header/properties/image',
					type: 'string',
				},
				tripSwitcher: {
					$id: '#/properties/header/properties/tripSwitcher',
					type: 'object',
					required: [],
					properties: {
						title: {
							$id: '#/properties/header/properties/tripSwitcher/properties/title',
							type: 'string',
						},
						subtitle: {
							$id: '#/properties/header/properties/tripSwitcher/properties/subtitle',
							type: 'string',
						},
						target: {
							$id: '#/properties/header/properties/tripSwitcher/properties/target',
							type: 'string',
						},
					},
					additionalProperties: true,
				},
			},
			additionalProperties: true,
		},
		sections: {
			$id: '#/properties/sections',
			type: 'array',
			additionalItems: true,
			items: {
				$id: '#/properties/sections/items',
				anyOf: [
					{
						$id: '#/properties/sections/items/anyOf/0',
						type: 'object',
						required: [],
						properties: {
							id: {
								$id: '#/properties/sections/items/anyOf/0/properties/id',
								type: 'string',
							},
							tiles: {
								$id: '#/properties/sections/items/anyOf/0/properties/tiles',
								type: 'array',
								additionalItems: true,
								items: {
									$id: '#/properties/sections/items/anyOf/0/properties/tiles/items',
									anyOf: [
										{
											$id: '#/properties/sections/items/anyOf/0/properties/tiles/items/anyOf/0',
											type: 'object',
											required: [],
											properties: {
												icon: {
													$id: '#/properties/sections/items/anyOf/0/properties/tiles/items/anyOf/0/properties/icon',
													type: 'string',
												},
												name: {
													$id: '#/properties/sections/items/anyOf/0/properties/tiles/items/anyOf/0/properties/name',
													type: 'string',
												},
												target: {
													$id: '#/properties/sections/items/anyOf/0/properties/tiles/items/anyOf/0/properties/target',
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
					{
						$id: '#/properties/sections/items/anyOf/1',
						type: 'object',
						required: [],
						properties: {
							id: {
								$id: '#/properties/sections/items/anyOf/1/properties/id',
								type: 'string',
							},
							widgetsAvailable: {
								$id: '#/properties/sections/items/anyOf/1/properties/widgetsAvailable',
								type: 'array',
								additionalItems: true,
								items: {
									$id: '#/properties/sections/items/anyOf/1/properties/widgetsAvailable/items',
									anyOf: [
										{
											$id: '#/properties/sections/items/anyOf/1/properties/widgetsAvailable/items/anyOf/0',
											type: 'string',
										},
									],
								},
							},
							title: {
								$id: '#/properties/sections/items/anyOf/1/properties/title',
								type: 'string',
							},
							tiles: {
								$id: '#/properties/sections/items/anyOf/1/properties/tiles',
								type: 'array',
								additionalItems: true,
								items: {
									$id: '#/properties/sections/items/anyOf/1/properties/tiles/items',
									anyOf: [
										{
											$id: '#/properties/sections/items/anyOf/1/properties/tiles/items/anyOf/0',
											type: 'object',
											required: [],
											properties: {
												icon: {
													$id: '#/properties/sections/items/anyOf/1/properties/tiles/items/anyOf/0/properties/icon',
													type: 'string',
												},
												name: {
													$id: '#/properties/sections/items/anyOf/1/properties/tiles/items/anyOf/0/properties/name',
													type: 'string',
												},
												target: {
													$id: '#/properties/sections/items/anyOf/1/properties/tiles/items/anyOf/0/properties/target',
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
					{
						$id: '#/properties/sections/items/anyOf/2',
						type: 'object',
						required: [],
						properties: {
							id: {
								$id: '#/properties/sections/items/anyOf/2/properties/id',
								type: 'string',
							},
							title: {
								$id: '#/properties/sections/items/anyOf/2/properties/title',
								type: 'string',
							},
							tiles: {
								$id: '#/properties/sections/items/anyOf/2/properties/tiles',
								type: 'array',
								additionalItems: true,
								items: {
									$id: '#/properties/sections/items/anyOf/2/properties/tiles/items',
									anyOf: [
										{
											$id: '#/properties/sections/items/anyOf/2/properties/tiles/items/anyOf/0',
											type: 'object',
											required: [],
											properties: {
												icon: {
													$id: '#/properties/sections/items/anyOf/2/properties/tiles/items/anyOf/0/properties/icon',
													type: 'string',
												},
												name: {
													$id: '#/properties/sections/items/anyOf/2/properties/tiles/items/anyOf/0/properties/name',
													type: 'string',
												},
												target: {
													$id: '#/properties/sections/items/anyOf/2/properties/tiles/items/anyOf/0/properties/target',
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
				],
			},
		},
		footer: {
			$id: '#/properties/footer',
			type: 'object',
			required: [],
			properties: {
				title: {
					$id: '#/properties/footer/properties/title',
					type: 'string',
				},
				description: {
					$id: '#/properties/footer/properties/description',
					type: 'string',
				},
				cta: {
					$id: '#/properties/footer/properties/cta',
					type: 'object',
					required: [],
					properties: {
						title: {
							$id: '#/properties/footer/properties/cta/properties/title',
							type: 'string',
						},
						target: {
							$id: '#/properties/footer/properties/cta/properties/target',
							type: 'string',
						},
					},
					additionalProperties: true,
				},
			},
			additionalProperties: true,
		},
	},
	additionalProperties: true,
};

export default tripsDashboardSchema;
