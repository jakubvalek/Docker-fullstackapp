import react, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { AddCustomerModal } from './AddCustomerModal';

export class Customer extends Component {

    constructor(props) {
        super(props);
        this.state = { customers: [], addModalShow:false };
        this._isMounted = false;
    }

    componentWillUnmount(){
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
                this._isMounted && this.setState({ customers: data });
            });
            
        console.log(this.state);
    }

    render() {
        const { customers } = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
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
                                    <td>Edit / Delete</td>
                                </tr>
                            )}
                    </tbody>
                </Table>

                <ButtonToolbar>
                    <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>Add customer</Button>
                    <AddCustomerModal show={this.state.addModalShow} onHide={addModalClose}/>
                </ButtonToolbar>

            </div>
        )
    }



}