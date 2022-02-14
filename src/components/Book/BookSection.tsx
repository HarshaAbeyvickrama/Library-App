import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Divider from "../Common/Divider";
import EmptyList from "../Common/EmptyList";
import List from "../Common/List";
import AddItem from "../Common/AddItem";
import BookForm from "./BookForm";
import {IBook} from "../../types/IBook";
import SweetAlert from "react-bootstrap-sweetalert";

const BookSection: React.FC = () => {
    const books: IBook[] = [
        {title: "The Daughter's Tale"},
        {title: "Himself"},
        {title: "Gorgeous Lies"},
        {title: "All the Missing Girls"},
        {title: "The Beautiful Bureaucrat"},
    ];

    return (
        <React.Fragment>
            <SectionTitle title={"Books"}/>
            <Divider/>
            <EmptyList sectionTitle={"Book"}/>
            <List items={books}/>
            <AddItem title={"Book"}/>
            <BookForm/>

        </React.Fragment>
    );
}

export default BookSection;
