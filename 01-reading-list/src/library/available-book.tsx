import { Box, Image } from "@chakra-ui/react";
import { BookEntity } from "../storage";

export const AvailableBook = ({ book }: { book: BookEntity; }) => {
    return (<div>
        <Box
            boxSize={'130px'}
            background={book.isOnReadingList ? 'gray.100' : 'gray.300'}
            p={'10px'}
            onClick={_ => book.mutateReadingList()}
            shadow={'2xl'}
            border={'2px'}
            borderColor={'gray.500'}
            borderRadius={'md'}
            _hover={{
                cursor: 'pointer',
            }}
        >
            <Image
                boxSize='100px'
                objectFit={'contain'}
                src={book.cover}
                alt={book.title} />
        </Box>
    </div>);
};
