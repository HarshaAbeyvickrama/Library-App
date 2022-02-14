import React from "react";
import SectionTitle from "./SectionTitle";
import Divider from "./Divider";
import EmptyList from "./EmptyList";
import List from "./List";
import AddItem from "./AddItem";
import Form from "./Form";

const AuthorSection :React.FC = () => {
    return(
        <React.Fragment>
            <SectionTitle title={"Authors"}/>
            <Divider/>
            <EmptyList sectionTitle={"Author"}/>
            <List/>
            <AddItem title={"book"}/>
            <Form/>
        </React.Fragment>
    );
}

export default AuthorSection;
