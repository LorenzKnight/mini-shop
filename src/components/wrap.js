import React, { Component } from 'react';
import logo from './sysimg/OfficeSupplies.svg';
import cart from './sysimg/cart.png';
import './css/wrap.css';
import Sidebar from './sidebar';
import Recommended from './recommended';
import Foot from './foot';

import paper1 from './img/paper1.jpg';
import paper2 from './img/paper2.jpg';
import paper3 from './img/paper3.jpg';

var ImageURL = [
    paper1,
    paper2,
    paper3
];

class Wrap extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentIndex: 0,
            slideshow: false,
            fullscreen: false
        };
        this.updateImage = this.updateImage.bind(this);

        this.newstate = {
            value: []
        };
        this.handleAddTodoItem = this.handleAddTodoItem.bind(this)

        this.actualheight = {
            height: 0
        };
        this.items = {
            name: 'Paper',
            price: 565,
            oldprice: 670
        }
        this.price = (Math.round(this.items.price * 100) / 100).toFixed(2)
        this.oldprice = (Math.round(670 * 100) / 100).toFixed(2)

        this.current = [
            { name: 'SEK', symbol: 'kr' },
            { name: 'USD', symbol: '$' },
            { name: 'EUR', symbol: '€' }
        ]
    }

    dotHandler = event => {
        var imgIndex = event.target.id;
    
        var slider = document.getElementById('slider-img-container');
        this.left = parseInt(imgIndex) * -60;
        slider.style.left = this.left + 'px';
    
        this.setState({ currentIndex: parseInt(imgIndex) });
    };
    
    updateImage = event => {
        var imgIndex = event.target.id;
        this.setState({ currentIndex: parseInt(imgIndex) });
    };

    handleAddTodoItem() {
        var precio = this.items.price
        this.newstate.value.push(precio)
        this.setState(
        this.newstate
        )
    }

    show() {
        var desc = document.getElementById('details');
        var text = document.getElementById('text').clientHeight + 20
        if(desc.style.height == text + 'px'){
            desc.style.height = '250px';
        }else{
            desc.style.height = text + 'px';
        }
    }

    render() {
        var i = this.state.currentIndex;
        var dotNumbers = Array.from(Array(ImageURL.length).keys());
        const carouselDots = dotNumbers.map((n, index) => (
            <div
            className={[
                'carousel-dot',
                index === this.state.currentIndex ? 'active' : ''
            ].join(' ')}
            key={n}
            id={n}
            onClick={this.dotHandler}
            >
            &#9679;
            </div>
        ));
        const ImgItem = (
            <div className="gallery-img-container">
                <img className="gallery-img" src={ImageURL[i]} />
                <div id="carousel-dot-container">{carouselDots}</div>
            </div>
        );
        var imgId = 0;
    
        const sliderImages = ImageURL.slice(0, 3).map((n, index) => (
            <img
            className={[
                'slider-img',
                index === this.state.currentIndex ? 'active' : ''
            ].join(' ')}
            src={n}
            key={n}
            id={imgId++}
            onClick={this.updateImage}
            />
        ));
    
        var value  = this.newstate.value;
        
        var res = 0;
        for(var i = 0; i < value.length; i++) {
            res += value[i]
        }
        res = (Math.round(res * 100) / 100).toFixed(2);

        return (
            <div>
                <div className='head_wrap'>
                    <div className="head">
                        <div className='hamburger'>
                            <label htmlFor="check">
                                <input type="checkbox" id="check"/> 
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        <div className='logo'>
                            <img src={logo} className='App-logo' alt="logo"/>
                        </div>
                        <div className='search'>
                            <input type="text" id="fname" name="fname" /><button>Search</button>
                        </div>
                        <div className='cart'>
                            <div className='carticon'>
                                <img src={cart} className='App-logo'/>
                                <div className='quantity'>{ value.length }st</div>
                            </div>
                            <div className='total'>
                                <p>{ res } {this.current[0].symbol}</p>
                            </div>
                            <div className='checkout'>
                                <button>check-out</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='container_wrap'>
                    <div className="container">
                        <Sidebar />
                        <div className="content">
                            <div className="product">
                                <div className='product-info-mobile'>
                                    <h2>{this.items.name}</h2>
                                    <div className='price'>
                                        <div className='price-line'>
                                            <div>
                                                <h2>{this.price} {this.current[0].symbol}</h2>
                                                <p>{this.oldprice} {this.current[0].symbol}</p>
                                            </div>
                                            <select name="color" id="color">
                                                <option value="White">White</option>
                                                <option value="Blue">Blue</option>
                                                <option value="Red">Red</option>
                                                <option value="Pink">Pink</option>
                                            </select>
                                        </div>
                                        <div className='price-line'>
                                            <button id="addbuttonmobile" onClick={ this.handleAddTodoItem }>Buy</button>
                                        </div>
                                    </div>
                                </div>
                                <div id='gallery'>
                                    <div id="gallery-container" ref={this.myImage}>
                                        {ImgItem}
                                        <div id="slider-img-container" ref={this.mySlider}>
                                            {sliderImages}
                                        </div>
                                    </div>
                                </div>
                                <div className='description'>
                                    <div className='product-info'>
                                        <h2>{this.items.name}</h2>
                                        <div className='price'>
                                            <div>
                                                <h2>{this.price} {this.current[0].symbol}</h2>
                                                <p>{this.oldprice} {this.current[0].symbol}</p>
                                            </div>
                                            <select name="color" id="color">
                                                <option value="White">White</option>
                                                <option value="Blue">Blue</option>
                                                <option value="Red">Red</option>
                                                <option value="Pink">Pink</option>
                                            </select>
                                            <button className="addbutton" onClick={ this.handleAddTodoItem }>Buy</button>
                                        </div>
                                    </div>
                                    <div id="details">
                                        <div id='text'>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                                            <p>Why do we use it?</p>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                                            <p>Where does it come from?</p>
                                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                                            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                        </div>
                                    </div>
                                    <div className='centralized'>
                                        <button onClick={ this.show }>Read more</button>
                                    </div>
                                </div>
                            </div> 
                            <Recommended />
                        </div> 
                    </div>
                </div>
                <Foot />
            </div>
        )
    }
}

export default Wrap;