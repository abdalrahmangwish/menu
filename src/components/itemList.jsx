import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

const ItemList = ({ items }) => {
  return (
    <Row>
      <Zoom>

      {items.length ? (
        items.map((item) => {
          return (
            <Col sm='12' className='mb-3 mt-3' key={item.id}>
              <Card className='d-flex flex-row'>
                <Card.Body className='text-right'>
                  <Card.Title className='d-flex justify-content-between align-items-center'>
                    <div className='item-price'>{item.price}</div>
                    <div className='item-title'>{item.title}</div>
                  </Card.Title>
                  <Card.Text>
                    <div className='item-description'>{item.description} </div>
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  className='d-flex'
                  variant='top'
                  src='ham.png'
                  style={{ width: '200px', height: '200px' }}
                />
              </Card>
            </Col>
          );
        })
      ) : (
        <h3 className='text-center'>لايوجد اصناف</h3>
      )}
      </Zoom>
    </Row>
  );
};

export default ItemList;
