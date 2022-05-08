import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import useFurniture from '../../useFurniture/useFurniture';
import "./Home.css"



const Home = () => {
    const [items]= useFurniture([]);
    
    const furnitureItems =items.slice(0,6);
    const sofa =items.slice(0,3);
    const bed =items.slice(10,13);
    
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
            <h3 className='text-info'>Tv room sofa</h3>
            <p className='text-info'>You surely can’t go wrong with the vintage colors Wallace is providing.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="slider2.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3 className='text-info'>Stylish Drawing sofa</h3>
            <p className='text-info'>The engineered wood which is used in this sofa is considered to be 6 times more durable than the usual one. </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="slider3.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3 className='text-info'>Tiredless chair</h3>
            <p className='text-info'> Besides longevity, lacquer finish makes woods glossier and the coating gives the wood a clean finish without even harming the wood.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            </div>

            <div>
                <div>
                <h1 className='text-center text-info text-success mt-5 p-5'>Items</h1>
                </div>
                <div className='card-allign mt-5 p-5 '>
                    {
                        furnitureItems.map(item=>
                            
                            <div key={item._id}>
                                <Card className='shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.img} />
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    
                                    <Card.Text className=''>{item.details}</Card.Text>
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

                <div className=' mt-2 text-center'>
                    <Link to='/myitems'> <Button>Manage Inventories</Button></Link>
                </div>
                <div>
                    <h1 className='text-center mt-5 p-5 text-success'>All sofa</h1>

                     <div className='card-allign mt-5 p-5'>
                        {
                            sofa.map(sofaItem=>
                                <Card className='mt-2 column gx-5 shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={sofaItem.img} />
                        <Card.Body>
                            <Card.Title>{sofaItem.name}</Card.Title>
                            <Card.Text>
                            Price: {sofaItem.price}
                            </Card.Text>
                           
                        </Card.Body>
                        </Card>)
                        }
                     </div>
                </div>
                <div>
                <h1 className='text-center mt-5 p-5 text-success'>All Bed</h1>
                <div className='card-allign mt-5 p-5'>
                    {bed.map(bedItem=>
                    <Card  className='shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bedItem.img} />
                    <Card.Body>
                        <Card.Title>{bedItem.name}</Card.Title>
                        <Card.Text>
                        Price: {bedItem.price}
                        </Card.Text>
                       
                    </Card.Body>
                    </Card>
                    )
                    }
                   
                </div>
                </div>

            
            
        </div>
    );
};

export default Home;