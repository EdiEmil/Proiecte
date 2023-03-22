import { forwardRef, useEffect, useImperativeHandle, useState } from "react"
import { Modal } from "react-bootstrap";
import Product from '../models/Product';
import ProductService from "../services/ProductService";

const ProductSave = forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        // interactiunea cu parintele
        showProductModal() {
            setShow(true);
        }
    }));

    useEffect(() => {
        setProduct(props.product);

    }, [props.product]);

    const [product, setProduct] = useState(new Product('', '', 0));
    const [errorMessage, setErrorMessage] = useState('');
    const [submited, setSubmited] = useState(false);
    const [show, setShow] = useState(false);

    const saveProduct = (e) => {
        e.preventDefault();

        setSubmited(true);

        if (!product.name || !product.description || !product.price) {
            return;
        }

        ProductService.saveProduct(product).then(response => {
            props.onSaved(response.data);
            setShow(false); // daca se exxecuta cu scucces se inchide fereastra
            setSubmited(false);
        }).catch(err => {
            setErrorMessage('Unexpected error occurred');
            console.log(err);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setProduct((prevState => {
            return {
                ...prevState,
                [name]: value
            };
        }));
    };

    return (
        <Modal show={show}>
            <form onSubmit={(e) => saveProduct(e)} noValidate className={submited ? 'was-validated' : ''}>
                <div className="modal-header">
                    <h5 className="model-title">Product Details</h5>
                    <button type="button" className="btn-close" onClick={() => setShow(false)}></button>
                </div>

                <div className="modal-body">

                    {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                    }

                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="form-control"
                            value={product.name}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Name is required
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea
                            name="description"
                            placeholder="description"
                            className="form-control"
                            value={product.description}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Description is required
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            min="1" // pt nr minim care se poate trece in input
                            step="any" // orice nr se poate trece
                            name="price"
                            placeholder="price"
                            className="form-control"
                            value={product.price}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                        <div className="invalid-feedback">
                            Price is required
                        </div>
                    </div>


                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>Close</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </Modal>
    )


})

export { ProductSave };