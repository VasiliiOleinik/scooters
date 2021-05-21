import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import columns from './tableColumns';
import options from './tableOptions';

import Filter from './Filter';

const Users = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const body = await response.json();
      const contacts = body.results;
      setData(contacts);
    };
    doFetch();
  }, []);


  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Filter />
          <div className='card p-3 custom-table-wrap text-nowrap custom-table-responsive'>
            <BootstrapTable keyField='location.street.number' data={data} bootstrap4 columns={columns} pagination={paginationFactory(options)} bordered={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
}


export default Users;
