import React, {useEffect, useState} from "react";
import SectionTitle from "../Common/SectionTitle";
import Divider from "../Common/Divider";
import EmptyList from "../Common/EmptyList";
import List from "../Common/List";
import AddItem from "../Common/AddItem";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../types/IAuthor";
import DeleteConfirmation from "../Alerts/DeleteConfirmation";
import SuccessTimeoutAlert from "../Alerts/SuccessTimeoutAlert";

interface AuthorSectionProps {
    authors: IAuthor[] | null,
    handleSetAuthors: (newAuthors: IAuthor[]) => void
}

const AuthorSection: React.FC<AuthorSectionProps> = ({authors, handleSetAuthors}) => {
    const [newAuthor, setNewAuthor] = useState<IAuthor | null>(null);
    const [showAuthorForm, setShowAuthorForm] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [currentAuthorToBeDeleted, setCurrentAuthorToBeDeleted] = useState<IAuthor | null>(null);

    const onItemDeleted = () => {
        setShowDeleteConfirmation(false);
        setShowSuccessAlert(true);
    }
    const onAuthorDeleteClicked = (authorIndexToBeDeleted: number) => {
        if (!authors) {
            return;
        }
        authors.forEach((author: IAuthor, index) => {
            if (index === authorIndexToBeDeleted) {
                setCurrentAuthorToBeDeleted(author);
            }
        })
        setShowDeleteConfirmation(true);
    }
    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as typeof e.target & {
            authorName: { value: string }
        }
        const authorName = form.authorName.value;
        const author = {authorName: authorName};
        setNewAuthor(author);
    }
    useEffect(() => {
        if(!newAuthor){
            return;
        }
        if(!authors){
            handleSetAuthors([newAuthor]);
        }else{
            handleSetAuthors([...authors,newAuthor]);
        }
    },[newAuthor])


    return (
        <React.Fragment>
            <SectionTitle title={"Authors"}/>
            <Divider/>
            {!authors
                ? <EmptyList sectionTitle={"Author"}/>
                : <List items={authors} onDeleteIconClicked={onAuthorDeleteClicked}/>
            }
            <AddItem title={"Author"} onAddItemClick={setShowAuthorForm}/>
            {showAuthorForm && <AuthorForm onFormClose={setShowAuthorForm} handleOnSubmit={handleOnSubmit}/>}
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
