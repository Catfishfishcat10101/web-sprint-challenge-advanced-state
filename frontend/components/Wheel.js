import React from 'react'
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';
import { connect } from 'react-redux';


export function Wheel(props) {
  const {moveClockwise, moveCounterClockwise, wheel } = props;

  const handleCounterClockwise = () => {
    moveCounterClockwise();
  };

  const handleClockwise = () => {
    moveClockwise();
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    wheel: state.wheel
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveClockwise: () => dispatch(moveClockwise()),
    moveCounterClockwise: () => dispatch(moveCounterClockwise())
  };
};

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);
