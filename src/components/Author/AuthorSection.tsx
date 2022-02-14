import React, {useState} from "react";
import SectionTitle from "../Common/SectionTitle";
import Divider from "../Common/Divider";
import EmptyList from "../Common/EmptyList";
import List from "../Common/List";
import AddItem from "../Common/AddItem";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../types/IAuthor";
import DeleteConfirmation from "../Alerts/DeleteConfirmation";
import SuccessAlert from "../Alerts/SuccessAlert";

const AuthorSection: React.FC = () => {
    const authors: IAuthor[] = [
        {authorName: "Armando Lucas Correa"},
        {authorName: "Jess Kidd"},
        {authorName: "Martha McPhee"},
        {authorName: "Martha McPhee"},
        {authorName: "Megan Miranda"},
    ];

    const onItemDeleted = () => {
        setShowDeleteConfirmation(false);
        setShowSuccessAlert(true);
    }
    const [showAuthorForm, setShowAuthorForm] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    return (
        <React.Fragment>
            <SectionTitle title={"Authors"}/>
            <Divider/>
            {!authors
                ? <EmptyList sectionTitle={"Author"}/>
                : <List items={authors} onDeleteIconClicked={setShowDeleteConfirmation}/>
            }
            <AddItem title={"Author"} onAddItemClick={setShowAuthorForm}/>
            {showAuthorForm && <AuthorForm onFormClose={setShowAuthorForm}/>}
            <DeleteConfirmation onDelete={onItemDeleted} show={showDeleteConfirmation}
                                setShow={setShowDeleteConfirmation}/>
            <SuccessAlert show={showSuccessAlert} setShow={setShowSuccessAlert}
                          message={"Author Successfully Deleted!"}/>
        </React.Fragment>
    );
}

export default AuthorSection;
