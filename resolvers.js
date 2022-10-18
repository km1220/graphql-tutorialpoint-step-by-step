var db = require("./db")

const Query = {
	greeting: () => 'Test Success , GraphQL server is up & running !!',
	students: () => db.students.list(),

	studentById: (root, args, context, info) => {
		return db.students.get(args.id);
	}
}
module.exports = { Query };