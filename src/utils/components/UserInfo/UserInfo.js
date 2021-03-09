import React from 'react';
import API from '../../API';



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


    render() {
        return (
            <tbody className="text-center">
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
        )
    }
}



export default UserInfo;