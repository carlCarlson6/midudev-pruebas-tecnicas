import { Box } from "@chakra-ui/react";
import { Catalog } from "./library/catalog";
import { NavBar, useNavigation } from "./assets/layout/nav-bar";
import { match } from "ts-pattern";
import { MyReadingList } from "./reading-list/my-reading-list";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const App = () => {
	const {nav} = useNavigation();
	const [parent] = useAutoAnimate();
	return (<>
		<Box ref={parent}>
			<NavBar />
			{match(nav)
				.with("catalog", () => (<Catalog />))
				.with("reading-list", ()=> (<MyReadingList />))
				.exhaustive()}
		</Box>
		
	</>);
}


