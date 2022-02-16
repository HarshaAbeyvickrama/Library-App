import React, {useState} from "react";
import SectionTitle from "../Common/SectionTitle";
import Divider from "../Common/Divider";
import EmptyList from "../Common/EmptyList";
import List from "../Common/List";
import AddItem from "../Common/AddItem";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../types/IAuthor";
import DeleteConfirmation from "../Alerts/DeleteConfirmation";
import SuccessTimeoutAlert from "../Alerts/SuccessTimeoutAlert";

const AuthorSection: React.FC = () => {
    const authors: IAuthor[] = [
        {authorName: "Armando Lucas Correa"},
        {authorName: "Jess Kidd"},
        {authorName: "Martha John"},
        {authorName: "Martha McPhee"},
        {authorName: "Megan Miranda"},
    ];

    const onItemDeleted = () => {
        setShowDeleteConfirmation(false);
        setShowSuccessAlert(true);
    }
    const onAuthorDeleteClicked = (authorIndexToBeDeleted: number) => {
        authors.forEach((author: IAuthor, index) => {
            if (index === authorIndexToBeDeleted) {
                setCurrentAuthorToBeDeleted(author);
            }
        })
        setShowDeleteConfirmation(true);
    }
    const [showAuthorForm, setShowAuthorForm] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [currentAuthorToBeDeleted, setCurrentAuthorToBeDeleted] = useState<IAuthor | null>(null);

    return (
        <React.Fragment>
            <SectionTitle title={"Authors"}/>
            <Divider/>
            {!authors
                ? <EmptyList sectionTitle={"Author"}/>
                : <List items={authors} onDeleteIconClicked={onAuthorDeleteClicked}/>
            }
            {!showAuthorForm && <AddItem title={"Author"} onAddItemClick={setShowAuthorForm}/>}
            {showAuthorForm && <AuthorForm onFormClose={setShowAuthorForm}/>}
            <DeleteConfirmation
                onDelete={onItemDeleted}
                show={showDeleteConfirmation}
                setShow={setShowDeleteConfirmation}
                title={"Delete Author " + currentAuthorToBeDeleted?.authorName + " ?"}
                confirmBtnText={"Delete Author"}
            />
            <SuccessTimeoutAlert
                show={showSuccessAlert}
                setShow={setShowSuccessAlert}
                itemType={"Author"}
            />
        </React.Fragment>
    );
}

export default AuthorSection;
