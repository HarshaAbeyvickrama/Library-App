import React, {useEffect} from "react";
import SweetAlert from "react-bootstrap-sweetalert";

interface SuccessTimeoutAlertProps {
    show: boolean,
    setShow: (show: boolean) => void,
    itemType: string
}


const SuccessTimeoutAlert: React.FC<SuccessTimeoutAlertProps> = ({itemType, show, setShow}) => {
    useEffect(() => {
        setTimeout(() => {
            console.log("updated")
            setShow(false);
        }, 2000)
    }, [setShow, show])
    return (
        <SweetAlert
            success
            show={show}
            title={"Success"}
            onConfirm={() => {
            }}
            showConfirm={false}
            closeAnim={{name: 'hideSweetAlert', duration: 100}}
        >
            {itemType + " Successfully Deleted!"}
        </SweetAlert>
    );
}

export default SuccessTimeoutAlert;
