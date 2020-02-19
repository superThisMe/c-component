import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const FunctionComponent = (props) => {
//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>{ props.name }</h1>
//             <h1>{ props.email }</h1>
//             <h1>{ props.age }</h1>
//         </div>
//     );
// };

// const FunctionComponent = (props) => {
//     const { name, email, age } = props;
//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>{ name }</h1>
//             <h1>{ email }</h1>
//             <h1>{ age }</h1>
//         </div>
//     );
// };

const FunctionComponent = ({ name, email, age }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>[{ name }][{ email }][{ age }]</h1>
        </div>
    );
};

//props의 기본 값 설정
FunctionComponent.defaultProps = {
    name: "Who are you",
    email: "whoareyou@example.com"
}
//props의 자료형 지정 : //string, number, bool, array, func, ...
FunctionComponent.propTypes = {
    name: PropTypes.string,     
    email: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default FunctionComponent;