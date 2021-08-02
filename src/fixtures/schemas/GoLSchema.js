const golMessagesHistorySchema = {
	$schema: 'http://json-schema.org/draft-07/schema',
	$id: 'golSchema',
	type: 'object',
	required: ['messageList'],
	properties: {
		messageList: {
			$id: '#/properties/messageList',
			type: 'object',
			required: ['bookingId', 'timestamp', 'messages'],
			properties: {
				bookingId: {
					$id: '#/properties/messageList/properties/bookingId',
					type: 'string',
				},
				timestamp: {
					$id: '#/properties/messageList/properties/timestamp',
					type: 'string',
				},
				messages: {
					$id: '#/properties/messageList/properties/messages',
					type: 'array',
					additionalItems: true,
					items: {
						$id: '#/properties/messageList/properties/messages/items',
						anyOf: [
							{
								$id: '#/properties/messageList/properties/messages/items/anyOf/0',
								type: 'object',
								required: [
									'id',
									'timestamp',
									'channel',
									'author',
									'type',
									'alert',
									'category',
									'deliveryStatus',
									'sentDispatchId',
									'contentType',
									'body',
								],
								properties: {
									id: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/id',
										type: 'string',
									},
									timestamp: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/timestamp',
										type: 'string',
									},
									channel: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/channel',
										type: 'string',
									},
									author: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/author',
										type: 'string',
									},
									type: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/type',
										type: 'string',
									},
									alert: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/alert',
										type: 'boolean',
									},
									category: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/category',
										type: 'string',
									},
									deliveryStatus: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/deliveryStatus',
										type: 'string',
									},
									sentDispatchId: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/sentDispatchId',
										type: 'string',
									},
									contentType: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/contentType',
										type: 'string',
									},
									body: {
										$id: '#/properties/messageList/properties/messages/items/anyOf/0/properties/body',
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

export default golMessagesHistorySchema;
