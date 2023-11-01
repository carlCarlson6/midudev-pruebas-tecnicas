import { Box } from "@chakra-ui/react";
import { Catalog } from "./library/catalog";
import { NavBar, useNavigation } from "./assets/layout/nav-bar";
import { match } from "ts-pattern";
import { MyReadingList } from "./reading-list/my-reading-list";

export const App = () => {
	const {nav} = useNavigation();
	return (<>
		<Box>
			<NavBar />
			{match(nav)
				.with("catalog", () => (<Catalog />))
				.with("reading-list", ()=> (<MyReadingList />))
				.exhaustive()}
		</Box>
		
	</>);
}


