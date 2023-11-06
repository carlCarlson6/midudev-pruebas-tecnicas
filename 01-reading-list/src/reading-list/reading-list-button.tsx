import React, { useState } from "react";
import { PlusSquareIcon, SmallAddIcon, DeleteIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { BookEntity } from "../assets/models";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const ReadingListButton: React.FC<{ book: BookEntity; }> = ({ book }) => {
    const [parent] = useAutoAnimate();
    return (<div ref={parent}>
        {book.isOnReadingList
            ? <RemoveFromReadingListButton mutateReadingList={book.mutateReadingList} />
            : <AddToReadingListButton mutateReadingList={book.mutateReadingList} />}
    </div>);
};

const AddToReadingListButton: React.FC<{mutateReadingList: () => void}> = ({mutateReadingList}) => {
    const [isOver, setIsOver] = useState(false);
    const [parent] = useAutoAnimate();
    return (<>
        <Button 
            onMouseOver={_ => setIsOver(true)} 
            onMouseOut={_ => setIsOver(false)}
            onClick={_ => mutateReadingList()}
            ref={parent}
        >
            { isOver ? <PlusSquareIcon /> : <SmallAddIcon />}
        </Button>
    </>);
}

const RemoveFromReadingListButton: React.FC<{mutateReadingList: () => void}> = ({mutateReadingList}) => {
    const [isOver, setIsOver] = useState(false);
    const [parent] = useAutoAnimate();

    return (<>
        <Button 
            onMouseOver={_ => setIsOver(true)} 
            onMouseOut={_ => setIsOver(false)}
            onClick={_ => mutateReadingList()}
            ref={parent}
        >
            { isOver ? <DeleteIcon /> : <CheckCircleIcon />}
        </Button>
    </>);
}
