import { gql } from 'apollo-server-express';

export default gql`
	type User {
		_id: ID
		firstname: String!
		lastname: String!
		username: String!
		email: String!
		password: String!
		status: Int!
		range: Int!
		token: String!
		bachtitle: String!
		usericon: String!
		createdAt: String!
	}

	type Query {
		getUser(_id: ID): User!
		getUsers: [User]!
	}

	input RegisterInput {
		firstname: String!
		lastname: String!
		username: String!
		email: String!
		password: String!
		confirmPassword: String!
		status: Int
		range: Int
		bachtitle: String
		usericon: String
	}

	type Mutation {
		register(registerInput: RegisterInput): User
		login(username: String!, password: String!): User!
		updateUser(_id: ID, input: RegisterInput): User
		deleteUser(_id: ID): User
	}
`;
