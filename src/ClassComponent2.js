import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent2 extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         idx: 0
    //     }
    // }
    state = {
        idx: 0
    };
    render() {   
        const { idx } = this.state;     
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>{ idx }</h1>
                <button 
                    onClick={ () => {
                        this.setState({ idx: idx + 1 })
                    } }>+</button>
                <button 
                    onClick={ () => {
                        if (this.state.idx === 0) return;
                        this.setState({ idx: idx - 1 })
                    } }>-</button>
            </div>
        );
    }

};

export default ClassComponent2;