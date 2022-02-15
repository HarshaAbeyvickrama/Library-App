import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";

interface DeleteConfirmationProps {
    onDelete: () => void,
    show: boolean,
    setShow: (show:boolean) => void,
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({onDelete , show,setShow}) => {

    return (
        <SweetAlert
            show={show}
            warning
            showCancel
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            title="Are you sure?"
            onConfirm={onDelete}
            onCancel={() => {
                setShow(false);
            }}
        >
            You will not be able to undo this action!
        </SweetAlert>
    );
}

export default DeleteConfirmation;
