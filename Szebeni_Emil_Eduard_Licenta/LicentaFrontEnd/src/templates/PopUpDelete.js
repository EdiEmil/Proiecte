import { faL } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "react-bootstrap";

const PopUpDelete = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({
        showPopUpDeleteModal() {
            setShow(true);
        }
    }));

    const deleteRaspuns = () => {
        props.onConfirmed();
        setShow(false);
    };

    return (
        <Modal show={show}>
            <div className="modal-header">
                <h5 className="modal-title">Confirmare</h5>
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
            </div>

            <div className="modal-body">
                Sunteți sigur ca vreți să ștergeți acest răspuns?
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Închide</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteRaspuns()}>Șterge</button>
            </div>
        </Modal>
    )
});

export { PopUpDelete };