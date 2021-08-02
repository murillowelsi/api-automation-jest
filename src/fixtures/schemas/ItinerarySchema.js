const itinerarySchema = {
	$schema: 'http://json-schema.org/draft-07/schema',
	$id: 'http://example.com/example.json',
	type: 'object',
	required: [],
	properties: {
		title: {
			$id: '#/properties/title',
			type: 'string',
		},
		passengers: {
			$id: '#/properties/passengers',
			type: 'object',
			required: [],
			properties: {
				title: {
					$id: '#/properties/passengers/properties/title',
					type: 'object',
					required: [],
					properties: {
						textColor: {
							$id: '#/properties/passengers/properties/title/properties/textColor',
							type: 'string',
						},
						backgroundColor: {
							$id: '#/properties/passengers/properties/title/properties/backgroundColor',
							type: 'string',
						},
						text: {
							$id: '#/properties/passengers/properties/title/properties/text',
							type: 'string',
						},
					},
					additionalProperties: true,
				},
				names: {
					$id: '#/properties/passengers/properties/names',
					type: 'object',
					required: [],
					properties: {
						textColor: {
							$id: '#/properties/passengers/properties/names/properties/textColor',
							type: 'string',
						},
						backgroundColor: {
							$id: '#/properties/passengers/properties/names/properties/backgroundColor',
							type: 'string',
						},
						texts: {
							$id: '#/properties/passengers/properties/names/properties/texts',
							type: 'array',
							additionalItems: true,
							items: {
								$id: '#/properties/passengers/properties/names/properties/texts/items',
								anyOf: [
									{
										$id: '#/properties/passengers/properties/names/properties/texts/items/anyOf/0',
										type: 'string',
									},
								],
							},
						},
					},
					additionalProperties: true,
				},
			},
			additionalProperties: true,
		},
		booking: {
			$id: '#/properties/booking',
			type: 'object',
			required: [],
			properties: {
				title: {
					$id: '#/properties/booking/properties/title',
					type: 'object',
					required: [],
					properties: {
						textColor: {
							$id: '#/properties/booking/properties/title/properties/textColor',
							type: 'string',
						},
						backgroundColor: {
							$id: '#/properties/booking/properties/title/properties/backgroundColor',
							type: 'string',
						},
						text: {
							$id: '#/properties/booking/properties/title/properties/text',
							type: 'string',
						},
					},
					additionalProperties: true,
				},
				reference: {
					$id: '#/properties/booking/properties/reference',
					type: 'object',
					required: [],
					properties: {
						textColor: {
							$id: '#/properties/booking/properties/reference/properties/textColor',
							type: 'string',
						},
						backgroundColor: {
							$id: '#/properties/booking/properties/reference/properties/backgroundColor',
							type: 'string',
						},
						text: {
							$id: '#/properties/booking/properties/reference/properties/text',
							type: 'string',
						},
					},
					additionalProperties: true,
				},
			},
			additionalProperties: true,
		},
		itinerary: {
			$id: '#/properties/itinerary',
			type: 'object',
			required: [],
			properties: {
				sections: {
					$id: '#/properties/itinerary/properties/sections',
					type: 'array',
					additionalItems: true,
					items: {
						$id: '#/properties/itinerary/properties/sections/items',
						anyOf: [
							{
								$id: '#/properties/itinerary/properties/sections/items/anyOf/0',
								type: 'object',
								required: [],
								properties: {
									priority: {
										$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/priority',
										type: 'integer',
									},
									backgroundColor: {
										$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/backgroundColor',
										type: 'string',
									},
									day: {
										$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/day',
										type: 'object',
										required: [],
										properties: {
											textColor: {
												$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/day/properties/textColor',
												type: 'string',
											},
											backgroundColor: {
												$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/day/properties/backgroundColor',
												type: 'string',
											},
											text: {
												$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/day/properties/text',
												type: 'string',
											},
										},
										additionalProperties: true,
									},
									date: {
										$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/date',
										type: 'object',
										required: [],
										properties: {
											textColor: {
												$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/date/properties/textColor',
												type: 'string',
											},
											backgroundColor: {
												$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/date/properties/backgroundColor',
												type: 'string',
											},
											text: {
												$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/date/properties/text',
												type: 'string',
											},
										},
										additionalProperties: true,
									},
									items: {
										$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items',
										type: 'array',
										additionalItems: true,
										items: {
											$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items',
											anyOf: [
												{
													$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0',
													type: 'object',
													required: [],
													properties: {
														priority: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/priority',
															type: 'integer',
														},
														backgroundColor: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/backgroundColor',
															type: 'string',
														},
														target: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/target',
															type: 'object',
															required: [],
															properties: {
																layout: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/target/properties/layout',
																	type: 'object',
																	required: [],
																	properties: {
																		type: {
																			$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/target/properties/layout/properties/type',
																			type: 'string',
																		},
																		title: {
																			$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/target/properties/layout/properties/title',
																			type: 'string',
																		},
																	},
																	additionalProperties: true,
																},
																action: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/target/properties/action',
																	type: 'object',
																	required: [],
																	properties: {
																		type: {
																			$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/target/properties/action/properties/type',
																			type: 'string',
																		},
																		target: {
																			$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/target/properties/action/properties/target',
																			type: 'string',
																		},
																	},
																	additionalProperties: true,
																},
															},
															additionalProperties: true,
														},
														iconURL: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/iconURL',
															type: 'string',
														},
														heading: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/heading',
															type: 'object',
															required: [],
															properties: {
																textColor: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/heading/properties/textColor',
																	type: 'string',
																},
																backgroundColor: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/heading/properties/backgroundColor',
																	type: 'string',
																},
																text: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/heading/properties/text',
																	type: 'string',
																},
															},
															additionalProperties: true,
														},
														subHeadings: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/subHeadings',
															type: 'array',
															additionalItems: true,
															items: {
																$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/subHeadings/items',
																anyOf: [
																	{
																		$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/subHeadings/items/anyOf/0',
																		type: 'object',
																		required: [],
																		properties: {
																			priority: {
																				$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/subHeadings/items/anyOf/0/properties/priority',
																				type: 'integer',
																			},
																			textColor: {
																				$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/subHeadings/items/anyOf/0/properties/textColor',
																				type: 'string',
																			},
																			backgroundColor: {
																				$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/subHeadings/items/anyOf/0/properties/backgroundColor',
																				type: 'string',
																			},
																			text: {
																				$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/0/properties/subHeadings/items/anyOf/0/properties/text',
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
													$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1',
													type: 'object',
													required: [],
													properties: {
														priority: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/priority',
															type: 'integer',
														},
														backgroundColor: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/backgroundColor',
															type: 'string',
														},
														transferType: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/transferType',
															type: 'string',
														},
														iconURL: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/iconURL',
															type: 'string',
														},
														heading: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/heading',
															type: 'object',
															required: [],
															properties: {
																textColor: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/heading/properties/textColor',
																	type: 'string',
																},
																backgroundColor: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/heading/properties/backgroundColor',
																	type: 'string',
																},
																text: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/heading/properties/text',
																	type: 'string',
																},
															},
															additionalProperties: true,
														},
														subHeadings: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/subHeadings',
															type: 'array',
															additionalItems: true,
															items: {
																$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/subHeadings/items',
																anyOf: [
																	{
																		$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/subHeadings/items/anyOf/0',
																		type: 'object',
																		required: [],
																		properties: {
																			priority: {
																				$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/subHeadings/items/anyOf/0/properties/priority',
																				type: 'integer',
																			},
																			textColor: {
																				$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/subHeadings/items/anyOf/0/properties/textColor',
																				type: 'string',
																			},
																			backgroundColor: {
																				$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/subHeadings/items/anyOf/0/properties/backgroundColor',
																				type: 'string',
																			},
																			text: {
																				$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/subHeadings/items/anyOf/0/properties/text',
																				type: 'string',
																			},
																		},
																		additionalProperties: true,
																	},
																],
															},
														},
														target: {
															$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/target',
															type: 'object',
															required: [],
															properties: {
																layout: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/target/properties/layout',
																	type: 'object',
																	required: [],
																	properties: {
																		type: {
																			$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/target/properties/layout/properties/type',
																			type: 'string',
																		},
																		title: {
																			$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/target/properties/layout/properties/title',
																			type: 'string',
																		},
																	},
																	additionalProperties: true,
																},
																action: {
																	$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/target/properties/action',
																	type: 'object',
																	required: [],
																	properties: {
																		type: {
																			$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/target/properties/action/properties/type',
																			type: 'string',
																		},
																		target: {
																			$id: '#/properties/itinerary/properties/sections/items/anyOf/0/properties/items/items/anyOf/1/properties/target/properties/action/properties/target',
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
	},
	additionalProperties: true,
};

export default itinerarySchema;
