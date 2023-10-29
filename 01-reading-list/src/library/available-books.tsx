import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Grid, Heading, Image, Select, Stack, StackDivider, VStack } from "@chakra-ui/react";
import { BookEntity, getAvailabreGenres, useCatalog } from "../storage";
import { useState } from "react";

export const AvailableBooks = () => {
    const [genreFilter, setGenreFilter] = useState<string>('')
    const { catalog } = useCatalog(genreFilter);

    return (<>
        <VStack
            divider={<StackDivider borderColor='gray.200' />}
        >
        <Select 
            placeholder="pick your favorite genre"
            onChange={x => setGenreFilter(x.target.value)}
        >{
            getAvailabreGenres().map(x => <option value={x}>{x}</option>)
        }</Select>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>{
            catalog.map(book => <AvailableBook book={book} key={book.ISBN}/>)
        }</Grid>
        </VStack>
    </>);
}

export const AvailableBook = ({book}: {book: BookEntity}) => {
    return (<div>
        <Card maxW={'sm'} background={'gray.200'}>
            <CardBody>
                <Image 
                    src={book.cover} 
                    alt={book.title}
                    objectFit={'cover'}
                />
                <Divider />
                <Stack mt={'6'} spacing={'3'}>
                    <Heading size={'md'}>{book.title}</Heading>
                    <Heading size={'sm'} textColor={'gray.500'}>{book.author.name}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing={'2'} alignItems={'end'}>
                    <Button>more info</Button>
                    <Button
                        onClick={_ => book.mutateReadingList()}
                    >
                        { book.isOnReadingList ? <>remove</> : <>add</> }
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    </div>);
}