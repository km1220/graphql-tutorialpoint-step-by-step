var db = require("./db")

const Query = {
	greeting: () => 'Test Success , GraphQL server is up & running !!',
	students: () => db.students.list(),

	studentById: (root, args, context, info) => {
		// // In this case, [root] is "null"
		// console.log('========== studentById ========== : ', root, args, context, info)

		return db.students.get(args.id);
	},

	// 
	// 
	// 
	// // 		query variable example
	sayHello: (root, args, context, info) => {
		return `Hi "${args.name}" !     Nice to meet you!`
	},



	setFavoriteColor: (root, args, context, info) => {
		return `Your favorite color is ${args.color}`
	}
}

const Student = {
	fullName: (root, args, context, info) => {
		// // In this case, [args] is "null"
		// console.log('========== fullName ========== : ', root, args, context, info)

		return root.firstName + " : " + root.lastName
	},
	college: (root) => {
		return db.colleges.get(root.collegeId);
	}
}



// ===================================================

const Mutation = {
	createStudent: (root, args, context, info) => {
		return db.students.create({
			collegeId: args.collegeId,
			firstName: args.firstName,
			lastName: args.lastName
		})
	},



	addStudent_return_obj: (root, args, context, info) => {
		const new_id = db.students.create({
			collegeId: args.collegeId,
			firstName: args.firstName,
			lastName: args.lastName
		})
		return db.students.get(new_id)
	}
}

module.exports = {
	Query, Student,
	Mutation
};