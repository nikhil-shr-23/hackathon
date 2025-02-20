import React from 'react';
import './ScrollingFooter.css';
import a from '../images/ScrollImages/1.png'
import b from '../images/ScrollImages/2.png'
import c from '../images/ScrollImages/3.png';
import d from '../images/ScrollImages/4.png';
import e from '../images/ScrollImages/5.png';
import f from '../images/ScrollImages/6.png';
import g from '../images/ScrollImages/7.png';

const ScrollingFooter = () => {
  return (
    <footer className="scrolling-footer">
      <div className="scroll-container">
        <div className="scroll-content">


          <div className="item"><img src={a} alt="" /></div>
          <div className="item"><img src={b} alt="" /></div>
          <div className="item"><img src={c} alt="" /></div>
          <div className="item"><img src={d} alt="" /></div>
          <div className="item"><img src={e} alt="" /></div>
          <div className="item"><img src={f} alt="" /></div>
          <div className="item"><img src={g} alt="" /></div>
          
          {/* Add more items as needed */}
        </div>
      </div>
    </footer>
  );
};

export default ScrollingFooter;