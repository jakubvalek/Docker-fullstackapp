import { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

export class AddCustomerModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        await fetch(process.env.REACT_APP_API_DB + 'customers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.customerName.value,
                surname: event.target.customerSurname.value,
                age: event.target.customerAge.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert("Add customer - Success!");
            },
                (error) => {
                    alert("Add customer - Failed!");
                });
    }

    render() {
        return (
            <div>
                <Modal{...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Add customer window</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Col sm={6}>
                            <Form id="add-customer-form" onSubmit={this.handleSubmit}> 
                                <Form.Group controlId="customerName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="customerName" required placeholder="Jackie" />
                                </Form.Group>

                                <Form.Group controlId="customerSurname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control type="text" name="customerSurname" required placeholder="Chan" />
                                </Form.Group>

                                <Form.Group controlId="customerAge">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="number" name="customerAge" required placeholder="60" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button form="add-customer-form" variant="primary" type="submit">Add customer</Button>
                        <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}