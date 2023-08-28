import { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "react-bootstrap";

// folosim forwardRef pentru a fi folosit ca child component apelat din admin component
// cream niste metode care se vor apela din parent component
// forwardRef returneaza props si reference
// cand flosim forwardRef putem sa folosim useImperativeHandle pt interactiunea cu parent, astfel parintele ppoate sa acceseze metodele
const ProductPopUpDelete = forwardRef((props, ref) => {

    const [show, setShow] = useState(false);

    useImperativeHandle(ref, () => ({

        showDeleteModal() {
            setShow(true);
        }

    }));

    const deleteProduct = () => {
        props.onConfirmed();
        setShow(false);
    };

    return (
        <Modal show={show}>
            <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
            </div>

            <div className="modal-body">
                Are you sure you want to delete the selected product?
            </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={() => deleteProduct()}>Delete</button>
            </div>
            
        </Modal>
    )
});

export {ProductPopUpDelete};