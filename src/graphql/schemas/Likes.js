import { gql } from 'apollo-server-express';

export default gql`
	type Like {
		id: ID!
		createdAt: String!
		user: String!
		username: String!
	}
	type Mutation {
		likeDate(_id: ID!): Date!
	}
`;
