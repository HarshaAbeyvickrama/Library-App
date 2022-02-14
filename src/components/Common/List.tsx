import React from "react";
import ListItem from "./ListItem";
import {Row} from "react-bootstrap";

const List :React.FC = () => {
    return(
        <div className="list my-4">
            <ListItem name={'Abeyvickrama'} number={1} />
            <ListItem name={'Harsha'} number={2} />
            <ListItem name={'Hansika'} number={3} />
        </div>
    );
}
export default List;
