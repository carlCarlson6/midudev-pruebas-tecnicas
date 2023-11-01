import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { getAvailabreGenres } from "../storage";
import { create } from "zustand";

export const GenreFilter = () => {
    const { setGenre: selectGenre } = useGenresState();
    return (<>
        <RadioGroup 
            defaultValue=""
            onChange={x => selectGenre(x)}
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
                    <Radio value="" colorScheme={'gray'}>Todos</Radio>
                    {
                        getAvailabreGenres().map(x => <Radio value={x}>{x}</Radio>)
                    }
                </Stack>
            </Box>
        </RadioGroup>
    </>);
}
export const useGenresState = create<{
    genre: string,
    setGenre: (genre: string) => void
}>()(set => ({
    genre: "",
    setGenre: genre => set({genre})
}));