import { useLocalStorage } from "usehooks-ts";
import booksJson from "./assets/books.json";
import { BookDto } from "./assets/models";

export const getBooksFromJson = (): BookDto[] => booksJson.library.map(book => book.book);

export const useCatalog = (genreFilter: string = '') => {
    const { booksOnReadingList, addToReadingList, removeFromReadList } = useReadingList();
    const books = genreFilter === '' ? getBooksFromJson() : getBooksFromJson().filter(x => x.genre === genreFilter);
    return {
        catalog: books.map(book => ({
            ...book,
            isOnReadingList: booksOnReadingList.findIndex(x => x === book.ISBN) !== -1,
            mutateReadingList: () => booksOnReadingList.findIndex(x => x === book.ISBN) === -1
                ? addToReadingList(book)
                : removeFromReadList(book)
        })),
    };
}

const useReadingList = () => {
    const [booksOnReadingList, set] = useLocalStorage<string[]>("reading-list", []);
    return {
        booksOnReadingList,
        addToReadingList: (book: BookDto) => {
            if (booksOnReadingList.findIndex(x => x === book.ISBN) !== -1)
                return;
            set([book.ISBN, ...booksOnReadingList]);
        },
        removeFromReadList: (book: BookDto) => set(booksOnReadingList.filter(x => x !== book.ISBN)),
    };
}