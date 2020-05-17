import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import UnitConversionForm from '../components/unit-conversion-form';

const Api = require('../services/api').Api;

const  MainPageLayout = () => {
  return (
      <Container fluid>
        <Row>
          <Col md={12}><h1>Unit Conversion Assignment</h1></Col>
        </Row>
        <Row>
          <Col md={12}>
            <UnitConversionForm api={Api}/>
          </Col>
        </Row>
      </Container>
  );
}

export default MainPageLayout;
