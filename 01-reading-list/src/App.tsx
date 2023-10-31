import { Flex } from "@chakra-ui/react";
import { AvailableBooks } from "./library/available-books";
import { GenreFilter } from "./library/genre-filter";

export const App = () => {
	return (<>
		<Flex gap={5}>
			<GenreFilter />
			<AvailableBooks />	
		</Flex>
	</>);
}
