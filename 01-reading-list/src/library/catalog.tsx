import { Box, Flex } from "@chakra-ui/react";
import { GenreFilter } from "./genre-filter";
import { AvailableBooks } from "./available-books";
import { useSelectedBook } from "./available-book";
import { BookDetail } from "./book-deatil";

export const Catalog = () => {
    const {book} = useSelectedBook();
    return (<>
        <Flex gap={5}>
            <GenreFilter />
            <AvailableBooks />
            {
                book === undefined 
                ? <></>
                : <Box><BookDetail book={book} /></Box>
            }
        </Flex>
    </>);
};