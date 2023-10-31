import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { getAvailabreGenres } from "../storage";

export const GenreFilter = () => {
    return (<>
        <RadioGroup defaultValue=""
            onChange={x => console.log(x)}
        >
            <Stack direction={'column'}>
                <Radio value="">Todos</Radio>
                {
                    getAvailabreGenres().map(x => <Radio value={x}>{x}</Radio>)
                }
            </Stack>
        </RadioGroup>
    </>);
}