import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition'

import './Modal.css';

// instead of set timeout={300} for example, so a fixed value for entering and exiting we can,
// with this syntax, define a timing for entering and a timing for exiting.
const animationTiming = {
  enter: 400,
  exit: 1000,
}

const modal = (props) => {

  return(
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: '',
        enterActive: 'ModalOpen',
        exit: '',
        exitActive:'ModalClosed',
        // Appear and appear active are OPTIONAL and this css classes are used when
        // the element is hardcoded, is not conditionally rendered and appear/is mounted for the first time into the DOM.
        appear: '',
        appearActive: '',
      }}
      mountOnEnter
      unmountOnExit
      >
      <div className='Modal'>
          <h1>A Modal</h1>
          <button className="Button" onClick={props.closed}>Dismiss</button>
      </div>
    </CSSTransition>
  )
};

export default modal;
