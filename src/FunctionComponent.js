import React from 'react';
import PropTypes from 'prop-types';

const FunctionComponent = (props) => {

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{ props.name }</h1>
            <h1>{ props.email }</h1>
            <h1>{ props.age }</h1>
        </div>
    );

};

// props의 기본 값 설정
FunctionComponent.defaultProps = {
    name: "NoName",
    email: "NoName@example.com"
}

// props의 자료형 지정: string, number, bool, array, func, ...
FunctionComponent.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default FunctionComponent;