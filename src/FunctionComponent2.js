import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

const FunctionComponent2 = () => {

    //useState : 함수형 컴포넌트에서 사용할 상태 변수와 함수 만들기
    const [idx, setIdx] = useState(0);
  
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{ idx }</h1>
            <button 
                onClick={ () => {
                    setIdx(idx + 1);
                } }>+</button>
            <button 
                onClick={ () => {
                    if (idx === 0) return;
                    setIdx(idx - 1);
                } }>-</button>
        </div>
    );
};

export default FunctionComponent2;