import React from 'react';
import {
  Link
} from "react-router-dom";
function Landing(){
  return (
    <div>
    <Link to='/city-one' >City One</Link>
    <Link to='/city-two'>City Two</Link>
    </div>
    )
};

export default Landing;