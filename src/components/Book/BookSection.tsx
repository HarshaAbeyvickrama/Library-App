import React, {useState} from "react";
import SectionTitle from "../Common/SectionTitle";
import Divider from "../Common/Divider";
import EmptyList from "../Common/EmptyList";
import List from "../Common/List";
import AddItem from "../Common/AddItem";
import BookForm from "./BookForm";
import {IBook} from "../../types/IBook";
import SweetAlert from "react-bootstrap-sweetalert";
import DeleteConfirmation from "../Alerts/DeleteConfirmation";
import SuccessAlert from "../Alerts/SuccessAlert";

const BookSection: React.FC = () => {
    const books: IBook[] = [
        {title: "The Daughter's Tale"},
        {title: "Himself"},
        {title: "Gorgeous Lies"},
        {title: "All the Missing Girls"},
        {title: "The Beautiful Bureaucrat"},
    ];

    const onItemDeleted = () => {
        setShowDeleteConfirmation(false);
        setShowSuccessAlert(true);
    }
    const [showBookForm, setShowBookForm] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    return (
        <React.Fragment>
            <SectionTitle title={"Books"}/>
            <Divider/>
            {!books
                ? <EmptyList sectionTitle={"Book"}/>
                : <List items={books} onDeleteIconClicked={setShowDeleteConfirmation}/>
            }
            <AddItem title={"Book"} onAddItemClick={setShowBookForm}/>
            {showBookForm && <BookForm onFormClose={setShowBookForm}/>}
            <DeleteConfirmation
                onDelete={onItemDeleted}
                show={showDeleteConfirmation}
                setShow={setShowDeleteConfirmation}
            />
            <SuccessAlert show={showSuccessAlert} setShow={setShowSuccessAlert} message={"Book Successfully Deleted!"}/>

        </React.Fragment>
    );
}

export default BookSection;
