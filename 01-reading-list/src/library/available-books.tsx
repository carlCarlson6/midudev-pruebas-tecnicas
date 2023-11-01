import { Grid } from "@chakra-ui/react";
import { useCatalog } from "../storage";
import { AvailableBook } from "./available-book";
import { useGenresState } from "./genre-filter";

export const AvailableBooks = () => {
    const { genre: selectedGenre } = useGenresState();
    const { catalog } = useCatalog(selectedGenre);
    return (<>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>{
            catalog.map(book => <AvailableBook book={book} key={book.ISBN}/>)
        }</Grid>
    </>);
}
