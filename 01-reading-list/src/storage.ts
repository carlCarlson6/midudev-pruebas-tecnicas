import { useLocalStorage } from "usehooks-ts";
import booksJson from "./books.json";

export interface BookDto {
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: number
    ISBN: string
    author: Author
}
  
export type BookEntity = BookDto & {
    isOnReadingList: boolean,
    mutateReadingList: () => void,
}

export interface Author {
    name: string
    otherBooks: string[]
}

const getBooksFromJson = (): BookDto[] => booksJson.library.map(book => book.book);
export const getAvailabreGenres = () => [...new Set(getBooksFromJson().map(x => x.genre))];

const useReadingListLocalStorage = () => useLocalStorage<string[]>("reading-list", []);

export const useCatalog = (genreFilter: string = '') => {
    console.log('genreFilter', typeof genreFilter)
    const {addToReadingList, removeFromReadList} = useReadingList();
    const [isbnsOnReadingList] = useReadingListLocalStorage();
    const books = genreFilter === '' ? getBooksFromJson() : getBooksFromJson().filter(x => x.genre === genreFilter);    
    return {
        catalog: books.map(book => ({
            ...book,
            isOnReadingList: isbnsOnReadingList.findIndex(x => x === book.ISBN) !== -1,
            mutateReadingList: () => isbnsOnReadingList.findIndex(x => x === book.ISBN) === -1
                ? addToReadingList(book)
                : removeFromReadList(book)
        })),
    };
}

const useReadingList = () => {
    const [isbnsOnReadingList, set] = useReadingListLocalStorage();
    return {
        addToReadingList: (book: BookDto) => {
            if (isbnsOnReadingList.findIndex(x => x === book.ISBN) !== -1)
                return;
            set([book.ISBN, ...isbnsOnReadingList]);
        },
        removeFromReadList: (book: BookDto) => set(isbnsOnReadingList.filter(x => x !== book.ISBN)),
    };
}