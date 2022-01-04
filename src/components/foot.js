import React, { Component } from 'react';
import logo from './sysimg/OfficeSupplies.svg';
import fb from './sysimg/facebook_icon.png';
import tw from './sysimg/twitter_icon.png';
import li from './sysimg/linkedin_icon.png';
import './css/foot.css';


class Foot extends Component {

    render() {
        
        return (
            <div className='foot_wrap'>
                <div className='foot'>
                    <div className='page-desc'>
                        <img src={logo} className='App-logo' alt="logo"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
                    </div>
                    <div className='bestsellers'>
                        <div className='bs-col'>
                            <ul>
                                <li id='f-title1'><h4>Bestsellers</h4></li>
                                <li><a href="#">A4</a></li>
                                <li><a href="#">A5</a></li>
                                <li><a href="#">Pens</a></li>
                                <li><a href="#">Staplers</a></li>
                            </ul>
                        </div>
                        <div className='bs-col'>
                            <ul>
                                <li id='f-title2'><h4></h4></li>
                                <li><a href="#">A4</a></li>
                                <li><a href="#">A5</a></li>
                                <li><a href="#">Pens</a></li>
                                <li><a href="#">Staplers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='social'>
                        <div className='bs-col'>
                            <ul id='nonstyle'>
                                <li id='f-title2'><h4>We're social</h4></li>
                                <li><a href="#"><img src={fb} className='App-logo' alt="logo"/> Facebook</a></li>
                                <li><a href="#"><img src={tw} className='App-logo' alt="logo"/> Twitter</a></li>
                                <li><a href="#"><img src={li} className='App-logo' alt="logo"/> Linked in</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Foot;