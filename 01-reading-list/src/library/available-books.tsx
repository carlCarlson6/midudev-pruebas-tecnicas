import { Grid } from "@chakra-ui/react";
import { useCatalog } from "../storage";
import { AvailableBook } from "./available-book";

export const AvailableBooks = () => {
    const { catalog } = useCatalog("");
    return (<>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>{
            catalog.map(book => <AvailableBook book={book} key={book.ISBN}/>)
        }</Grid>
    </>);
}
