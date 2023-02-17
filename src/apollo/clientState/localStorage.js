import { GET_NOTES } from '../queries';
import seed from '../../utils/seed';
import pages from '../../utils/pages';

export const saveNotes = (cache) => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNotes = JSON.stringify(notes);

  try {
    localStorage.setItem('notes', jsonNotes);
  } catch (e) {
    console.error(e);
  }
};

export const restoreNotes = () => {
  const notes = localStorage.getItem('notes');

  if (notes) {
    try {
      return JSON.parse(notes);
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  return [seed];
};

export const savePages = (page) => {
  const { pages } = cache.readQuery({ query: GET_PAGES });
  const jsonPages = JSON.stringify(pages);

  try {
    localStorage.setItem('pages', jsonPages);
  } catch (e) {
    console.error(e);
  }
}

export const restorePages = () => {
  const pages = localStorage.getItem('pages');

  if (pages) {
    try {
      return JSON.parse(pages);
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  return [seed];
};