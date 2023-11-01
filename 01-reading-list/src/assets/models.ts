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