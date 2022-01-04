import React, { Component } from 'react';
import './css/recommended.css';

import inspiration1 from './img/inspiracion1.jpg';
import inspiration2 from './img/inspiracion2.jpg';
import inspiration3 from './img/inspiracion3.jpg';


class Recommended extends Component {

    render() {
        
        return (
            <div className="recommended">
                <div className='inspiration'>
                    <img src={inspiration1} className='App-logo' alt="paper"/>
                    <div className='recommended-desc'>
                        <h4>Paper is awesome!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
                    </div>
                </div>
                <div className='inspiration'>
                    <img src={inspiration2} className='App-logo' alt="paper"/>
                    <div className='recommended-desc'>
                        <h4>Paper is awesome!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                    </div>
                </div>
                <div className='inspiration'>
                    <img src={inspiration3} className='App-logo' alt="paper"/>
                    <div className='recommended-desc'>
                        <h4>Paper is awesome!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet la.</p>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Recommended;