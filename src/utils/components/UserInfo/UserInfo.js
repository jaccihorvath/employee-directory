import React from 'react';
import API from '../../API';
import Container from '../Container/Container'



class UserInfo extends React.Component {
    state = {
        employees: [{}],
        sorted: [{}],
    };



    componentDidMount() {
        API.getEmployees()
            .then((res) => {
                const employeeArray = res.data.results.map(user => {
                    return {
                        image: user.picture.medium,
                        first: user.name.first,
                        last: user.name.last,
                        email: user.email,
                        phone: user.phone,
                        address: user.location.street.number + " " + user.location.street.name + ", " + user.location.city + ", " + user.location.state + " " + user.location.postcode,
                        age: user.dob.age,
                        id: user.login.uuid
                    };
                });
                console.log(employeeArray);
                this.setState({
                    employees: employeeArray
                })
            });
    }

    sortNames = () => {
        let sorted = this.state.employees.sort((a, b) => {
            let nameA = a.first;
            let nameB = b.first;
            if (nameA < nameB) {
                return 1;
            } else if (nameA > nameB) {
                return -1
            } else {
                return 0
            }
        })
        this.setState({employees: sorted})
    }



    render() {
        return (
            <Container>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={this.sortNames} className="btn btn-success justify-content-md-end">Sort by Name</button>
                </div>
                <thead className="table-light text-center mx-auto">
                <tr>
                    <th className="text-center" scope="col"> </th>
                        <th className="text-center" scope="col">First</th>
                    <th className="text-center" scope="col">Last</th>
                    <th className="text-center" scope="col">Email</th>
                    <th className="text-center" scope="col">Phone</th>
                    <th className="text-center" scope="col">Address</th>
                    
                </tr>
                </thead>

            <tbody className="text-center" sort={this.sortNames}>
                {this.state.employees.map((res, index) => {
                    return (
                        <tr key={res.id}>
                       
                            <td><img src={res.image} className="rounded-circle" alt="headshot" /></td>
                            <td>{res.first}</td>
                            <td>{res.last}</td>
                            <td>{res.email}</td>
                            <td>{res.phone}</td>
                            <td>{res.address}</td>
                           
                        </tr>
                    )
                })}
                </tbody>
                </Container>
        )
    }
}



export default UserInfo;