import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Divider from "../Common/Divider";
import EmptyList from "../Common/EmptyList";
import List from "../Common/List";
import AddItem from "../Common/AddItem";
import AuthorForm from "./AuthorForm";
import {IAuthor} from "../../types/IAuthor";

const AuthorSection :React.FC = () => {
    const authors: IAuthor[] = [
        {authorName: "Armando Lucas Correa"},
        {authorName: "Jess Kidd"},
        {authorName: "Martha McPhee"},
        {authorName: "Martha McPhee"},
        {authorName: "Megan Miranda"},
    ];
    return(
        <React.Fragment>
            <SectionTitle title={"Authors"}/>
            <Divider/>
            <EmptyList sectionTitle={"Author"}/>
            <List items={authors}/>
            <AddItem title={"book"}/>
            <AuthorForm/>
        </React.Fragment>
    );
}

export default AuthorSection;
