const ancillarySchema = {
	$schema: 'http://json-schema.org/draft-07/schema',
	$id: 'ancillarySchema',
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
					type: 'string',
				},
				status: {
					$id: '#/properties/bookings/properties/status',
					type: 'string',
				},
				booking: {
					$id: '#/properties/bookings/properties/booking',
					type: 'array',
					additionalItems: false,
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
										type: 'string',
									},
									brand: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/brand',
										type: 'string',
									},
									bookingType: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/bookingType',
										type: 'string',
									},
									totalPassengers: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/totalPassengers',
										type: 'string',
									},
									passengers: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers',
										type: 'array',
										additionalItems: false,
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
															type: 'string',
														},
														title: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/title',
															type: 'string',
														},
														firstName: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/firstName',
															type: 'string',
														},
														surname: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/surname',
															type: 'string',
														},
														leadBookerIndicator: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/leadBookerIndicator',
															type: 'boolean',
														},
														passengerType: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/passengers/items/anyOf/0/properties/passengerType',
															type: 'string',
														},
													},
													additionalProperties: true,
												},
											],
										},
									},
									startDate: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/startDate',
										type: 'string',
									},
									endDate: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/endDate',
										type: 'string',
									},
									ancillaryEntity: {
										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity',
										type: 'array',
										additionalItems: false,
										items: {
											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items',
											anyOf: [
												{
													$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0',
													type: 'object',
													required: [],
													properties: {
														productType: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/productType',
															type: 'string',
														},
														sections: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections',
															type: 'array',
															additionalItems: false,
															items: {
																$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items',
																anyOf: [
																	{
																		$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0',
																		type: 'object',
																		required: [],
																		properties: {
																			productType: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/productType',
																				type: 'string',
																			},
																			productSubType: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/productSubType',
																				type: 'string',
																			},
																			productName: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/productName',
																				type: 'string',
																			},
																			title: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/title',
																				type: 'string',
																			},
																			subTitle: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/subTitle',
																				type: 'string',
																			},
																			ancillaryDetails: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails',
																				type: 'object',
																				required: [],
																				properties: {
																					title: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/title',
																						type: 'string',
																					},
																					subTitle: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/subTitle',
																						type: 'string',
																					},
																					applicableTime: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/applicableTime',
																						type: 'object',
																						required: [],
																						properties: {
																							startDateTime: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/applicableTime/properties/startDateTime',
																								type: 'string',
																							},
																							endDateTime: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/applicableTime/properties/endDateTime',
																								type: 'string',
																							},
																						},
																						additionalProperties: true,
																					},
																					images: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/images',
																						type: 'array',
																						additionalItems: false,
																						items: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/images/items',
																							anyOf: [
																								{
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/images/items/anyOf/0',
																									type: 'object',
																									required: [],
																									properties: {
																										type: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/images/items/anyOf/0/properties/type',
																											type: 'string',
																										},
																										link: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/images/items/anyOf/0/properties/link',
																											type: 'string',
																										},
																									},
																									additionalProperties: true,
																								},
																							],
																						},
																					},
																					state: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/state',
																						type: 'object',
																						required: [],
																						properties: {
																							key: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/state/properties/key',
																								type: 'string',
																							},
																							stateFlag: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/state/properties/stateFlag',
																								type: 'boolean',
																							},
																							title: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/state/properties/title',
																								type: 'string',
																							},
																						},
																						additionalProperties: true,
																					},
																					infoSections: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/infoSections',
																						type: 'array',
																						additionalItems: false,
																						items: {
																							$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/infoSections/items',
																							anyOf: [
																								{
																									$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/infoSections/items/anyOf/0',
																									type: 'object',
																									required: [],
																									properties: {
																										body: {
																											$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/infoSections/items/anyOf/0/properties/body',
																											type: 'string',
																										},
																									},
																									additionalProperties: true,
																								},
																							],
																						},
																					},
																					cta: {
																						$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta',
																						type: 'object',
																						required: [],
																						properties: {
																							layout: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta/properties/layout',
																								type: 'object',
																								required: [],
																								properties: {
																									type: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta/properties/layout/properties/type',
																										type: 'string',
																									},
																									icon: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta/properties/layout/properties/icon',
																										type: 'string',
																									},
																									title: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta/properties/layout/properties/title',
																										type: 'string',
																									},
																								},
																								additionalProperties: true,
																							},
																							action: {
																								$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta/properties/action',
																								type: 'object',
																								required: [],
																								properties: {
																									type: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta/properties/action/properties/type',
																										type: 'string',
																									},
																									method: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta/properties/action/properties/method',
																										type: 'string',
																									},
																									target: {
																										$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/ancillaryDetails/properties/cta/properties/action/properties/target',
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
																			sequence: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/sequence',
																				type: 'integer',
																			},
																			serviceId: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/serviceId',
																				type: 'string',
																			},
																			thumbnail: {
																				$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/sections/items/anyOf/0/properties/thumbnail',
																				type: 'string',
																			},
																		},
																		additionalProperties: true,
																	},
																],
															},
														},
														subTitle: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/subTitle',
															type: 'string',
														},
														title: {
															$id: '#/properties/bookings/properties/booking/items/anyOf/0/properties/ancillaryEntity/items/anyOf/0/properties/title',
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
			},
			additionalProperties: true,
		},
	},
	additionalProperties: true,
};

export default ancillarySchema;
