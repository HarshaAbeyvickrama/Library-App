import React from "react";
import ListItem from "./ListItem";
import {IAuthor} from "../../types/IAuthor";
import {IBook} from "../../types/IBook";
interface ListProps{
    items : IAuthor[] | IBook[];
}
const List :React.FC<ListProps> = ({items}) => {
    console.log(items);
    return(
        <div className="list my-4">
            <ListItem name={'Abeyvickrama'} number={1} />
            <ListItem name={'Harsha'} number={2} />
            <ListItem name={'Hansika'} number={3} />
        </div>
    );
}
export default List;
