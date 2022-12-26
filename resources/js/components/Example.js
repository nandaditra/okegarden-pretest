import React from 'react';
import ReactDOM from 'react-dom';
import 'flowbite';
import Main from "./Main"

function Example() {
    return (
        <Main/>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
