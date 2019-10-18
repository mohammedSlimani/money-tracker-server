export default function makeRemoveItemController({ removeItem }) {
	return async function removeItemController(httpRequest) {
		const headers = {
			"Content-Type": "application/json"
		};
		try {
			const { id, itemId } = httpRequest.params;

			const user = await removeItem({ id, itemId });
			return {
				headers,
				statusCode: user.nModified > 0 ? 200 : 500
			};
		} catch (e) {
			console.log(e);
			return {
				headers,
				statusCode: 400,
				body: {
					error: e.message
				}
			};
		}
	};
}
