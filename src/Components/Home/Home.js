import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import useFurniture from '../../useFurniture/useFurniture';

const Home = () => {
    const [items, setItems]= useFurniture([])
    console.log(items);
    return (
        <div>
            <div>
            <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="slider1.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="slider2.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="slider3.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            </div>

            <div>
                <div>
                <h1 className='text-center text-info'>Items</h1>
                </div>
                <div>
                    {
                        items.map(item=>(
                            <h1>name:{item.name}</h1>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Home;