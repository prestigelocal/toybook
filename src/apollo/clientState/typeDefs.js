import gql from 'graphql-tag';

export default gql`
    extend type Query {
        notes: [Note]!
        note(id: String!): Note
        pages: [Page]!
        page(id: String!): Page
    }

    extend type Mutation {
        createPage(title: String!, route: String): Page!
        remotePage(id: String!): Boolean
        createNote(title: String!, content: String): Note!
        editNote(id: String!, title: String!, content: String): Note
        removeNote(id: String!): Boolean
    }

    type Note {
        id: String!
        title: String!
        content: String!
    }

    type Page {
        id: String!
        title: String!
        route: String!
    }
`;
