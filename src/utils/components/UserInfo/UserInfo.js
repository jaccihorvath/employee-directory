import React from 'react';
import API from '../../API';
import Container from '../Container/Container'


const style = {
    button1: {
        marginRight: "10px",
        marginBottom: "20px"
    },
    button2: {
        marginBottom: "20px"
    }
};


class UserInfo extends React.Component {
    state = {
        employees: [{}],
        sorted: [{}],
        unsorted: [{}]
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
                        id: user.login.uuid,
                        country: user.location.country,
                        gender: user.gender
                    };
                });
                console.log(res.data.results)
                console.log(employeeArray);
                this.setState({
                    employees: employeeArray,
                    unsorted: employeeArray,
                })
            });
    }

    sortNames = () => {
        let sorted = this.state.employees.sort((a, b) => {
            let nameA = a.last;
            let nameB = b.last;
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

    sortNamesZ = () => {
        let sorted = this.state.employees.sort((a, b) => {
            let nameA = a.last;
            let nameB = b.last;
            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1
            } else {
                return 0
            }
        })
        this.setState({employees: sorted})
    }

    usOnly = () => {
        let filtered = this.state.employees.filter(employee => {return employee.country === 'United States'})
        console.log(filtered)
        this.setState({ employees: filtered }) 
        
    }

    clearFilters = () => {
        const original = this.state.unsorted;
        this.setState({employees: original})
    }



    render() {
        return (
            <Container>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button onClick={this.usOnly} className="btn btn-sm btn-info justify-content-md-end me-md-2" style={style.button1}>US only</button>
                    <button onClick={this.sortNamesZ} className="btn btn-sm btn-info justify-content-md-end me-md-2" style={style.button1}>Sort (A-Z)</button>
                    <button onClick={this.sortNames} className="btn btn-sm btn-info justify-content-md-end" style={style.button1}>Sort (Z-A)</button>
                    <button onClick={this.clearFilters} className="btn btn-sm btn-success justify-content-md-end me-md-2" style={style.button2}>Reset</button>
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