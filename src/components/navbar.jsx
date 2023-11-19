import React, { useState } from 'react';
import { Button, Nav, Row } from 'react-bootstrap';

const Navbar = ({ searchItem }) => {
  const [searchValue, setSearch] = useState('');

  const onSearch = (e) => {
    e.preventDefault();
    searchItem(searchValue);
  };

  return (
    <div>
      <Row>
        <Nav
          className='bg-dark navbar navbar-expand-lg bg-body-dark px-0'
          expand='lg'
        >
          <div className='container-fluid'>
            <form className='d-flex' role='search'>
              <Button
                variant='outline-secondary'
                className='mx-2 w-auto text-success border-success'
                type='submit'
                onClick={onSearch}
              >
                بحث
              </Button>

              <input
                className='form-control me-2 text-end'
                type='search'
                placeholder='..ابحث'
                aria-label='ابحث'
                onChange={(e) => setSearch(e.target.value)}
                value={searchValue}
              />
            </form>
          </div>
        </Nav>
      </Row>
    </div>
  );
};

export default Navbar;
