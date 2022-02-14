import React from "react";
import ListItem from "./ListItem";
import {IAuthor} from "../../types/IAuthor";
import {IBook} from "../../types/IBook";

interface ListProps {
    items: IAuthor[] | IBook[];
}

const List: React.FC<ListProps> = ({items}) => {
    return (
        <div className="list my-4">
            {items.map((item, index) => (
                "authorName" in item
                    ? <ListItem name={item.authorName} number={index + 1} key={index}/>
                    : <ListItem name={item.title} number={index + 1} key={index}/>
            ))}
        </div>
    );
}
export default List;
