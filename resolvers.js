var db = require("./db")

const Query = {
	greeting: () => 'Test Success , GraphQL server is up & running !!',
	students: () => db.students.list(),

	studentById: (root, args, context, info) => {
		// In this case, [root] is "null"
		console.log('========== studentById ========== : ', root, args, context, info)

		return db.students.get(args.id);
	}
}

const Students = {
	fullName: (root, args, context, info) => {
		// In this case, [args] is "null"
		console.log('========== fullName ========== : ', root, args, context, info)

		return root.firstName + " : " + root.lastName
	}
}

module.exports = { Query, Students };