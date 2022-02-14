import React, {useState} from "react";
import SweetAlert from "react-bootstrap-sweetalert";

interface DeleteConfirmationProps {
    onDelete: () => void,
    show: boolean
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({onDelete , show}) => {

    return (
        <SweetAlert
            show={!show}
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={onDelete}
            onCancel={onDelete}
        >
            You will not be able to recover this imaginary file!
        </SweetAlert>
    );
}

export default DeleteConfirmation;
