export default function makeAddItemController({ addItem }) {
	return async function addItemController(httpRequest) {
		const headers = {
			"Content-Type": "application/json"
		};
		try {
			const { title, price } = httpRequest.body;
			const id = httpRequest.params.id;

			const user = await addItem({ id, item: { title, price } });

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
