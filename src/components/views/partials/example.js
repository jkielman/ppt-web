import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../../../images/iphone.png';

const Header = () => (
  <div id='Example'>
  <main>
    <div className ='row justify--center'>
      <div className ='five--col'>
        <h1>PPT let’s you share the People, Places & Things you</h1>
      </div>
    </div>
  	<div className ='row justify--center'>
  		<div className ='four--col'>
         <img src={phone} alt={"phone"}/>
  		</div>
    </div>
    <div className ='row'>
  		<div className ='eight--col'>
  			This is the home page.
  		</div>
  		<div className ='four--col'>
  			This is the home page.
  		</div>
    </div>
    <div className ='row justify--center'>
    	<div className ='four--col'>
  			This is the home page.
  		</div>
    </div>
    </main>
  </div>
);

export default Header;
