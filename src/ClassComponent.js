import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {

    //props의 기본 값 설정
    static defaultProps = {
        name: "Who are you",
        email: "whoareyou@example.com"
    }
    //props의 자료형 지정 : //string, number, bool, array, func, ...
    static propTypes = {
        name: PropTypes.string,     
        email: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    // render() {
    //     const props = this.props;
    //     return (
    //         <div style={{ textAlign: 'center' }}>
    //             <h1>{ props.name }</h1>
    //             <h1>{ props.email }</h1>
    //             <h1>{ props.age }</h1>
    //         </div>
    //     );
    // }

    render() {
        const { name, email, age } = this.props;
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>[{ name }][{ email }][{ age }]</h1>
            </div>
        );
    }

};

export default ClassComponent;