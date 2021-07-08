import { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { AddCustomerModal } from './AddCustomerModal';
import { EditCustomerModal } from './EditCustomerModal';

export class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = { customers: [], addModalShow: false, editModalShow: false, refreshAfterUpdate: false };
        this._isMounted = false;
        this.handleCallback = this.handleCallback.bind(this)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        this.refreshList();
    }

    async refreshList() {
        await fetch(process.env.REACT_APP_API_DB + 'customers')
            .then(response => response.json())
            .then(data => {
                this._isMounted && this.setState({ customers: data, refreshAfterUpdate: false });
            })
        console.log(this.state);
    }

    handleCallback(value) {
        this.setState({ refreshAfterUpdate: value })
    }

    async deleteCustomer(custId, custName, custSurname) {
        if (window.confirm('Do you really want to delete a customer named: ' + custName + " " + custSurname + ' ?')) {
            await fetch(process.env.REACT_APP_API_DB + 'customers/' + custId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            this.refreshList()
        }
    }

    render() {
        const { customers, custId, custName, custSurname, custAge } = this.state;
        let addModalClose = () => {
            this.setState({ addModalShow: false })
            if (this.state.refreshAfterUpdate) {
                this.refreshList()
            }
        }
        let editModalClose = () => {
            this.setState({ editModalShow: false })
            if (this.state.refreshAfterUpdate) {
                this.refreshList()
            }
        }
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(cust =>
                                <tr key={cust.id}>
                                    <td>{cust.id}</td>
                                    <td>{cust.name}</td>
                                    <td>{cust.surname}</td>
                                    <td>{cust.age}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button classname="mr-2" variant="info"
                                                onClick=
                                                {() => this.setState({
                                                    editModalShow: true,
                                                    refreshAfterUpdate: false,
                                                    custId: cust.id,
                                                    custName: cust.name,
                                                    custSurname: cust.surname,
                                                    custAge: cust.age
                                                })
                                                }>
                                                Edit
                                            </Button>
                                            <EditCustomerModal show={this.state.editModalShow} onHide={editModalClose}
                                                custId={custId}
                                                custName={custName}
                                                custSurname={custSurname}
                                                custAge={custAge} 
                                                dataCallback={this.handleCallback}/>

                                            <Button className="mr-2" variant="danger" onClick={() => this.deleteCustomer(cust.id, cust.name, cust.surname)}>Delete</Button>
                                        </ButtonToolbar>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary' onClick={() => this.setState({ addModalShow: true, refreshAfterUpdate: false })}>Add customer</Button>
                    <AddCustomerModal show={this.state.addModalShow} onHide={addModalClose} dataCallback={this.handleCallback} />
                </ButtonToolbar>

            </div>
        )
    }



}