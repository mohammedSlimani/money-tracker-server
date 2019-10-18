export default function makeEditItem({ usersDb }) {
	return async function editItem({ id, itemId, ...changes }) {
		if (!id) {
			throw new Error("Privide the Id of the user");
		}
		if (!itemId) {
			throw new Error("Provide The item you want to edit");
		}
		// I dont think I need this functionality right now... how lazy I am.

		throw new Error("Not Implemented Yet");
	};
}
