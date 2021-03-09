import React from 'react';
import Container from '../Container/Container';
import UserInfo from '../UserInfo/UserInfo';




const style = {
    tableStyle: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "80%",
        paddingLeft: "30px",
        paddingRight: "30px"
    }
};


function Table(props) {
    return (
        <Container>
            <div className="justify-content-center mx-auto" style={style.tableStyle}>
            <table className="table table-hover table-responsive align-middle mx-auto">
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


                    <UserInfo />
    

                </table>
                </div>
        </Container>
    )
}

export default Table;