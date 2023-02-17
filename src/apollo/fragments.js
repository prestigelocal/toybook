import gql from 'graphql-tag';

export const NOTE_FRAGMENT = gql`
    fragment NoteParts on Note {
        id
        title
        content
    }
`;

export const PAGE_FRAGMENT = gql`
    fragment PageParts on Page {
        id
        title
        route
    }
`;
