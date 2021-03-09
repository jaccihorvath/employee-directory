import React from 'react';

const style = {
    titleStyle: {
        width: "100%",
        paddingLeft: "30px",
        paddingRight: "30px",
        background: "#645865"
    },
    h1: {
        fontSize: "60px",
        color: "white",
        padding: "50px"
    }
};

function Title() {
    return (
        <div className="text-center bg-dark">
            <h1 style={style.h1}>Employee Directory</h1>
        </div>
    )
}

export default Title;