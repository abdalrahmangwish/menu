import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Roll from "react-reveal/Zoom";

const Category = ({ filterName, categoryList }) => {
  const onFilter = (cat) => {
    filterName(cat);
  };

  console.log(categoryList + "dsasdas");

  return (
    <div>
      <Row>
        <Col sm="12" className="d-flex justify-content-center">
          {categoryList.length ? (
            categoryList.map((categories) => (
              <Roll key={categories}>
                <Button
                  onClick={() => onFilter(categories)}
                  variant="outline-dark"
                  className="mx-2 w-auto text-success border-success"
                >
                  {categories}
                </Button>
              </Roll>
            ))
          ) : (
            <div>لايوجد تصنيفات</div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Category;
