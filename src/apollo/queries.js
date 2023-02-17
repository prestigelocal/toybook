import gql from 'graphql-tag';
import { PAGE_FRAGMENT, NOTE_FRAGMENT } from './fragments';

export const GET_NOTES = gql`
  ${NOTE_FRAGMENT}
  {
    notes @client {
      ...NoteParts
    }
  }
`;

export const GET_PAGES = gql`
  ${PAGE_FRAGMENT}
  {
    pages @client {
      ...PageParts
    }
  }
`

export const GET_NOTE = gql`
  ${NOTE_FRAGMENT}
  query getNote($id: String!) {
    note(id: $id) @client {
      ...NoteParts
    }
  }
`;

export const GET_PAGE = gql`
  ${PAGE_FRAGMENT}
  query getPage($id: String!) {
    page(id: $id) @client {
      ...PageParts
    }
  }
`;

export const ADD_NOTE = gql`
  mutation createNote($title: String!, $content: String) {
    createNote(title: $title, content: $content) @client {
      id
    }
  }
`;

export const ADD_PAGE = gql`
  mutation createPage($title: String!, $route: String) {
    createPage(title: $title, route: $route) @client {
      id
    }
  }
`;

export const EDIT_NOTE = gql`
  mutation editNote($id: String!, $title: String!, $content: String) {
    editNote(id: $id, title: $title, content: $content) @client {
      id
    }
  }
`;

export const REMOVE_NOTE = gql`
  mutation removeNote($id: String!) {
    removeNote(id: $id) @client
  }
`;
