import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import useFurniture from '../../useFurniture/useFurniture';
import Footer from '../Footer/Footer';
import "./Home.css"



const Home = () => {
    const [items]= useFurniture([]);    
    
    const furnitureItems =items.slice(0,6);
    
    const navigate =useNavigate();
   
    
    
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
                <div className='card-allign'>
                    {
                        furnitureItems.map(item=>
                            
                            <div key={item._id}>
                                <Card  style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    
                                    <Card.Text>{item.details}</Card.Text>
                                    <Card.Text>Supplier: {item.supplier}</Card.Text>
                                    <Card.Text className='text-bold'>Quantity: {item.quantity}</Card.Text>
                                    <Card.Text>
                                    Price: {item.price} BDT
                                    </Card.Text>
                                    <Button onClick={()=>navigate(`/items/${item._id}`)} variant="primary">stock update</Button>
                                </Card.Body>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Home;