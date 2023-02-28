import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [randomProductId, setRandomProductId] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  const randomize = () => {
    const randomProductId = Math.floor(Math.random() * products.length) + 1;
    setRandomProductId(randomProductId);
    setShowAllProducts(false);
  };


  const filteredProducts = randomProductId
    ? products.filter((product) => product.id === randomProductId)
    : products;

  return (
    <div className="App vh-100" >
      <div className="container ">
         <div class="row">
    <div class="col-md-6 mx-auto"></div>
        
       
        <Button
          className="fw-bold text-uppercase rounded me-3 btn-primary m-2 mt-3 btn-lg"
          variant="primary"
          onClick={randomize}
        >
          Get a random Product
        </Button>

        <div className="row justify-content-center">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-4">
              <Card className="h-100 shadow-sm bg-white rounded">
                <Card.Img variant="top" className='m-2' src={product.thumbnail} />
                 <h2 class="card-title text-center m-3 fw-bolder">{product.title}</h2>
                <Card.Body className="d-flex flex-column">
                  <Card.Text className="text-secondary fw-bolder">
                    {product.description}
                  </Card.Text>
                 
                  <Card.Text className=' justify-content-between '>Special-Price: {product.price}</Card.Text>
                  <Card.Text>Rating: {product.rating}</Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
          ))}


        

        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
