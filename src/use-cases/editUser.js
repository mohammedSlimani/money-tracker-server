export default function makeEditUser({ usersDb }) {
	return async function editUser({ id, ...changes }) {
		if (!id) {
			throw new Error("Provide the Id of the user you want to edit");
		}

		const exist = await usersDb.findById({ id });
		if (!exist) {
			throw new Error("User to edit doesnt exist");
		}

		const edited = await usersDb.update({ id, ...changes });
		return edited;
	};
}
