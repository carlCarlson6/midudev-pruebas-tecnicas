import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { create } from "zustand";
import { getBooksFromJson } from "../storage";

export const GenreFilter = () => {
    const { setGenre: selectGenre, allGenres } = useGenresState();
    return (<>
        <RadioGroup 
            defaultValue=""
            onChange={x => selectGenre(x)}
            width={'10rem'}
        >
            <Box
                border={'2px'}
                borderColor={'gray.200'}
                borderRadius={'lg'}
                padding={'1rem'}
                textColor={'gray.100'}
                backgroundColor={'gray.500'}
            >
                <Stack 
                    direction={'column'}
                >     
                    <Radio value="" colorScheme={'gray'} key={""}>Todos</Radio>
                    { allGenres.map(x => 
                        <Radio value={x} key={x}>{x}</Radio>
                    )}
                </Stack>
            </Box>
        </RadioGroup>
    </>);
}
export const useGenresState = create<{
    genre: string,
    allGenres: string[],
    setGenre: (genre: string) => void
}>()(set => ({
    genre: "",
    allGenres: [...new Set(getBooksFromJson().map(x => x.genre))],
    setGenre: genre => set({genre})
}));