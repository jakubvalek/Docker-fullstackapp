import { Component } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";

export class EditCustomerModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        await fetch(process.env.REACT_APP_API_DB + 'customers/' + event.target.customerId.value, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: event.target.customerId.value,
                name: event.target.customerName.value,
                surname: event.target.customerSurname.value,
                age: event.target.customerAge.value
            })
        })
            .then((result) => {
                if (result.ok) {
                    alert("Edit customer - Success!");
                    const { dataCallback } = this.props
                    if (dataCallback !== undefined) {
                        dataCallback(true)
                    }
                }
                else {
                    alert("Edit customer - Failed!");
                }
            })
    }

    render() {
        return (
            <div>
                <Modal{...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit customer window</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="customerId">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" name="customerId" required defaultValue={this.props.custId} disabled />
                                </Form.Group>

                                <Form.Group controlId="customerName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="customerName" required placeholder="Jackie" defaultValue={this.props.custName} />
                                </Form.Group>

                                <Form.Group controlId="customerSurname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control type="text" name="customerSurname" required placeholder="Chan" defaultValue={this.props.custSurname} />
                                </Form.Group>

                                <Form.Group controlId="customerAge">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="number" name="customerAge" required placeholder="60" defaultValue={this.props.custAge} />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Edit customer
                                </Button>
                            </Form>
                        </Col>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}