import { restoreNotes } from './localStorage';

export default {
    notes: restoreNotes(),
    pages: restorePages()
};
