import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Divider from "../Common/Divider";
import EmptyList from "../Common/EmptyList";
import List from "../Common/List";
import AddItem from "../Common/AddItem";
import BookForm from "./BookForm";

const BookSection :React.FC = () => {
    return(
        <React.Fragment>
            <SectionTitle title={"Books"}/>
            <Divider/>
            <EmptyList sectionTitle={"Book"}/>
            <List items={[]}/>
            <AddItem title={"Book"}/>
            <BookForm/>
        </React.Fragment>
    );
}

export default BookSection;
