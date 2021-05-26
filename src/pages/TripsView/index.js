import React from 'react';
import { Card, Col, Row } from 'reactstrap';
import history from 'src/utils/history';

const TripsView = () => {
  // const id = this.props.match.params.id;
  // console.log('id', id);
  console.log('history', history);
  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <p>TripsView page</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default TripsView;
