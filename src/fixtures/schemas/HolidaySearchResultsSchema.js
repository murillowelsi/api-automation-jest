const holidaySearchResultsSchema = {
	$schema: 'http://json-schema.org/draft-07/schema',
	$id: 'holidaySearchResultsSchema',
	type: 'object',
	required: [],
	properties: {
		searchResult: {
			$id: '#/properties/searchResult',
			type: 'object',
			required: [],
			properties: {
				numberOfResultsPerPage: {
					$id: '#/properties/searchResult/properties/numberOfResultsPerPage',
					type: ['null', 'number'],
				},
				pageNumber: {
					$id: '#/properties/searchResult/properties/pageNumber',
					type: ['null', 'number'],
				},
				numberOfPages: {
					$id: '#/properties/searchResult/properties/numberOfPages',
					type: ['null', 'number'],
				},
				totalNumberOfResults: {
					$id: '#/properties/searchResult/properties/totalNumberOfResults',
					type: ['null', 'number'],
				},
				filters: {
					$id: '#/properties/searchResult/properties/filters',
					type: 'object',
					required: [],
					properties: {
						multiSelect: {
							$id: '#/properties/searchResult/properties/filters/properties/multiSelect',
							type: ['null', 'array'],
							additionalItems: true,
							items: {
								$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items',
								anyOf: [
									{
										$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0',
										type: 'object',
										required: [],
										properties: {
											id: {
												$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/id',
												type: ['null', 'string'],
											},
											title: {
												$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/title',
												type: ['null', 'string'],
											},
											items: {
												$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/items',
												type: ['null', 'array'],
												additionalItems: true,
												items: {
													$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/items/items',
													anyOf: [
														{
															$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/items/items/anyOf/0',
															type: ['null', 'object'],
															required: [],
															properties: {
																id: {
																	$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/items/items/anyOf/0/properties/id',
																	type: ['null', 'string'],
																},
																name: {
																	$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/items/items/anyOf/0/properties/name',
																	type: ['null', 'string'],
																},
																numberOfResults: {
																	$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/items/items/anyOf/0/properties/numberOfResults',
																	type: ['null', 'number'],
																},
															},
															additionalProperties: true,
														},
													],
												},
											},
											inline: {
												$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/inline',
												type: 'boolean',
											},
											template: {
												$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/template',
												type: ['null', 'object'],
												required: [],
												properties: {
													name: {
														$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/template/properties/name',
														type: ['null', 'string'],
													},
												},
												additionalProperties: true,
											},
											order: {
												$id: '#/properties/searchResult/properties/filters/properties/multiSelect/items/anyOf/0/properties/order',
												type: ['null', 'number'],
											},
										},
										additionalProperties: true,
									},
								],
							},
						},
						singleSelect: {
							$id: '#/properties/searchResult/properties/filters/properties/singleSelect',
							type: ['null', 'array'],
							additionalItems: true,
							items: {
								$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items',
								anyOf: [
									{
										$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0',
										type: ['null', 'object'],
										required: [],
										properties: {
											id: {
												$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/id',
												type: ['null', 'string'],
											},
											title: {
												$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/title',
												type: ['null', 'string'],
											},
											items: {
												$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/items',
												type: ['null', 'array'],
												additionalItems: true,
												items: {
													$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/items/items',
													anyOf: [
														{
															$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/items/items/anyOf/0',
															type: ['null', 'object'],
															required: [],
															properties: {
																id: {
																	$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/items/items/anyOf/0/properties/id',
																	type: ['null', 'string'],
																},
																name: {
																	$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/items/items/anyOf/0/properties/name',
																	type: ['null', 'string'],
																},
																isDefault: {
																	$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/items/items/anyOf/0/properties/isDefault',
																	type: 'boolean',
																},
															},
															additionalProperties: true,
														},
													],
												},
											},
											inline: {
												$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/inline',
												type: 'boolean',
											},
											template: {
												$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/template',
												type: ['null', 'object'],
												required: [],
												properties: {
													name: {
														$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/template/properties/name',
														type: ['null', 'string'],
													},
												},
												additionalProperties: true,
											},
											order: {
												$id: '#/properties/searchResult/properties/filters/properties/singleSelect/items/anyOf/0/properties/order',
												type: ['null', 'number'],
											},
										},
										additionalProperties: true,
									},
								],
							},
						},
						freeRange: {
							$id: '#/properties/searchResult/properties/filters/properties/freeRange',
							type: ['null', 'array'],
							additionalItems: true,
							items: {
								$id: '#/properties/searchResult/properties/filters/properties/freeRange/items',
								anyOf: [
									{
										$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0',
										type: ['null', 'object'],
										required: [],
										properties: {
											id: {
												$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/id',
												type: ['null', 'string'],
											},
											title: {
												$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/title',
												type: ['null', 'string'],
											},
											min: {
												$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/min',
												type: ['null', 'number'],
											},
											max: {
												$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/max',
												type: ['null', 'number'],
											},
											restricted: {
												$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/restricted',
												type: ['null', 'string'],
											},
											inline: {
												$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/inline',
												type: 'boolean',
											},
											template: {
												$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/template',
												type: ['null', 'object'],
												required: [],
												properties: {
													name: {
														$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/template/properties/name',
														type: ['null', 'string'],
													},
												},
												additionalProperties: true,
											},
											order: {
												$id: '#/properties/searchResult/properties/filters/properties/freeRange/items/anyOf/0/properties/order',
												type: ['null', 'number'],
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
				holidays: {
					$id: '#/properties/searchResult/properties/holidays',
					type: ['null', 'array'],
					additionalItems: true,
					items: {
						$id: '#/properties/searchResult/properties/holidays/items',
						anyOf: [
							{
								$id: '#/properties/searchResult/properties/holidays/items/anyOf/0',
								type: ['null', 'object'],
								required: [],
								properties: {
									productCode: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/productCode',
										type: ['null', 'string'],
									},
									productName: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/productName',
										type: ['null', 'string'],
									},
									bookingUrl: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/bookingUrl',
										type: ['null', 'string'],
									},
									priority: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/priority',
										type: ['null', 'number'],
									},
									durationInDays: {},
									durationInNights: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/durationInNights',
										type: ['null', 'number'],
									},
									deal: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/deal',
										type: ['null', 'string'],
									},
									urgencyMessage: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/urgencyMessage',
										type: ['null', 'string'],
									},
									urgencyMessageToolTip: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/urgencyMessageToolTip',
										type: ['null', 'string'],
									},
									transfer: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/transfer',
										type: ['null', 'string'],
									},
									accommodation: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation',
										type: ['null', 'object'],
										required: [],
										properties: {
											type: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/type',
												type: ['null', 'string'],
											},
											rating: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/rating',
												type: ['null', 'number'],
											},
											description: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/description',
												type: ['null', 'string'],
											},
											startDate: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/startDate',
												type: ['null', 'string'],
											},
											brand: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/brand',
												type: ['null', 'object'],
												required: [],
												properties: {
													code: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/brand/properties/code',
														type: ['null', 'string'],
													},
													name: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/brand/properties/name',
														type: ['null', 'string'],
													},
												},
												additionalProperties: true,
											},
											multimedia: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/multimedia',
												type: ['null', 'object'],
												required: [],
												properties: {
													title: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/multimedia/properties/title',
														type: ['null', 'string'],
													},
													items: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/multimedia/properties/items',
														type: ['null', 'array'],
														additionalItems: true,
														items: {
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/multimedia/properties/items/items',
															anyOf: [
																{
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/multimedia/properties/items/items/anyOf/0',
																	type: ['null', 'object'],
																	required: [],
																	properties: {
																		type: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/multimedia/properties/items/items/anyOf/0/properties/type',
																			type: ['null', 'string'],
																		},
																		orientation: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/multimedia/properties/items/items/anyOf/0/properties/orientation',
																			type: ['null', 'string'],
																		},
																		url: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/multimedia/properties/items/items/anyOf/0/properties/url',
																			type: ['null', 'string'],
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
											locationText: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/locationText',
												type: ['null', 'string'],
											},
											geo: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/geo',
												type: ['null', 'object'],
												required: [],
												properties: {
													latitude: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/geo/properties/latitude',
														type: ['null', 'number'],
													},
													longitude: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/geo/properties/longitude',
														type: ['null', 'number'],
													},
												},
												additionalProperties: true,
											},
											reviews: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews',
												type: ['null', 'array'],
												additionalItems: true,
												items: {
													$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items',
													anyOf: [
														{
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0',
															type: ['null', 'object'],
															required: [],
															properties: {
																providerCode: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0/properties/providerCode',
																	type: ['null', 'string'],
																},
																providerName: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0/properties/providerName',
																	type: ['null', 'string'],
																},
																scaleMin: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0/properties/scaleMin',
																	type: ['null', 'number'],
																},
																scaleMax: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0/properties/scaleMax',
																	type: ['null', 'number'],
																},
																value: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0/properties/value',
																	type: ['null', 'number'],
																},
																reviewCount: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0/properties/reviewCount',
																	type: ['null', 'number'],
																},
																reviewLink: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0/properties/reviewLink',
																	type: ['null', 'string'],
																},
																categories: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/reviews/items/anyOf/0/properties/categories',
																	type: ['null', 'string'],
																},
															},
															additionalProperties: true,
														},
													],
												},
											},
											rooms: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/rooms',
												type: ['null', 'array'],
												additionalItems: true,
												items: {
													$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/rooms/items',
													anyOf: [
														{
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/rooms/items/anyOf/0',
															type: ['null', 'object'],
															required: [],
															properties: {
																roomType: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/rooms/items/anyOf/0/properties/roomType',
																	type: ['null', 'string'],
																},
																urgencyMessage: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/rooms/items/anyOf/0/properties/urgencyMessage',
																	type: ['null', 'string'],
																},
																urgencyMessageToolTip: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/rooms/items/anyOf/0/properties/urgencyMessageToolTip',
																	type: ['null', 'string'],
																},
															},
															additionalProperties: true,
														},
													],
												},
											},
											features: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/features',
												type: ['null', 'array'],
												additionalItems: true,
												items: {
													$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/features/items',
													anyOf: [
														{
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/features/items/anyOf/0',
															type: ['null', 'string'],
														},
													],
												},
											},
											hotelBrand: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/hotelBrand',
												type: ['object', 'null'],
												required: [],
												properties: {
													code: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/hotelBrand/properties/code',
														type: ['null', 'string'],
													},
													name: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/hotelBrand/properties/name',
														type: ['null', 'string'],
													},
												},
												additionalProperties: true,
											},
											board: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/board',
												type: ['null', 'string'],
											},
											boardBanner: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/boardBanner',
												type: ['null', 'object'],
												required: [],
												properties: {
													boxColor: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/boardBanner/properties/boxColor',
														type: ['null', 'string'],
													},
													textColor: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/boardBanner/properties/textColor',
														type: ['null', 'string'],
													},
												},
												additionalProperties: true,
											},
											hotelBrandBanner: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/hotelBrandBanner',
												type: ['null', 'object'],
												required: [],
												properties: {
													image: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/hotelBrandBanner/properties/image',
														type: ['null', 'string'],
													},
												},
												additionalProperties: true,
											},
											ratingImage: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/accommodation/properties/ratingImage',
												type: ['null', 'string'],
											},
										},
										additionalProperties: true,
									},
									price: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price',
										type: ['null', 'object'],
										required: [],
										properties: {
											perPerson: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/perPerson',
												type: ['null', 'object'],
												required: [],
												properties: {
													price: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/perPerson/properties/price',
														type: ['null', 'number'],
													},
													earlyBirdPriceText: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/perPerson/properties/earlyBirdPriceText',
														type: ['null', 'string'],
													},
													discountText: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/perPerson/properties/discountText',
														type: ['null', 'string'],
													},
													depositAmount: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/perPerson/properties/depositAmount',
														type: ['null', 'number'],
													},
													discountAmount: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/perPerson/properties/discountAmount',
														type: ['null', 'string'],
													},
													previousPrice: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/perPerson/properties/previousPrice',
														type: ['null', 'number'],
													},
												},
												additionalProperties: true,
											},
											total: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/total',
												type: ['null', 'object'],
												required: [],
												properties: {
													price: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/total/properties/price',
														type: ['null', 'number'],
													},
													earlyBirdPriceText: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/total/properties/earlyBirdPriceText',
														type: ['null', 'string'],
													},
													discountText: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/total/properties/discountText',
														type: ['null', 'string'],
													},
													depositAmount: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/total/properties/depositAmount',
														type: ['null', 'number'],
													},
													discountAmount: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/total/properties/discountAmount',
														type: ['null', 'string'],
													},
													previousPrice: {
														$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/price/properties/total/properties/previousPrice',
														type: ['null', 'number'],
													},
												},
												additionalProperties: true,
											},
										},
										additionalProperties: true,
									},
									itinerary: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary',
										type: ['null', 'object'],
										required: [],
										properties: {
											departureDate: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/departureDate',
												type: ['null', 'string'],
											},
											departureAirport: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/departureAirport',
												type: ['null', 'string'],
											},
											aircraft: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/aircraft',
												type: ['null', 'string'],
											},
											aircraftTip: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/aircraftTip',
												type: ['null', 'string', 'array'],
											},
											outbounds: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds',
												type: ['null', 'array'],
												additionalItems: true,
												items: {
													$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items',
													anyOf: [
														{
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0',
															type: ['null', 'object'],
															required: [],
															properties: {
																departureAirport: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/departureAirport',
																	type: ['null', 'string'],
																},
																departureAirportCode: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/departureAirportCode',
																	type: ['null', 'string'],
																},
																arrivalAirport: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/arrivalAirport',
																	type: ['null', 'string'],
																},
																arrivalAirportCode: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/arrivalAirportCode',
																	type: ['null', 'string'],
																},
																haulType: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/haulType',
																	type: ['null', 'string'],
																},
																schedule: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/schedule',
																	type: ['null', 'object'],
																	required: [],
																	properties: {
																		departureDate: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/schedule/properties/departureDate',
																			type: ['null', 'string'],
																		},
																		departureTime: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/schedule/properties/departureTime',
																			type: ['null', 'string'],
																		},
																		arrivalDate: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/schedule/properties/arrivalDate',
																			type: ['null', 'string'],
																		},
																		arrivalTime: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/schedule/properties/arrivalTime',
																			type: ['null', 'string'],
																		},
																		overlapDay: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/schedule/properties/overlapDay',
																			type: 'boolean',
																		},
																	},
																	additionalProperties: true,
																},
																carrier: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/carrier',
																	type: ['null', 'object'],
																	required: [],
																	properties: {
																		name: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/carrier/properties/name',
																			type: ['null', 'string'],
																		},
																		code: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/carrier/properties/code',
																			type: ['null', 'string'],
																		},
																		carrierCode: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/carrier/properties/carrierCode',
																			type: ['null', 'string'],
																		},
																	},
																	additionalProperties: true,
																},
																flightClass: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/flightClass',
																	type: ['null', 'string'],
																},
																connectingFlightWaitTime: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/connectingFlightWaitTime',
																	type: ['null', 'string'],
																},
																directFlight: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/directFlight',
																	type: 'boolean',
																},
																aircraft: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/outbounds/items/anyOf/0/properties/aircraft',
																	type: ['null', 'string'],
																},
															},
															additionalProperties: true,
														},
													],
												},
											},
											inbounds: {
												$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds',
												type: ['null', 'array'],
												additionalItems: true,
												items: {
													$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items',
													anyOf: [
														{
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0',
															type: ['null', 'object'],
															required: [],
															properties: {
																departureAirport: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/departureAirport',
																	type: ['null', 'string'],
																},
																departureAirportCode: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/departureAirportCode',
																	type: ['null', 'string'],
																},
																arrivalAirport: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/arrivalAirport',
																	type: ['null', 'string'],
																},
																arrivalAirportCode: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/arrivalAirportCode',
																	type: ['null', 'string'],
																},
																haulType: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/haulType',
																	type: ['null', 'string'],
																},
																schedule: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/schedule',
																	type: ['null', 'object'],
																	required: [],
																	properties: {
																		departureDate: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/schedule/properties/departureDate',
																			type: ['null', 'string'],
																		},
																		departureTime: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/schedule/properties/departureTime',
																			type: ['null', 'string'],
																		},
																		arrivalDate: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/schedule/properties/arrivalDate',
																			type: ['null', 'string'],
																		},
																		arrivalTime: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/schedule/properties/arrivalTime',
																			type: ['null', 'string'],
																		},
																		overlapDay: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/schedule/properties/overlapDay',
																			type: 'boolean',
																		},
																	},
																	additionalProperties: true,
																},
																carrier: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/carrier',
																	type: ['null', 'object'],
																	required: [],
																	properties: {
																		name: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/carrier/properties/name',
																			type: ['null', 'string'],
																		},
																		code: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/carrier/properties/code',
																			type: ['null', 'string'],
																		},
																		carrierCode: {
																			$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/carrier/properties/carrierCode',
																			type: ['null', 'string'],
																		},
																	},
																	additionalProperties: true,
																},
																flightClass: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/flightClass',
																	type: ['null', 'string'],
																},
																connectingFlightWaitTime: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/connectingFlightWaitTime',
																	type: ['null', 'string'],
																},
																directFlight: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/directFlight',
																	type: 'boolean',
																},
																aircraft: {
																	$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/itinerary/properties/inbounds/items/anyOf/0/properties/aircraft',
																	type: ['null', 'string'],
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
									alternateBoard: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/alternateBoard',
										type: ['null', 'array'],
										additionalItems: true,
										items: {
											$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/alternateBoard/items',
											anyOf: [
												{
													$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/alternateBoard/items/anyOf/0',
													type: ['null', 'object'],
													required: [],
													properties: {
														boardbasisCode: {
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/alternateBoard/items/anyOf/0/properties/boardbasisCode',
															type: ['null', 'string'],
														},
														name: {
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/alternateBoard/items/anyOf/0/properties/name',
															type: ['null', 'string'],
														},
														priceDifference: {
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/alternateBoard/items/anyOf/0/properties/priceDifference',
															type: ['null', 'string'],
														},
														totalPrice: {
															$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/alternateBoard/items/anyOf/0/properties/totalPrice',
															type: ['null', 'number'],
														},
													},
													additionalProperties: true,
												},
											],
										},
									},
									packageId: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/packageId',
										type: ['null', 'string'],
									},
									carbonTextLabel: {
										$id: '#/properties/searchResult/properties/holidays/items/anyOf/0/properties/carbonTextLabel',
										type: ['null', 'string'],
									},
								},
								additionalProperties: true,
							},
						],
					},
				},
				info: {
					$id: '#/properties/searchResult/properties/info',
					type: ['null', 'object'],
					required: [],
					properties: {
						line1: {
							$id: '#/properties/searchResult/properties/info/properties/line1',
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
};

export default holidaySearchResultsSchema;
