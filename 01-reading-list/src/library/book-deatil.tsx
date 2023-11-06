import React from "react";
import { useCatalog } from "../storage";
import { Card, CardBody, CardFooter, Divider, Flex, Heading, Image, ListItem, Spacer, Stack, Tag, Text, UnorderedList } from "@chakra-ui/react";
import { ReadingListButton } from "../reading-list/reading-list-button";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const BookDetail: React.FC<{isbn: string}> = ({isbn}) => {
    const book = useCatalog().catalog.find(x => x.ISBN === isbn);
    const [parent] = useAutoAnimate();
    if (!book) return (<></>);
    return (<div>
        <Card
            ref={parent}
            border={'2px'}
            borderColor={'gray.200'}
            borderRadius={'md'}
            direction={{ base: 'column', sm: 'row' }}
            overflow={'hidden'}
            variant={'outline'}
            backgroundColor={'gray.300'}
            paddingLeft={'1rem'}
        >
            <Image
                objectFit={'contain'}
                maxW={{ base: '100%', sm: '200px' }}
                padding={'1rem'}
                src={book.cover}
                alt={book.title} 
            />
            <Stack>
                <CardBody>
                    <Heading
                        size='lg'
                        color={"gray.800"}
                    >
                        {book.title}
                    </Heading>
                    <Heading
                        size={'md'}
                        color={"gray.600"}
                    >
                        {book.author.name}
                    </Heading>
                    <Heading
                        size={'sm'}
                        color={"gray.700"}
                    >
                        {book.year}
                    </Heading>
                    <Text maxWidth={'34rem'} paddingTop={'1rem'} paddingBottom={'1rem'}>
                        {book.synopsis}
                    </Text>
                    <Divider />
                    <Text textColor={'gray.500'} paddingTop={'1rem'}>
                        Another books by the author:
                    </Text>
                    <UnorderedList paddingLeft={'1.5rem'} textColor={'gray.500'}>
                        {book.author.otherBooks.map(x => (
                            <ListItem key={x}>{x}</ListItem>
                        ))}
                    </UnorderedList>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Flex minWidth='max-content' alignItems='center' gap='2'>
                        <ReadingListButton book={book} />
                        <Spacer />
                        <Tag>{book.genre}</Tag>
                        <Spacer/>
                        <Tag>{book.pages} pages</Tag>
                        <Spacer />
                        <Tag>ISBN: {book.ISBN}</Tag>
                    </Flex>
                </CardFooter>
            </Stack>
        </Card>
    </div>);
}