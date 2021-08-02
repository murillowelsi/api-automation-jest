const holidaySearchConfigSchema = {
	$schema: 'http://json-schema.org/draft-07/schema',
	$id: 'holidaySearchConfigurationSchema',
	type: ['null', 'object'],
	required: [],
	properties: {
		holidaySearchConfiguration: {
			$id: '#/properties/holidaySearchConfiguration',
			type: ['null', 'object'],
			required: [],
			properties: {
				defaults: {
					$id: '#/properties/holidaySearchConfiguration/properties/defaults',
					type: ['null', 'object'],
					required: [],
					properties: {
						baseDeepLinkUrl: {
							$id: '#/properties/holidaySearchConfiguration/properties/defaults/properties/baseDeepLinkUrl',
							type: ['null', 'string'],
						},
						adults: {
							$id: '#/properties/holidaySearchConfiguration/properties/defaults/properties/adults',
							type: ['null', 'number'],
						},
						nonAdults: {
							$id: '#/properties/holidaySearchConfiguration/properties/defaults/properties/nonAdults',
							type: ['null', 'number'],
						},
					},
					additionalProperties: true,
				},
				party: {
					$id: '#/properties/holidaySearchConfiguration/properties/party',
					type: ['null', 'object'],
					required: [],
					properties: {
						maxParty: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/maxParty',
							type: ['null', 'number'],
						},
						maxAdults: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/maxAdults',
							type: ['null', 'number'],
						},
						maxNonAdults: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/maxNonAdults',
							type: ['null', 'number'],
						},
						infantMaxAge: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/infantMaxAge',
							type: ['null', 'number'],
						},
						childrenMaxAge: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/childrenMaxAge',
							type: ['null', 'number'],
						},
						maxInfantPerAdult: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/maxInfantPerAdult',
							type: ['null', 'number'],
						},
						maxChildrenPerAdult: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/maxChildrenPerAdult',
							type: ['null', 'number'],
						},
						minAdultsPerBooking: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/minAdultsPerBooking',
							type: ['null', 'number'],
						},
						minAdultsPerInfant: {
							$id: '#/properties/holidaySearchConfiguration/properties/party/properties/minAdultsPerInfant',
							type: ['null', 'number'],
						},
					},
					additionalProperties: true,
				},
				departureAirport: {
					$id: '#/properties/holidaySearchConfiguration/properties/departureAirport',
					type: ['null', 'object'],
					required: [],
					properties: {
						toShow: {
							$id: '#/properties/holidaySearchConfiguration/properties/departureAirport/properties/toShow',
							type: 'boolean',
						},
						isMultiSelectAllowed: {
							$id: '#/properties/holidaySearchConfiguration/properties/departureAirport/properties/isMultiSelectAllowed',
							type: 'boolean',
						},
						maxAllowedToSelect: {
							$id: '#/properties/holidaySearchConfiguration/properties/departureAirport/properties/maxAllowedToSelect',
							type: ['null', 'number'],
						},
					},
					additionalProperties: true,
				},
				destinationList: {
					$id: '#/properties/holidaySearchConfiguration/properties/destinationList',
					type: ['null', 'object'],
					required: [],
					properties: {
						isMultiSelectAllowed: {
							$id: '#/properties/holidaySearchConfiguration/properties/destinationList/properties/isMultiSelectAllowed',
							type: 'boolean',
						},
						maxAllowedToSelect: {
							$id: '#/properties/holidaySearchConfiguration/properties/destinationList/properties/maxAllowedToSelect',
							type: ['null', 'number'],
						},
					},
					additionalProperties: true,
				},
				destinationSearch: {
					$id: '#/properties/holidaySearchConfiguration/properties/destinationSearch',
					type: ['null', 'object'],
					required: [],
					properties: {
						minChar: {
							$id: '#/properties/holidaySearchConfiguration/properties/destinationSearch/properties/minChar',
							type: ['null', 'number'],
						},
						resultsForFreeSearch: {
							$id: '#/properties/holidaySearchConfiguration/properties/destinationSearch/properties/resultsForFreeSearch',
							type: ['null', 'number'],
						},
					},
					additionalProperties: true,
				},
				flexibility: {
					$id: '#/properties/holidaySearchConfiguration/properties/flexibility',
					type: ['null', 'object'],
					required: [],
					properties: {
						isFlexibleAllowed: {
							$id: '#/properties/holidaySearchConfiguration/properties/flexibility/properties/isFlexibleAllowed',
							type: 'boolean',
						},
						flexibleList: {
							$id: '#/properties/holidaySearchConfiguration/properties/flexibility/properties/flexibleList',
							type: ['null', 'array'],
							additionalItems: true,
							items: {
								$id: '#/properties/holidaySearchConfiguration/properties/flexibility/properties/flexibleList/items',
								anyOf: [
									{
										$id: '#/properties/holidaySearchConfiguration/properties/flexibility/properties/flexibleList/items/anyOf/0',
										type: ['null', 'object'],
										required: [],
										properties: {
											id: {
												$id: '#/properties/holidaySearchConfiguration/properties/flexibility/properties/flexibleList/items/anyOf/0/properties/id',
												type: ['null', 'string'],
											},
											name: {
												$id: '#/properties/holidaySearchConfiguration/properties/flexibility/properties/flexibleList/items/anyOf/0/properties/name',
												type: ['null', 'string'],
											},
											isDefault: {
												$id: '#/properties/holidaySearchConfiguration/properties/flexibility/properties/flexibleList/items/anyOf/0/properties/isDefault',
												type: 'boolean',
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
				requiredFieldsForSearch: {
					$id: '#/properties/holidaySearchConfiguration/properties/requiredFieldsForSearch',
					type: ['null', 'array'],
					additionalItems: true,
					items: {
						$id: '#/properties/holidaySearchConfiguration/properties/requiredFieldsForSearch/items',
						anyOf: [
							{
								$id: '#/properties/holidaySearchConfiguration/properties/requiredFieldsForSearch/items/anyOf/0',
								type: ['null', 'array'],
								additionalItems: true,
								items: {
									$id: '#/properties/holidaySearchConfiguration/properties/requiredFieldsForSearch/items/anyOf/0/items',
									anyOf: [
										{
											$id: '#/properties/holidaySearchConfiguration/properties/requiredFieldsForSearch/items/anyOf/0/items/anyOf/0',
											type: ['null', 'string'],
										},
									],
								},
							},
							{
								$id: '#/properties/holidaySearchConfiguration/properties/requiredFieldsForSearch/items/anyOf/1',
								type: ['null', 'array'],
								additionalItems: true,
								items: {
									$id: '#/properties/holidaySearchConfiguration/properties/requiredFieldsForSearch/items/anyOf/1/items',
									anyOf: [
										{
											$id: '#/properties/holidaySearchConfiguration/properties/requiredFieldsForSearch/items/anyOf/1/items/anyOf/0',
											type: ['null', 'string'],
										},
									],
								},
							},
						],
					},
				},
			},
			additionalProperties: true,
		},
		holidaySearchResultsConfig: {
			$id: '#/properties/holidaySearchResultsConfig',
			type: ['null', 'object'],
			required: [],
			properties: {
				sorting: {
					$id: '#/properties/holidaySearchResultsConfig/properties/sorting',
					type: ['null', 'array'],
					additionalItems: true,
					items: {
						$id: '#/properties/holidaySearchResultsConfig/properties/sorting/items',
						anyOf: [
							{
								$id: '#/properties/holidaySearchResultsConfig/properties/sorting/items/anyOf/0',
								type: ['null', 'object'],
								required: [],
								properties: {
									id: {
										$id: '#/properties/holidaySearchResultsConfig/properties/sorting/items/anyOf/0/properties/id',
										type: ['null', 'string'],
									},
									name: {
										$id: '#/properties/holidaySearchResultsConfig/properties/sorting/items/anyOf/0/properties/name',
										type: ['null', 'string'],
									},
									isDefault: {
										$id: '#/properties/holidaySearchResultsConfig/properties/sorting/items/anyOf/0/properties/isDefault',
										type: 'boolean',
									},
								},
								additionalProperties: true,
							},
						],
					},
				},
				currency: {
					$id: '#/properties/holidaySearchResultsConfig/properties/currency',
					type: ['null', 'object'],
					required: [],
					properties: {
						code: {
							$id: '#/properties/holidaySearchResultsConfig/properties/currency/properties/code',
							type: ['null', 'string'],
						},
						symbol: {
							$id: '#/properties/holidaySearchResultsConfig/properties/currency/properties/symbol',
							type: ['null', 'string'],
						},
						position: {
							$id: '#/properties/holidaySearchResultsConfig/properties/currency/properties/position',
							type: ['null', 'string'],
						},
					},
					additionalProperties: true,
				},
				defaultPriceView: {
					$id: '#/properties/holidaySearchResultsConfig/properties/defaultPriceView',
					type: ['null', 'object'],
					required: [],
					properties: {
						perPerson: {
							$id: '#/properties/holidaySearchResultsConfig/properties/defaultPriceView/properties/perPerson',
							type: 'boolean',
						},
						total: {
							$id: '#/properties/holidaySearchResultsConfig/properties/defaultPriceView/properties/total',
							type: 'boolean',
						},
					},
					additionalProperties: true,
				},
				texts: {
					$id: '#/properties/holidaySearchResultsConfig/properties/texts',
					type: ['null', 'object'],
					required: [],
					properties: {
						price: {
							$id: '#/properties/holidaySearchResultsConfig/properties/texts/properties/price',
							type: ['null', 'object'],
							required: [],
							properties: {
								perPerson: {
									$id: '#/properties/holidaySearchResultsConfig/properties/texts/properties/price/properties/perPerson',
									type: ['null', 'string'],
								},
								total: {
									$id: '#/properties/holidaySearchResultsConfig/properties/texts/properties/price/properties/total',
									type: ['null', 'string'],
								},
							},
							additionalProperties: true,
						},
						reviews: {
							$id: '#/properties/holidaySearchResultsConfig/properties/texts/properties/reviews',
							type: ['null', 'object'],
							required: [],
							properties: {
								tripAdvisorCustomerReviews: {
									$id: '#/properties/holidaySearchResultsConfig/properties/texts/properties/reviews/properties/tripAdvisorCustomerReviews',
									type: ['null', 'string'],
								},
							},
							additionalProperties: true,
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

export default holidaySearchConfigSchema;
