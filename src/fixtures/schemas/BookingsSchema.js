const bookingSchema = {
	$schema: 'http://json-schema.org/draft-07/schema',
	$id: 'bookingSchema',
	type: 'object',
	required: [],
	properties: {
		bookings: {
			$id: '#/properties/bookings',
			type: 'object',
			required: [],
			properties: {
				bookingRef: {
					$id: '#/properties/bookings/properties/bookingRef',
					type: ['null', 'string'],
				},
				status: {
					$id: '#/properties/bookings/properties/status',
					type: ['null', 'string'],
				},
				booking: {
					$id: '#/properties/bookings/properties/booking',
					type: 'array',
					additionalItems: true,
					items: {
						$id: '#/properties/bookings/properties/booking/items',
						anyOf: [
							{
								$id: '#/properties/bookings/properties/booking/items/anyOf/0',
								type: 'object',
								required: [],
								properties: {
									reservationCode: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/reservationCode',
										type: ['null', 'string'],
									},
									brand: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brand',
										type: ['null', 'string'],
									},
									bookingType: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingType',
										type: ['null', 'string'],
									},
									totalPassengers: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/totalPassengers',
										type: ['null', 'string'],
									},
									adultCount: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/adultCount',
										type: 'integer',
									},
									childCount: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/childCount',
										type: 'integer',
									},
									infantCount: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/infantCount',
										type: 'integer',
									},
									passengers: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers',
										type: 'array',
										additionalItems: true,
										items: {
											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items',
											anyOf: [
												{
													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0',
													type: 'object',
													required: [],
													properties: {
														fullName: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/fullName',
															type: ['null', 'string'],
														},
														title: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/title',
															type: ['null', 'string'],
														},
														firstName: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/firstName',
															type: ['null', 'string'],
														},
														surname: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/surname',
															type: ['null', 'string'],
														},
														leadBookerIndicator: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/leadBookerIndicator',
															type: 'boolean',
														},
														passengerType: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/passengerType',
															type: ['null', 'string'],
														},
													},
													additionalProperties: true,
												},
											],
										},
									},
									startDate: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/startDate',
										type: ['null', 'string'],
									},
									endDate: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/endDate',
										type: ['null', 'string'],
									},
									productDetails: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails',
										type: 'object',
										required: [],
										properties: {
											accommodation: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation',
												type: 'array',
												additionalItems: true,
												items: {
													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items',
													anyOf: [
														{
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0',
															type: 'object',
															required: [],
															properties: {
																productType: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/productType',
																	type: ['null', 'string'],
																},
																productSubType: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/productSubType',
																	type: ['null', 'string'],
																},
																productName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/productName',
																	type: ['null', 'string'],
																},
																serviceId: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/serviceId',
																	type: ['null', 'string'],
																},
																name: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/name',
																	type: ['null', 'string'],
																},
																resort: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/resort',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/resort/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/resort/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					id: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/resort/items/anyOf/0/properties/id',
																						type: ['null', 'string'],
																					},
																					name: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/resort/items/anyOf/0/properties/name',
																						type: ['null', 'string'],
																					},
																				},
																				additionalProperties: true,
																			},
																		],
																	},
																},
																countryName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/countryName',
																	type: ['null', 'string'],
																},
																startDate: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/startDate',
																	type: ['null', 'string'],
																},
																endDate: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/endDate',
																	type: ['null', 'string'],
																},
																rooms: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					name: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/name',
																						type: ['null', 'string'],
																					},
																					roomTypeId: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/roomTypeId',
																						type: ['null', 'string'],
																					},
																					boardName: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/boardName',
																						type: ['null', 'string'],
																					},
																					passengers: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/passengers',
																						type: 'array',
																						additionalItems: true,
																						items: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/passengers/items',
																							anyOf: [
																								{
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/passengers/items/anyOf/0',
																									type: 'object',
																									required: [],
																									properties: {
																										fullName: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/passengers/items/anyOf/0/properties/fullName',
																											type: ['null', 'string'],
																										},
																										title: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/passengers/items/anyOf/0/properties/title',
																											type: ['null', 'string'],
																										},
																										firstName: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/passengers/items/anyOf/0/properties/firstName',
																											type: ['null', 'string'],
																										},
																										surname: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/passengers/items/anyOf/0/properties/surname',
																											type: ['null', 'string'],
																										},
																										leadBookerIndicator: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/rooms/items/anyOf/0/properties/passengers/items/anyOf/0/properties/leadBookerIndicator',
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
																		],
																	},
																},
																geoCoords: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/geoCoords',
																	type: 'object',
																	required: [],
																	properties: {
																		latitude: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/geoCoords/properties/latitude',
																			type: 'number',
																		},
																		longitude: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/geoCoords/properties/longitude',
																			type: 'number',
																		},
																	},
																	additionalProperties: true,
																},
																ratings: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					category: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items/anyOf/0/properties/category',
																						type: ['null', 'string'],
																					},
																					value: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items/anyOf/0/properties/value',
																						type: 'integer',
																					},
																				},
																				additionalProperties: true,
																			},
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items/anyOf/1',
																				type: 'object',
																				required: [],
																				properties: {
																					category: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items/anyOf/1/properties/category',
																						type: ['null', 'string'],
																					},
																					value: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items/anyOf/1/properties/value',
																						type: 'integer',
																					},
																					reviewCount: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items/anyOf/1/properties/reviewCount',
																						type: 'integer',
																					},
																					image: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ratings/items/anyOf/1/properties/image',
																						type: ['null', 'string'],
																					},
																				},
																				additionalProperties: true,
																			},
																		],
																	},
																},
																carousel: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/carousel',
																	type: 'object',
																	required: [],
																	properties: {
																		images: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/carousel/properties/images',
																			type: 'array',
																			additionalItems: true,
																			items: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/carousel/properties/images/items',
																				anyOf: [
																					{
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0',
																						type: 'object',
																						required: [],
																						properties: {
																							title: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0/properties/title',
																								type: ['null', 'string'],
																							},
																							url: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0/properties/url',
																								type: ['null', 'string'],
																							},
																						},
																						additionalProperties: true,
																					},
																					{
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1',
																						type: 'object',
																						required: [],
																						properties: {
																							url: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1/properties/url',
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
																keyFeatures: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/keyFeatures',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/keyFeatures/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/keyFeatures/items/anyOf/0',
																				type: ['null', 'string'],
																			},
																		],
																	},
																},
																infoSections: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					key: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/key',
																						type: ['null', 'string'],
																					},
																					title: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/title',
																						type: ['null', 'string'],
																					},
																					icon: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/icon',
																						type: ['null', 'string'],
																					},
																					content: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content',
																						type: 'array',
																						additionalItems: true,
																						items: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items',
																							anyOf: [
																								{
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0',
																									type: 'object',
																									required: [],
																									properties: {
																										title: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/title',
																											type: ['null', 'string'],
																										},
																										icon: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/icon',
																											type: ['null', 'string'],
																										},
																										infoSections: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/infoSections',
																											type: 'array',
																											additionalItems: true,
																											items: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/infoSections/items',
																												anyOf: [
																													{
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/infoSections/items/anyOf/0',
																														type: 'object',
																														required: [],
																														properties: {
																															title: {
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/title',
																																type: ['null', 'string'],
																															},
																															descriptions: {
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions',
																																type: 'array',
																																additionalItems: true,
																																items: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions/items',
																																	anyOf: [
																																		{
																																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/content/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions/items/anyOf/0',
																																			type: ['null', 'string'],
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
																cmdId: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/cmdId',
																	type: ['null', 'string'],
																},
																images: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/images',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/images/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/images/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					type: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/images/items/anyOf/0/properties/type',
																						type: ['null', 'string'],
																					},
																					link: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/images/items/anyOf/0/properties/link',
																						type: ['null', 'string'],
																					},
																				},
																				additionalProperties: true,
																			},
																		],
																	},
																},
																ctas: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas',
																	type: 'object',
																	required: [],
																	properties: {
																		guidesTeam: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam',
																			type: 'object',
																			required: [],
																			properties: {
																				layout: {
																					$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/layout',
																					type: 'object',
																					required: [],
																					properties: {
																						type: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/layout/properties/type',
																							type: ['null', 'string'],
																						},
																						title: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/layout/properties/title',
																							type: ['null', 'string'],
																						},
																						subtitle: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/layout/properties/subtitle',
																							type: ['null', 'string'],
																						},
																						icon: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/layout/properties/icon',
																							type: ['null', 'string'],
																						},
																						image: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/layout/properties/image',
																							type: 'object',
																							required: [],
																							properties: {
																								portrait: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/layout/properties/image/properties/portrait',
																									type: ['null', 'string'],
																								},
																								landscape: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/layout/properties/image/properties/landscape',
																									type: ['null', 'string'],
																								},
																							},
																							additionalProperties: true,
																						},
																					},
																					additionalProperties: true,
																				},
																				action: {
																					$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action',
																					type: 'object',
																					required: [],
																					properties: {
																						type: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/type',
																							type: ['null', 'string'],
																						},
																						method: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/method',
																							type: ['null', 'string'],
																						},
																						headers: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/headers',
																							type: 'object',
																							required: [],
																							properties: {
																								'TUI-TDA-Booking-ID': {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/headers/properties/TUI-TDA-Booking-ID',
																									type: ['null', 'string'],
																								},
																								'TUI-TDA-Hotel-ID': {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/headers/properties/TUI-TDA-Hotel-ID',
																									type: ['null', 'string'],
																								},
																								'TUI-TDA-Pax-Last-Name': {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/headers/properties/TUI-TDA-Pax-Last-Name',
																									type: ['null', 'string'],
																								},
																								'TUI-TDA-SM': {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/headers/properties/TUI-TDA-SM',
																									type: ['null', 'string'],
																								},
																								'TUI-TDA-Language': {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/headers/properties/TUI-TDA-Language',
																									type: ['null', 'string'],
																								},
																								'TUI-TDA-Start-Date': {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/headers/properties/TUI-TDA-Start-Date',
																									type: ['null', 'string'],
																								},
																								'TUI-TDA-End-Date': {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/headers/properties/TUI-TDA-End-Date',
																									type: ['null', 'string'],
																								},
																							},
																							additionalProperties: true,
																						},
																						params: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/params',
																							type: 'object',
																							required: [],
																							properties: {
																								iabStyle: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/params/properties/iabStyle',
																									type: ['null', 'string'],
																								},
																							},
																							additionalProperties: true,
																						},
																						target: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/guidesTeam/properties/action/properties/target',
																							type: ['null', 'string'],
																						},
																					},
																					additionalProperties: true,
																				},
																			},
																			additionalProperties: true,
																		},
																		googlePlaces: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces',
																			type: 'object',
																			required: [],
																			properties: {
																				layout: {
																					$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/layout',
																					type: 'object',
																					required: [],
																					properties: {
																						type: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/layout/properties/type',
																							type: ['null', 'string'],
																						},
																						title: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/layout/properties/title',
																							type: ['null', 'string'],
																						},
																						subtitle: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/layout/properties/subtitle',
																							type: ['null', 'string'],
																						},
																						image: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/layout/properties/image',
																							type: 'object',
																							required: [],
																							properties: {
																								portrait: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/layout/properties/image/properties/portrait',
																									type: ['null', 'string'],
																								},
																								landscape: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/layout/properties/image/properties/landscape',
																									type: ['null', 'string'],
																								},
																							},
																							additionalProperties: true,
																						},
																					},
																					additionalProperties: true,
																				},
																				action: {
																					$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/action',
																					type: 'object',
																					required: [],
																					properties: {
																						type: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/action/properties/type',
																							type: ['null', 'string'],
																						},
																						method: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/action/properties/method',
																							type: ['null', 'string'],
																						},
																						target: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/ctas/properties/googlePlaces/properties/action/properties/target',
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
																hotelBrandBanner: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/hotelBrandBanner',
																	type: 'object',
																	required: [],
																	properties: {
																		boxColor: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/hotelBrandBanner/properties/boxColor',
																			type: ['null', 'string'],
																		},
																		isDefault: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/hotelBrandBanner/properties/isDefault',
																			type: 'boolean',
																		},
																		textColor: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/hotelBrandBanner/properties/textColor',
																			type: ['null', 'string'],
																		},
																	},
																	additionalProperties: true,
																},
																segmentSequence: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/accommodation/items/anyOf/0/properties/segmentSequence',
																	type: 'integer',
																},
															},
															additionalProperties: true,
														},
													],
												},
											},
											transport: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport',
												type: 'array',
												additionalItems: true,
												items: {
													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items',
													anyOf: [
														{
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0',
															type: 'object',
															required: [],
															properties: {
																productType: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/productType',
																	type: ['null', 'string'],
																},
																productSubType: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/productSubType',
																	type: ['null', 'string'],
																},
																productName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/productName',
																	type: ['null', 'string'],
																},
																serviceId: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/serviceId',
																	type: ['null', 'string'],
																},
																departureAirportCode: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureAirportCode',
																	type: ['null', 'string'],
																},
																departureAirportName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureAirportName',
																	type: ['null', 'string'],
																},
																arrivalAirportCode: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalAirportCode',
																	type: ['null', 'string'],
																},
																arrivalAirportName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalAirportName',
																	type: ['null', 'string'],
																},
																passengers: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/passengers',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/passengers/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/passengers/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					fullName: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/passengers/items/anyOf/0/properties/fullName',
																						type: ['null', 'string'],
																					},
																					title: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/passengers/items/anyOf/0/properties/title',
																						type: ['null', 'string'],
																					},
																					firstName: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/passengers/items/anyOf/0/properties/firstName',
																						type: ['null', 'string'],
																					},
																					surname: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/passengers/items/anyOf/0/properties/surname',
																						type: ['null', 'string'],
																					},
																					leadBookerIndicator: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/passengers/items/anyOf/0/properties/leadBookerIndicator',
																						type: 'boolean',
																					},
																				},
																				additionalProperties: true,
																			},
																		],
																	},
																},
																flightDetails: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails',
																	type: 'object',
																	required: [],
																	properties: {
																		sectors: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors',
																			type: 'array',
																			additionalItems: true,
																			items: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items',
																				anyOf: [
																					{
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0',
																						type: 'object',
																						required: [],
																						properties: {
																							departureAirportDetails: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails',
																								type: 'object',
																								required: [],
																								properties: {
																									airportName: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportName',
																										type: ['null', 'string'],
																									},
																									airportCode: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportCode',
																										type: ['null', 'string'],
																									},
																									airportLocation: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportLocation',
																										type: 'object',
																										required: [],
																										properties: {
																											latitude: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportLocation/properties/latitude',
																												type: 'number',
																											},
																											longitude: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportLocation/properties/longitude',
																												type: 'number',
																											},
																										},
																										additionalProperties: true,
																									},
																								},
																								additionalProperties: true,
																							},
																							arrivalAirportDetails: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails',
																								type: 'object',
																								required: [],
																								properties: {
																									airportName: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportName',
																										type: ['null', 'string'],
																									},
																									airportCode: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportCode',
																										type: ['null', 'string'],
																									},
																									airportLocation: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportLocation',
																										type: 'object',
																										required: [],
																										properties: {
																											latitude: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportLocation/properties/latitude',
																												type: 'number',
																											},
																											longitude: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportLocation/properties/longitude',
																												type: 'number',
																											},
																										},
																										additionalProperties: true,
																									},
																								},
																								additionalProperties: true,
																							},
																							carrierName: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/carrierName',
																								type: ['null', 'string'],
																							},
																							carrierCode: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/carrierCode',
																								type: ['null', 'string'],
																							},
																							flightNumber: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/flightNumber',
																								type: ['null', 'string'],
																							},
																							ancillaries: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries',
																								type: 'array',
																								additionalItems: true,
																								items: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items',
																									anyOf: [
																										{
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0',
																											type: 'object',
																											required: [],
																											properties: {
																												type: {
																													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/type',
																													type: ['null', 'string'],
																												},
																												url: {
																													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/url',
																													type: ['null', 'string'],
																												},
																												applicableTime: {
																													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime',
																													type: 'object',
																													required: [],
																													properties: {
																														startDateTime: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTime',
																															type: ['null', 'string'],
																														},
																														endDateTime: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTime',
																															type: ['null', 'string'],
																														},
																														startDateTimeTimezoneData: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData',
																															type: 'object',
																															required: [],
																															properties: {
																																originalDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/originalDateTime',
																																	type: ['null', 'string'],
																																},
																																noTimezoneData: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/noTimezoneData',
																																	type: 'boolean',
																																},
																																timezoneName: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/timezoneName',
																																	type: ['null', 'string'],
																																},
																																offset: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/offset',
																																	type: ['null', 'string'],
																																},
																																timezoneAbbreviation: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/timezoneAbbreviation',
																																	type: ['null', 'string'],
																																},
																																unixTimestamp: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/unixTimestamp',
																																	type: ['null', 'string'],
																																},
																																isoDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/isoDateTime',
																																	type: ['null', 'string'],
																																},
																																utcDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/utcDateTime',
																																	type: ['null', 'string'],
																																},
																															},
																															additionalProperties: true,
																														},
																														endDateTimeTimezoneData: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData',
																															type: 'object',
																															required: [],
																															properties: {
																																originalDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/originalDateTime',
																																	type: ['null', 'string'],
																																},
																																noTimezoneData: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/noTimezoneData',
																																	type: 'boolean',
																																},
																																timezoneName: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/timezoneName',
																																	type: ['null', 'string'],
																																},
																																offset: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/offset',
																																	type: ['null', 'string'],
																																},
																																timezoneAbbreviation: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/timezoneAbbreviation',
																																	type: ['null', 'string'],
																																},
																																unixTimestamp: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/unixTimestamp',
																																	type: ['null', 'string'],
																																},
																																isoDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/isoDateTime',
																																	type: ['null', 'string'],
																																},
																																utcDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/utcDateTime',
																																	type: ['null', 'string'],
																																},
																															},
																															additionalProperties: true,
																														},
																													},
																													additionalProperties: true,
																												},
																												ctaSections: {
																													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections',
																													type: 'array',
																													additionalItems: true,
																													items: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items',
																														anyOf: [
																															{
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0',
																																type: 'object',
																																required: [],
																																properties: {
																																	title: {
																																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/title',
																																		type: ['null', 'string'],
																																	},
																																	subtitle: {
																																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/subtitle',
																																		type: ['null', 'string'],
																																	},
																																	type: {
																																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/type',
																																		type: ['null', 'string'],
																																	},
																																	ctas: {
																																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/ctas',
																																		type: 'array',
																																		additionalItems: true,
																																		items: {
																																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/ctas/items',
																																		},
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
																							departureDateTime: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTime',
																								type: ['null', 'string'],
																							},
																							arrivalDateTime: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTime',
																								type: ['null', 'string'],
																							},
																							departureDateTimeTimezoneData: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData',
																								type: 'object',
																								required: [],
																								properties: {
																									originalDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/originalDateTime',
																										type: ['null', 'string'],
																									},
																									noTimezoneData: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/noTimezoneData',
																										type: 'boolean',
																									},
																									timezoneName: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/timezoneName',
																										type: ['null', 'string'],
																									},
																									offset: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/offset',
																										type: ['null', 'string'],
																									},
																									timezoneAbbreviation: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/timezoneAbbreviation',
																										type: ['null', 'string'],
																									},
																									unixTimestamp: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/unixTimestamp',
																										type: ['null', 'string'],
																									},
																									isoDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/isoDateTime',
																										type: ['null', 'string'],
																									},
																									utcDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/utcDateTime',
																										type: ['null', 'string'],
																									},
																								},
																								additionalProperties: true,
																							},
																							arrivalDateTimeTimezoneData: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData',
																								type: 'object',
																								required: [],
																								properties: {
																									originalDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/originalDateTime',
																										type: ['null', 'string'],
																									},
																									noTimezoneData: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/noTimezoneData',
																										type: 'boolean',
																									},
																									timezoneName: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/timezoneName',
																										type: ['null', 'string'],
																									},
																									offset: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/offset',
																										type: ['null', 'string'],
																									},
																									timezoneAbbreviation: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/timezoneAbbreviation',
																										type: ['null', 'string'],
																									},
																									unixTimestamp: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/unixTimestamp',
																										type: ['null', 'string'],
																									},
																									isoDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/isoDateTime',
																										type: ['null', 'string'],
																									},
																									utcDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/utcDateTime',
																										type: ['null', 'string'],
																									},
																								},
																								additionalProperties: true,
																							},
																							infoSections: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/infoSections',
																								type: 'array',
																								additionalItems: true,
																								items: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/flightDetails/properties/sectors/items/anyOf/0/properties/infoSections/items',
																								},
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
																departureDateTime: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTime',
																	type: ['null', 'string'],
																},
																arrivalDateTime: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTime',
																	type: ['null', 'string'],
																},
																outbound: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/outbound',
																	type: 'boolean',
																},
																departureDateTimeTimezoneData: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData',
																	type: 'object',
																	required: [],
																	properties: {
																		originalDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/originalDateTime',
																			type: ['null', 'string'],
																		},
																		noTimezoneData: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/noTimezoneData',
																			type: 'boolean',
																		},
																		timezoneName: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/timezoneName',
																			type: ['null', 'string'],
																		},
																		offset: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/offset',
																			type: ['null', 'string'],
																		},
																		timezoneAbbreviation: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/timezoneAbbreviation',
																			type: ['null', 'string'],
																		},
																		unixTimestamp: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/unixTimestamp',
																			type: ['null', 'string'],
																		},
																		isoDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/isoDateTime',
																			type: ['null', 'string'],
																		},
																		utcDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/utcDateTime',
																			type: ['null', 'string'],
																		},
																	},
																	additionalProperties: true,
																},
																arrivalDateTimeTimezoneData: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData',
																	type: 'object',
																	required: [],
																	properties: {
																		originalDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/originalDateTime',
																			type: ['null', 'string'],
																		},
																		noTimezoneData: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/noTimezoneData',
																			type: 'boolean',
																		},
																		timezoneName: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/timezoneName',
																			type: ['null', 'string'],
																		},
																		offset: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/offset',
																			type: ['null', 'string'],
																		},
																		timezoneAbbreviation: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/timezoneAbbreviation',
																			type: ['null', 'string'],
																		},
																		unixTimestamp: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/unixTimestamp',
																			type: ['null', 'string'],
																		},
																		isoDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/isoDateTime',
																			type: ['null', 'string'],
																		},
																		utcDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/utcDateTime',
																			type: ['null', 'string'],
																		},
																	},
																	additionalProperties: true,
																},
																segmentSequence: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/0/properties/segmentSequence',
																	type: 'integer',
																},
															},
															additionalProperties: true,
														},
														{
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1',
															type: 'object',
															required: [],
															properties: {
																productType: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/productType',
																	type: ['null', 'string'],
																},
																productSubType: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/productSubType',
																	type: ['null', 'string'],
																},
																productName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/productName',
																	type: ['null', 'string'],
																},
																serviceId: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/serviceId',
																	type: ['null', 'string'],
																},
																departureAirportCode: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureAirportCode',
																	type: ['null', 'string'],
																},
																departureAirportName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureAirportName',
																	type: ['null', 'string'],
																},
																arrivalAirportCode: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalAirportCode',
																	type: ['null', 'string'],
																},
																arrivalAirportName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalAirportName',
																	type: ['null', 'string'],
																},
																passengers: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/passengers',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/passengers/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/passengers/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					fullName: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/passengers/items/anyOf/0/properties/fullName',
																						type: ['null', 'string'],
																					},
																					title: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/passengers/items/anyOf/0/properties/title',
																						type: ['null', 'string'],
																					},
																					firstName: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/passengers/items/anyOf/0/properties/firstName',
																						type: ['null', 'string'],
																					},
																					surname: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/passengers/items/anyOf/0/properties/surname',
																						type: ['null', 'string'],
																					},
																					leadBookerIndicator: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/passengers/items/anyOf/0/properties/leadBookerIndicator',
																						type: 'boolean',
																					},
																				},
																				additionalProperties: true,
																			},
																		],
																	},
																},
																flightDetails: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails',
																	type: 'object',
																	required: [],
																	properties: {
																		sectors: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors',
																			type: 'array',
																			additionalItems: true,
																			items: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items',
																				anyOf: [
																					{
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0',
																						type: 'object',
																						required: [],
																						properties: {
																							departureAirportDetails: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails',
																								type: 'object',
																								required: [],
																								properties: {
																									airportName: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportName',
																										type: ['null', 'string'],
																									},
																									airportCode: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportCode',
																										type: ['null', 'string'],
																									},
																									airportLocation: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportLocation',
																										type: 'object',
																										required: [],
																										properties: {
																											latitude: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportLocation/properties/latitude',
																												type: 'number',
																											},
																											longitude: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureAirportDetails/properties/airportLocation/properties/longitude',
																												type: 'number',
																											},
																										},
																										additionalProperties: true,
																									},
																								},
																								additionalProperties: true,
																							},
																							arrivalAirportDetails: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails',
																								type: 'object',
																								required: [],
																								properties: {
																									airportName: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportName',
																										type: ['null', 'string'],
																									},
																									airportCode: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportCode',
																										type: ['null', 'string'],
																									},
																									airportLocation: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportLocation',
																										type: 'object',
																										required: [],
																										properties: {
																											latitude: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportLocation/properties/latitude',
																												type: 'number',
																											},
																											longitude: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalAirportDetails/properties/airportLocation/properties/longitude',
																												type: 'number',
																											},
																										},
																										additionalProperties: true,
																									},
																								},
																								additionalProperties: true,
																							},
																							carrierName: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/carrierName',
																								type: ['null', 'string'],
																							},
																							carrierCode: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/carrierCode',
																								type: ['null', 'string'],
																							},
																							flightNumber: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/flightNumber',
																								type: ['null', 'string'],
																							},
																							ancillaries: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries',
																								type: 'array',
																								additionalItems: true,
																								items: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items',
																									anyOf: [
																										{
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0',
																											type: 'object',
																											required: [],
																											properties: {
																												type: {
																													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/type',
																													type: ['null', 'string'],
																												},
																												url: {
																													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/url',
																													type: ['null', 'string'],
																												},
																												applicableTime: {
																													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime',
																													type: 'object',
																													required: [],
																													properties: {
																														startDateTime: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTime',
																															type: ['null', 'string'],
																														},
																														endDateTime: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTime',
																															type: ['null', 'string'],
																														},
																														startDateTimeTimezoneData: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData',
																															type: 'object',
																															required: [],
																															properties: {
																																originalDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/originalDateTime',
																																	type: ['null', 'string'],
																																},
																																noTimezoneData: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/noTimezoneData',
																																	type: 'boolean',
																																},
																																timezoneName: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/timezoneName',
																																	type: ['null', 'string'],
																																},
																																offset: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/offset',
																																	type: ['null', 'string'],
																																},
																																timezoneAbbreviation: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/timezoneAbbreviation',
																																	type: ['null', 'string'],
																																},
																																unixTimestamp: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/unixTimestamp',
																																	type: ['null', 'string'],
																																},
																																isoDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/isoDateTime',
																																	type: ['null', 'string'],
																																},
																																utcDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/startDateTimeTimezoneData/properties/utcDateTime',
																																	type: ['null', 'string'],
																																},
																															},
																															additionalProperties: true,
																														},
																														endDateTimeTimezoneData: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData',
																															type: 'object',
																															required: [],
																															properties: {
																																originalDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/originalDateTime',
																																	type: ['null', 'string'],
																																},
																																noTimezoneData: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/noTimezoneData',
																																	type: 'boolean',
																																},
																																timezoneName: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/timezoneName',
																																	type: ['null', 'string'],
																																},
																																offset: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/offset',
																																	type: ['null', 'string'],
																																},
																																timezoneAbbreviation: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/timezoneAbbreviation',
																																	type: ['null', 'string'],
																																},
																																unixTimestamp: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/unixTimestamp',
																																	type: ['null', 'string'],
																																},
																																isoDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/isoDateTime',
																																	type: ['null', 'string'],
																																},
																																utcDateTime: {
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/applicableTime/properties/endDateTimeTimezoneData/properties/utcDateTime',
																																	type: ['null', 'string'],
																																},
																															},
																															additionalProperties: true,
																														},
																													},
																													additionalProperties: true,
																												},
																												ctaSections: {
																													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections',
																													type: 'array',
																													additionalItems: true,
																													items: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items',
																														anyOf: [
																															{
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0',
																																type: 'object',
																																required: [],
																																properties: {
																																	title: {
																																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/title',
																																		type: ['null', 'string'],
																																	},
																																	subtitle: {
																																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/subtitle',
																																		type: ['null', 'string'],
																																	},
																																	type: {
																																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/type',
																																		type: ['null', 'string'],
																																	},
																																	ctas: {
																																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/ctas',
																																		type: 'array',
																																		additionalItems: true,
																																		items: {
																																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/ancillaries/items/anyOf/0/properties/ctaSections/items/anyOf/0/properties/ctas/items',
																																		},
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
																							departureDateTime: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTime',
																								type: ['null', 'string'],
																							},
																							arrivalDateTime: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTime',
																								type: ['null', 'string'],
																							},
																							departureDateTimeTimezoneData: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData',
																								type: 'object',
																								required: [],
																								properties: {
																									originalDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/originalDateTime',
																										type: ['null', 'string'],
																									},
																									noTimezoneData: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/noTimezoneData',
																										type: 'boolean',
																									},
																									timezoneName: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/timezoneName',
																										type: ['null', 'string'],
																									},
																									offset: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/offset',
																										type: ['null', 'string'],
																									},
																									timezoneAbbreviation: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/timezoneAbbreviation',
																										type: ['null', 'string'],
																									},
																									unixTimestamp: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/unixTimestamp',
																										type: ['null', 'string'],
																									},
																									isoDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/isoDateTime',
																										type: ['null', 'string'],
																									},
																									utcDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/departureDateTimeTimezoneData/properties/utcDateTime',
																										type: ['null', 'string'],
																									},
																								},
																								additionalProperties: true,
																							},
																							arrivalDateTimeTimezoneData: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData',
																								type: 'object',
																								required: [],
																								properties: {
																									originalDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/originalDateTime',
																										type: ['null', 'string'],
																									},
																									noTimezoneData: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/noTimezoneData',
																										type: 'boolean',
																									},
																									timezoneName: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/timezoneName',
																										type: ['null', 'string'],
																									},
																									offset: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/offset',
																										type: ['null', 'string'],
																									},
																									timezoneAbbreviation: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/timezoneAbbreviation',
																										type: ['null', 'string'],
																									},
																									unixTimestamp: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/unixTimestamp',
																										type: ['null', 'string'],
																									},
																									isoDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/isoDateTime',
																										type: ['null', 'string'],
																									},
																									utcDateTime: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/arrivalDateTimeTimezoneData/properties/utcDateTime',
																										type: ['null', 'string'],
																									},
																								},
																								additionalProperties: true,
																							},
																							infoSections: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/infoSections',
																								type: 'array',
																								additionalItems: true,
																								items: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/flightDetails/properties/sectors/items/anyOf/0/properties/infoSections/items',
																								},
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
																departureDateTime: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTime',
																	type: ['null', 'string'],
																},
																arrivalDateTime: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTime',
																	type: ['null', 'string'],
																},
																departureDateTimeTimezoneData: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData',
																	type: 'object',
																	required: [],
																	properties: {
																		originalDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData/properties/originalDateTime',
																			type: ['null', 'string'],
																		},
																		noTimezoneData: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData/properties/noTimezoneData',
																			type: 'boolean',
																		},
																		timezoneName: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData/properties/timezoneName',
																			type: ['null', 'string'],
																		},
																		offset: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData/properties/offset',
																			type: ['null', 'string'],
																		},
																		timezoneAbbreviation: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData/properties/timezoneAbbreviation',
																			type: ['null', 'string'],
																		},
																		unixTimestamp: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData/properties/unixTimestamp',
																			type: ['null', 'string'],
																		},
																		isoDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData/properties/isoDateTime',
																			type: ['null', 'string'],
																		},
																		utcDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/departureDateTimeTimezoneData/properties/utcDateTime',
																			type: ['null', 'string'],
																		},
																	},
																	additionalProperties: true,
																},
																arrivalDateTimeTimezoneData: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData',
																	type: 'object',
																	required: [],
																	properties: {
																		originalDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData/properties/originalDateTime',
																			type: ['null', 'string'],
																		},
																		noTimezoneData: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData/properties/noTimezoneData',
																			type: 'boolean',
																		},
																		timezoneName: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData/properties/timezoneName',
																			type: ['null', 'string'],
																		},
																		offset: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData/properties/offset',
																			type: ['null', 'string'],
																		},
																		timezoneAbbreviation: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData/properties/timezoneAbbreviation',
																			type: ['null', 'string'],
																		},
																		unixTimestamp: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData/properties/unixTimestamp',
																			type: ['null', 'string'],
																		},
																		isoDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData/properties/isoDateTime',
																			type: ['null', 'string'],
																		},
																		utcDateTime: {
																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/arrivalDateTimeTimezoneData/properties/utcDateTime',
																			type: ['null', 'string'],
																		},
																	},
																	additionalProperties: true,
																},
																segmentSequence: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/transport/items/anyOf/1/properties/segmentSequence',
																	type: 'integer',
																},
															},
															additionalProperties: true,
														},
													],
												},
											},
											extras: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras',
												type: 'array',
												additionalItems: true,
												items: {
													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items',
													anyOf: [
														{
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0',
															type: 'object',
															required: [],
															properties: {
																productType: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/productType',
																	type: ['null', 'string'],
																},
																productName: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/productName',
																	type: ['null', 'string'],
																},
																productSubType: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/productSubType',
																	type: ['null', 'string'],
																},
																serviceId: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/serviceId',
																	type: ['null', 'string'],
																},
																description: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/description',
																	type: ['null', 'string'],
																},
																images: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/images',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/images/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/images/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					type: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/images/items/anyOf/0/properties/type',
																						type: ['null', 'string'],
																					},
																					link: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/images/items/anyOf/0/properties/link',
																						type: ['null', 'string'],
																					},
																				},
																				additionalProperties: true,
																			},
																		],
																	},
																},
																ctas: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					layout: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/layout',
																						type: 'object',
																						required: [],
																						properties: {
																							type: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/layout/properties/type',
																								type: ['null', 'string'],
																							},
																							title: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/layout/properties/title',
																								type: ['null', 'string'],
																							},
																							subtitle: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/layout/properties/subtitle',
																								type: ['null', 'string'],
																							},
																							icon: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/layout/properties/icon',
																								type: ['null', 'string'],
																							},
																						},
																						additionalProperties: true,
																					},
																					action: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action',
																						type: 'object',
																						required: [],
																						properties: {
																							type: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/type',
																								type: ['null', 'string'],
																							},
																							target: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/target',
																								type: ['null', 'string'],
																							},
																							method: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/method',
																								type: ['null', 'string'],
																							},
																							headers: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/headers',
																								type: 'object',
																								required: [],
																								properties: {
																									'TUI-TDA-Booking-ID': {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/headers/properties/TUI-TDA-Booking-ID',
																										type: ['null', 'string'],
																									},
																									'TUI-TDA-Hotel-ID': {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/headers/properties/TUI-TDA-Hotel-ID',
																										type: ['null', 'string'],
																									},
																									'TUI-TDA-Pax-Last-Name': {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/headers/properties/TUI-TDA-Pax-Last-Name',
																										type: ['null', 'string'],
																									},
																									'TUI-TDA-SM': {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/headers/properties/TUI-TDA-SM',
																										type: ['null', 'string'],
																									},
																									'TUI-TDA-Language': {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/headers/properties/TUI-TDA-Language',
																										type: ['null', 'string'],
																									},
																									'TUI-TDA-Transfer-Date': {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/headers/properties/TUI-TDA-Transfer-Date',
																										type: ['null', 'string'],
																									},
																								},
																								additionalProperties: true,
																							},
																							params: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/params',
																								type: 'object',
																								required: [],
																								properties: {
																									iabStyle: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/ctas/items/anyOf/0/properties/action/properties/params/properties/iabStyle',
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
																		],
																	},
																},
																startDate: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/startDate',
																	type: ['null', 'string'],
																},
																segmentSequence: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/productDetails/properties/extras/items/anyOf/0/properties/segmentSequence',
																	type: 'integer',
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
									destinations: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations',
										type: 'array',
										additionalItems: true,
										items: {
											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items',
											anyOf: [
												{
													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0',
													type: 'object',
													required: [],
													properties: {
														destinationInfo: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationInfo',
															type: 'array',
															additionalItems: true,
															items: {
																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationInfo/items',
																anyOf: [
																	{
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationInfo/items/anyOf/0',
																		type: 'object',
																		required: [],
																		properties: {
																			id: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationInfo/items/anyOf/0/properties/id',
																				type: ['null', 'string'],
																			},
																			name: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationInfo/items/anyOf/0/properties/name',
																				type: ['null', 'string'],
																			},
																		},
																		additionalProperties: true,
																	},
																],
															},
														},
														destinationType: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationType',
															type: ['null', 'string'],
														},
														title: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/title',
															type: ['null', 'string'],
														},
														destinationMap: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationMap',
															type: 'object',
															required: [],
															properties: {
																latitude: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationMap/properties/latitude',
																	type: 'number',
																},
																longitude: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/destinationMap/properties/longitude',
																	type: 'number',
																},
															},
															additionalProperties: true,
														},
														carousel: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/carousel',
															type: 'object',
															required: [],
															properties: {
																images: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/carousel/properties/images',
																	type: 'array',
																	additionalItems: true,
																	items: {
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/carousel/properties/images/items',
																		anyOf: [
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0',
																				type: 'object',
																				required: [],
																				properties: {
																					url: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0/properties/url',
																						type: ['null', 'string'],
																					},
																				},
																				additionalProperties: true,
																			},
																			{
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1',
																				type: 'object',
																				required: [],
																				properties: {
																					title: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1/properties/title',
																						type: ['null', 'string'],
																					},
																					url: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1/properties/url',
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
														infoSections: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections',
															type: 'array',
															additionalItems: true,
															items: {
																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items',
																anyOf: [
																	{
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0',
																		type: 'object',
																		required: [],
																		properties: {
																			title: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/title',
																				type: ['null', 'string'],
																			},
																			icon: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/icon',
																				type: ['null', 'string'],
																			},
																			infoSections: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections',
																				type: 'array',
																				additionalItems: true,
																				items: {
																					$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items',
																					anyOf: [
																						{
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0',
																							type: 'object',
																							required: [],
																							properties: {
																								title: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/title',
																									type: ['null', 'string'],
																								},
																								descriptions: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions',
																									type: 'array',
																									additionalItems: true,
																									items: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions/items',
																										anyOf: [
																											{
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions/items/anyOf/0',
																												type: ['null', 'string'],
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
																		},
																		additionalProperties: true,
																	},
																],
															},
														},
														regions: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions',
															type: 'array',
															additionalItems: true,
															items: {
																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items',
																anyOf: [
																	{
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0',
																		type: 'object',
																		required: [],
																		properties: {
																			regionInfo: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionInfo',
																				type: 'array',
																				additionalItems: true,
																				items: {
																					$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionInfo/items',
																					anyOf: [
																						{
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionInfo/items/anyOf/0',
																							type: 'object',
																							required: [],
																							properties: {
																								id: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionInfo/items/anyOf/0/properties/id',
																									type: ['null', 'string'],
																								},
																								name: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionInfo/items/anyOf/0/properties/name',
																									type: ['null', 'string'],
																								},
																							},
																							additionalProperties: true,
																						},
																					],
																				},
																			},
																			regionDetails: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails',
																				type: 'array',
																				additionalItems: true,
																				items: {
																					$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items',
																					anyOf: [
																						{
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0',
																							type: 'object',
																							required: [],
																							properties: {
																								destinationInfo: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationInfo',
																									type: 'array',
																									additionalItems: true,
																									items: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationInfo/items',
																										anyOf: [
																											{
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationInfo/items/anyOf/0',
																												type: 'object',
																												required: [],
																												properties: {
																													id: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationInfo/items/anyOf/0/properties/id',
																														type: ['null', 'string'],
																													},
																													name: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationInfo/items/anyOf/0/properties/name',
																														type: ['null', 'string'],
																													},
																												},
																												additionalProperties: true,
																											},
																										],
																									},
																								},
																								destinationType: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationType',
																									type: ['null', 'string'],
																								},
																								title: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/title',
																									type: ['null', 'string'],
																								},
																								destinationMap: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationMap',
																									type: 'object',
																									required: [],
																									properties: {
																										latitude: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationMap/properties/latitude',
																											type: 'number',
																										},
																										longitude: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/destinationMap/properties/longitude',
																											type: 'number',
																										},
																									},
																									additionalProperties: true,
																								},
																								carousel: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/carousel',
																									type: 'object',
																									required: [],
																									properties: {
																										images: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/carousel/properties/images',
																											type: 'array',
																											additionalItems: true,
																											items: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/carousel/properties/images/items',
																												anyOf: [
																													{
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0',
																														type: 'object',
																														required: [],
																														properties: {
																															title: {
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0/properties/title',
																																type: ['null', 'string'],
																															},
																															url: {
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0/properties/url',
																																type: ['null', 'string'],
																															},
																														},
																														additionalProperties: true,
																													},
																													{
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1',
																														type: 'object',
																														required: [],
																														properties: {
																															url: {
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1/properties/url',
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
																								infoSections: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections',
																									type: 'array',
																									additionalItems: true,
																									items: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items',
																										anyOf: [
																											{
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0',
																												type: 'object',
																												required: [],
																												properties: {
																													title: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/title',
																														type: ['null', 'string'],
																													},
																													icon: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/icon',
																														type: ['null', 'string'],
																													},
																													infoSections: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections',
																														type: 'array',
																														additionalItems: true,
																														items: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items',
																															anyOf: [
																																{
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0',
																																	type: 'object',
																																	required: [],
																																	properties: {
																																		title: {
																																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/title',
																																			type: ['null', 'string'],
																																		},
																																		descriptions: {
																																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions',
																																			type: 'array',
																																			additionalItems: true,
																																			items: {
																																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions/items',
																																				anyOf: [
																																					{
																																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/regionDetails/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions/items/anyOf/0',
																																						type: [
																																							'null',
																																							'string',
																																						],
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
																			resorts: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts',
																				type: 'array',
																				additionalItems: true,
																				items: {
																					$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items',
																					anyOf: [
																						{
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0',
																							type: 'object',
																							required: [],
																							properties: {
																								destinationInfo: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationInfo',
																									type: 'array',
																									additionalItems: true,
																									items: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationInfo/items',
																										anyOf: [
																											{
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationInfo/items/anyOf/0',
																												type: 'object',
																												required: [],
																												properties: {
																													id: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationInfo/items/anyOf/0/properties/id',
																														type: ['null', 'string'],
																													},
																													name: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationInfo/items/anyOf/0/properties/name',
																														type: ['null', 'string'],
																													},
																												},
																												additionalProperties: true,
																											},
																										],
																									},
																								},
																								destinationType: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationType',
																									type: ['null', 'string'],
																								},
																								title: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/title',
																									type: ['null', 'string'],
																								},
																								destinationMap: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationMap',
																									type: 'object',
																									required: [],
																									properties: {
																										latitude: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationMap/properties/latitude',
																											type: 'number',
																										},
																										longitude: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/destinationMap/properties/longitude',
																											type: 'number',
																										},
																									},
																									additionalProperties: true,
																								},
																								carousel: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/carousel',
																									type: 'object',
																									required: [],
																									properties: {
																										images: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/carousel/properties/images',
																											type: 'array',
																											additionalItems: true,
																											items: {
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/carousel/properties/images/items',
																												anyOf: [
																													{
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0',
																														type: 'object',
																														required: [],
																														properties: {
																															title: {
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0/properties/title',
																																type: ['null', 'string'],
																															},
																															url: {
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/carousel/properties/images/items/anyOf/0/properties/url',
																																type: ['null', 'string'],
																															},
																														},
																														additionalProperties: true,
																													},
																													{
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1',
																														type: 'object',
																														required: [],
																														properties: {
																															url: {
																																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/carousel/properties/images/items/anyOf/1/properties/url',
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
																								infoSections: {
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections',
																									type: 'array',
																									additionalItems: true,
																									items: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items',
																										anyOf: [
																											{
																												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0',
																												type: 'object',
																												required: [],
																												properties: {
																													title: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/title',
																														type: ['null', 'string'],
																													},
																													icon: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/icon',
																														type: ['null', 'string'],
																													},
																													infoSections: {
																														$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections',
																														type: 'array',
																														additionalItems: true,
																														items: {
																															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items',
																															anyOf: [
																																{
																																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0',
																																	type: 'object',
																																	required: [],
																																	properties: {
																																		title: {
																																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/title',
																																			type: ['null', 'string'],
																																		},
																																		descriptions: {
																																			$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions',
																																			type: 'array',
																																			additionalItems: true,
																																			items: {
																																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions/items',
																																				anyOf: [
																																					{
																																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/destinations/items/anyOf/0/properties/regions/items/anyOf/0/properties/resorts/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/infoSections/items/anyOf/0/properties/descriptions/items/anyOf/0',
																																						type: [
																																							'null',
																																							'string',
																																						],
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
									bookingExcursions: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingExcursions',
										type: 'array',
										additionalItems: true,
										items: {
											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingExcursions/items',
											anyOf: [
												{
													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingExcursions/items/anyOf/0',
													type: 'object',
													required: [],
													properties: {
														cta: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingExcursions/items/anyOf/0/properties/cta',
															type: 'object',
															required: [],
															properties: {
																target: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingExcursions/items/anyOf/0/properties/cta/properties/target',
																	type: ['null', 'string'],
																},
																title: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingExcursions/items/anyOf/0/properties/cta/properties/title',
																	type: ['null', 'string'],
																},
																subtitle: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingExcursions/items/anyOf/0/properties/cta/properties/subtitle',
																	type: ['null', 'string'],
																},
																image: {
																	$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingExcursions/items/anyOf/0/properties/cta/properties/image',
																	type: ['null', 'string'],
																},
															},
															additionalProperties: true,
														},
													},
													additionalProperties: true,
												},
											],
										},
									},
									guideOnline: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/guideOnline',
										type: 'object',
										required: [],
										properties: {
											isAvailableForBooking: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/guideOnline/properties/isAvailableForBooking',
												type: 'boolean',
											},
											status: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/guideOnline/properties/status',
												type: ['null', 'string'],
											},
											smsNumber: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/guideOnline/properties/smsNumber',
												type: ['null', 'string'],
											},
										},
										additionalProperties: true,
									},
									imageType: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/imageType',
										type: ['null', 'string'],
									},
									packageType: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/packageType',
										type: ['null', 'string'],
									},
									includeInHighlights: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/includeInHighlights',
										type: 'boolean',
									},
									brazeAttributes: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes',
										type: 'object',
										required: [],
										properties: {
											TDA_Market: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/TDA_Market',
												type: ['null', 'string'],
											},
											TDA_Brand: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/TDA_Brand',
												type: ['null', 'string'],
											},
											User_ID: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/User_ID',
												type: ['null', 'string'],
											},
											Booking_Reference_Number: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Booking_Reference_Number',
												type: ['null', 'string'],
											},
											Departure_Date: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Departure_Date',
												type: ['null', 'string'],
											},
											Departure_Airport_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Departure_Airport_Code',
												type: ['null', 'string'],
											},
											Departure_Airport_Name: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Departure_Airport_Name',
												type: ['null', 'string'],
											},
											Destination_Airport_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Destination_Airport_Code',
												type: ['null', 'string'],
											},
											Destination_Airport_Name: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Destination_Airport_Name',
												type: ['null', 'string'],
											},
											Outbound_Carrier_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Outbound_Carrier_Code',
												type: ['null', 'string'],
											},
											Outbound_Carrier_Name: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Outbound_Carrier_Name',
												type: ['null', 'string'],
											},
											Outbound_Flight_Class: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Outbound_Flight_Class',
												type: ['null', 'string'],
											},
											Inbound_Carrier_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Inbound_Carrier_Code',
												type: ['null', 'string'],
											},
											Inbound_Carrier_Name: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Inbound_Carrier_Name',
												type: ['null', 'string'],
											},
											Inbound_Flight_Class: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Inbound_Flight_Class',
												type: ['null', 'string'],
											},
											Transfer_Included: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Transfer_Included',
												type: ['null', 'string'],
											},
											Destination_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Destination_Code',
												type: ['null', 'string'],
											},
											Destination_Name: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Destination_Name',
												type: ['null', 'string'],
											},
											Accommodation_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Accommodation_Code',
												type: ['null', 'string'],
											},
											Accommodation_Name: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Accommodation_Name',
												type: ['null', 'string'],
											},
											Booking_Purchase_Date: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Booking_Purchase_Date',
												type: ['null', 'string'],
											},
											Credit_Voucher_Currency: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Credit_Voucher_Currency',
												type: ['null', 'string'],
											},
											Credit_Voucher_Balance: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Credit_Voucher_Balance',
												type: ['null', 'string'],
											},
											Ancillary_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Ancillary_Code',
												type: ['null', 'string'],
											},
											Ancillary_Name: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Ancillary_Name',
												type: ['null', 'string'],
											},
											Status_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Status_Code',
												type: ['null', 'string'],
											},
											Total_Price: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Total_Price',
												type: ['null', 'string'],
											},
											Price_Per_Passenger: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Price_Per_Passenger',
												type: ['null', 'string'],
											},
											Package_ID_Number: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Package_ID_Number',
												type: ['null', 'string'],
											},
											Haul_Type_Code: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Haul_Type_Code',
												type: ['null', 'string'],
											},
											Haul_Type_Name: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Haul_Type_Name',
												type: ['null', 'string'],
											},
											Return_Date: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Return_Date',
												type: ['null', 'string'],
											},
											Flight_Checkin_Available: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Flight_Checkin_Available',
												type: ['null', 'string'],
											},
											Flight_Checkin_Open_Time: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Flight_Checkin_Open_Time',
												type: ['null', 'string'],
											},
											Holiday_Type: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Holiday_Type',
												type: ['null', 'string'],
											},
											Holiday_Duration: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Holiday_Duration',
												type: ['null', 'string'],
											},
											Booking_Channel: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Booking_Channel',
												type: ['null', 'string'],
											},
											Booking_Ancillaries_List: {
												$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brazeAttributes/properties/Booking_Ancillaries_List',
												type: ['null', 'string'],
											},
										},
										additionalProperties: true,
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

export default bookingSchema;
