import React from 'react';

function Container(props) {
    return <div className="container-fluid mx-auto" style={props.style}>{props.children}</div>
}

export default Container;