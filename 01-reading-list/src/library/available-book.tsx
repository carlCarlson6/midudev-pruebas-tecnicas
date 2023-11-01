import { Box, Image } from "@chakra-ui/react";
import { BookEntity } from "../storage";
import { create } from "zustand";

export const AvailableBook = ({ book }: { book: BookEntity; }) => {
    const { book: selectedBook, select, unselect } = useSelectedBook()
    return (<div>
        <Box
            boxSize={'130px'}
            background={book.ISBN === selectedBook?.ISBN ? 'gray.100' : 'gray.300'}
            p={'10px'}
            onClick={_ => book.ISBN === selectedBook?.ISBN ? unselect() : select(b)}
            shadow={'2xl'}
            border={'2px'}
            borderColor={'gray.500'}
            borderRadius={'md'}
            _hover={{
                cursor: 'pointer',
            }}
        >
            <Image
                boxSize='100px'
                objectFit={'contain'}
                src={book.cover}
                alt={book.title} />
        </Box>
    </div>);
};

export const useSelectedBook = create<{
    book: BookEntity | undefined,
    select: (book: BookEntity) => void,
    unselect: () => void
}>()(set => ({
    book: undefined,
    select: book => set({book}),
    unselect: () => set({book: undefined})
}));