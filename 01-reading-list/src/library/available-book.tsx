import { Box, Image } from "@chakra-ui/react";
import { create } from "zustand";
import { BookEntity } from "../assets/models";

export const AvailableBook = ({ book }: { book: BookEntity; }) => {
    const { book: selectedBook, select, unselect } = useSelectedBook();
    const isSelected = book.ISBN === selectedBook?.ISBN;
    return (<div>
        <Box

        >
            <Image
                boxSize='100px'
                objectFit={'contain'}
                src={book.cover}
                alt={book.title} 
                background={ isSelected ? 'gray.300' : 'gray.400' }
                p={'10px'}
                onClick={_ => isSelected ? unselect() : select(book)}
                shadow={'2xl'}
                border={'2px'}
                borderColor={ isSelected ? 'gray.100' : 'gray.500' }
                borderRadius={'md'}
                _hover={{
                    cursor: 'pointer',
                }}
                />
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