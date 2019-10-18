export default function makeRemoveItem({ usersDb }) {
	return async function removeItem({ id, itemId }) {
		if (!id) {
			throw new Error("Give user Id to remove Item");
		}
		if (!itemId) {
			throw new Error("Give item Id to remove");
		}

		return await usersDb.removeItem({ userId: id, itemId });
	};
}
