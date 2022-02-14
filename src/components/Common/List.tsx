import React from "react";
import ListItem from "./ListItem";
import {IAuthor} from "../../types/IAuthor";
import {IBook} from "../../types/IBook";

interface ListProps {
    items: IAuthor[] | IBook[],
    onDeleteIconClicked: (deleteItem: boolean) => void
}

const List: React.FC<ListProps> = ({items, onDeleteIconClicked}) => {
    return (
        <div className="list my-4">
            {items.map((item, index) => (
                "authorName" in item
                    ? <ListItem name={item.authorName} number={index + 1} key={index}
                                onDeleteIconClicked={onDeleteIconClicked}/>
                    : <ListItem name={item.title} number={index + 1} key={index}
                                onDeleteIconClicked={onDeleteIconClicked}/>
            ))}
        </div>
    );
}
export default List;
