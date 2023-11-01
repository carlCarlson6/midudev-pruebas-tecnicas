import { Center, Grid, Link, Spacer } from "@chakra-ui/react";
import { create } from "zustand";

export const NavBar = () => {
	const {nav, setNav} = useNavigation();
	return (<>
		<Center
			paddingBottom={'0.75rem'}
			paddingTop={'0.75rem'}
			marginBottom={'1rem'}
			border={'2px'}
			borderColor={'gray.200'}
			borderRadius={'lg'}
			textColor={'gray.100'}
			backgroundColor={'gray.500'}
		>
			<Grid templateColumns='repeat(3, 1fr)' gap={7}>
				<Link
					onClick={_ => setNav("catalog")}
					textDecoration={nav === "catalog" ? "underline" : ""}
				>
					Catalog
				</Link>
				<Spacer />
				<Link
					onClick={_ => setNav("reading-list")}
					textDecoration={nav === "reading-list" ? "underline" : ""}
				>
					Reading List
				</Link>
			</Grid>
		</Center>
	</>);
};

type NavOptions = "catalog" | "reading-list";

export const useNavigation = create<{
	nav: NavOptions,
	setNav: (nav: NavOptions) => void
}>()(set => ({
	nav: "catalog",
	setNav: nav => set({nav})
}))