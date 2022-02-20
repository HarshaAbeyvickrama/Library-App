import React from "react";
import { Container } from "react-bootstrap";
import './listItem.scss';
import { Edit, Trash2 } from 'react-feather';

const ListItem: React.FC = () => {
    return(
        <Container className="list-item px-0" fluid={true} >
            <p>List Item<Edit color='hsl(35deg 92% 56%)' size="20" className="btn-Edit"/><Trash2 color='hsl(353deg 47% 49%)' size="20" className="btn-Delete"/></p>
            
        </Container>
    );
}

export default ListItem;