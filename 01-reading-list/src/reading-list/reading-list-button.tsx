import React, { useState } from "react";
import { PlusSquareIcon, SmallAddIcon, DeleteIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { BookEntity } from "../assets/models";

export const ReadingListButton: React.FC<{ book: BookEntity; }> = ({ book }) => (<>{book.isOnReadingList
    ? <RemoveFromReadingListButton mutateReadingList={book.mutateReadingList} />
    : <AddToReadingListButton mutateReadingList={book.mutateReadingList} />}</>);

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
