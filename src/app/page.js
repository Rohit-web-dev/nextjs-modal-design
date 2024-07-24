"use client";
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data/products'; // Import the data
import ProductModal from '@/components/ProductModal';

export default function Home() {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className='cus-card'>
        <Card style={{ width: '26rem' }}>
          <Card.Img variant="top" src={data[0]?.image[0]} />
          <Card.Body>
            <Card.Title>{data[0]?.title}</Card.Title>
            <Card.Text>
              {data[0]?.description}
            </Card.Text>
            <Button className='button-view' onClick={() => handleShow(data[0])}>
              View More
            </Button>
          </Card.Body>
        </Card>
      </div>




      {selectedProduct && (
        <ProductModal show={show} handleClose={handleClose} data={selectedProduct} />
      )}
    </>
  );
}
