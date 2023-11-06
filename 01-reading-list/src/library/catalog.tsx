import { Box, Flex } from "@chakra-ui/react";
import { GenreFilter } from "./genre-filter";
import { AvailableBooks } from "./available-books";
import { useSelectedBook } from "./available-book";
import { BookDetail } from "./book-deatil";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const Catalog = () => {
    const {book} = useSelectedBook();
    const [parent] = useAutoAnimate();
    return (<>
        <Flex gap={5}>
            <GenreFilter />
            <AvailableBooks />
            <div ref={parent}>{
                book === undefined 
                ? <></>
                : <Box ref={parent}><BookDetail isbn={book.ISBN} /></Box>
            }</div>
        </Flex>
    </>);
};