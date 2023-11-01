import { Flex } from "@chakra-ui/react";
import { GenreFilter } from "./genre-filter";
import { AvailableBooks } from "./available-books";
import { BookEntity } from "../storage";

export const Catalog = () => {
    const selectedBook: BookEntity | undefined = undefined;
    return (<>
        <Flex gap={5}>
            <GenreFilter />
            <AvailableBooks />
            {
                !selectedBook ?? <>
                    <>here goes the selected book component</>
                </>
            }
        </Flex>
    </>);
};