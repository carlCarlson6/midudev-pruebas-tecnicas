import React, { useState } from "react";
import { BookEntity } from "../storage";
import { Button, Card, CardBody, CardFooter, Flex, Heading, Image, ListItem, Spacer, Stack, Tag, Text, UnorderedList } from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon, PlusSquareIcon, SmallAddIcon } from '@chakra-ui/icons';

export const BookDetail: React.FC<{book: BookEntity}> = ({book}) => (<>
    <Card
        border={'4px'}
        borderColor={'gray.500'}
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
            src={book.cover}
            alt={book.title} />
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
                <Text py={'2'}>
                    {book.synopsis}
                </Text>
                <Text textColor={'gray.500'}>
                    You may also be interested in:
                </Text>
                <UnorderedList paddingLeft={'1.5rem'} textColor={'gray.500'}>
                    {book.author.otherBooks.map(x => (
                        <ListItem key={x}>{x}</ListItem>
                    ))}
                </UnorderedList>
            </CardBody>
            <CardFooter>
                <Flex gap={10}>
                    <Tag>{book.genre}</Tag>
                    <Tag>ISBN: {book.ISBN}</Tag>
                    <Spacer />
                    <MutateReadingListButton book={book} />
                </Flex>
            </CardFooter>
        </Stack>
    </Card>
</>)

const MutateReadingListButton: React.FC<{book: BookEntity}> = ({book}) => {
    console.log(book.isOnReadingList)
    const [isOnReadingList, setIsOnReadlingList] = useState(book.isOnReadingList);
    const onClick = () => {
        book.mutateReadingList();
        setIsOnReadlingList(!isOnReadingList);
    };

    return (<>
        {isOnReadingList ? <RemoveFromReadingListButton mutateReadingList={onClick} /> : <AddToReadingListButton mutateReadingList={onClick} />}
    </>);
};

const AddToReadingListButton: React.FC<{mutateReadingList: () => void}> = ({mutateReadingList}) => {
    const [isOver, setIsOver] = useState(false);
    return (<>
        <Button 
            onMouseOver={_ => setIsOver(true)} 
            onMouseOut={_ => setIsOver(false)}
            onClick={_ => mutateReadingList()}
        >
            { isOver ? <PlusSquareIcon /> : <SmallAddIcon />}
        </Button>
    </>);
}

const RemoveFromReadingListButton: React.FC<{mutateReadingList: () => void}> = ({mutateReadingList}) => {
    const [isOver, setIsOver] = useState(false);
    return (<>
        <Button 
            onMouseOver={_ => setIsOver(true)} 
            onMouseOut={_ => setIsOver(false)}
            onClick={_ => mutateReadingList()}
        >
            { isOver ? <DeleteIcon /> : <CheckCircleIcon />}
        </Button>
    </>);
}