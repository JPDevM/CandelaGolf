// Dependences
import React, { Fragment } from 'react'

// Media
import GolfFieldImg from '../images/golfField.png'

const Footer = () => {
  return (
    <Fragment>
      <div className="pt-12">
        <div
          style={{ backgroundImage: `url(${GolfFieldImg})` }}
          className="bg-auto bg-no-repeat bg-left h-80 "
        ></div>
      </div>
    </Fragment>
  );
}
export default Footer