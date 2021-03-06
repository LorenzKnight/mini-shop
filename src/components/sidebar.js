import React, { Component } from 'react';
import './css/sidebar.css';

class Sidebar extends Component {

    render() {
        
        return (
            <div className="sidebar">
                <ul>
                    <li><a href="#">Paper clips</a></li>
                    <li><a href="#">Post-it notes</a></li>
                    <li><a href="#">Staples</a></li>
                    <li><a href="#">Hole punches</a></li>
                    <li><a href="#">Binders</a></li>
                    <li><a href="#">Staplers</a></li>
                    <li><a href="#">Laminators</a></li>
                    <li><a href="#">Writing utensils</a></li>
                    <li><a href="#">Paper</a></li>
                    <li><a href="#">Computers</a></li>
                    <li><a href="#">Printers</a></li>
                    <li><a href="#">Fax machines</a></li>
                    <li><a href="#">Photocopiers</a></li>
                    <li><a href="#">Cash registers</a></li>
                    <li><a href="#">Office furniture</a></li>
                    <li><a href="#">Chairs</a></li>
                    <li><a href="#">Cubicles</a></li>
                    <li><a href="#">Filing cabinet</a></li>
                    <li><a href="#">Armoire desks</a></li>
                </ul>
            </div> 
        )
    }
}

export default Sidebar;