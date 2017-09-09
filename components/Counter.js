import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render () {
        return(
            <h1> VALUE: { this.props.value } </h1>
        );
    }
}
// store의 state를 컴포넌트의 props에 매핑시켜준다.
// ownProps인수가 명시될 경우, 이를 통해 함수 내부에서 컴포넌트의 props값에 접근이 가능하다.
let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;