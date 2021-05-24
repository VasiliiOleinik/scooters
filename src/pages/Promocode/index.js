import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { Col, Row } from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import columns from './tableColumns';
import options from './tableOptions';

import Filter from './Filter';

const Promocode = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const body = await response.json();
      const contacts = body.results;
      console.log(contacts)
      setData(contacts);
    };
    doFetch();
  }, []);

  useEffect(() => {
    console.log('filteredData', filteredData);
    if (filteredData.length !== 0) {
      sendFilterData();
    }

  }, [filteredData]);

  // При фильтрации запрос на сервак и вывод новых, отфильтрованных данных

  const sendFilterData = useCallback(() => {
    axios({
      method: 'POST',
      url: '/users/send-filter',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'token': window.token
      },
      data: data
    })
      .then(response => {
        setData(response);
      })
      .catch(error => {
        console.log('sendFilterData', error);
      });
  }, [data]);


  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Filter setFilteredData={setFilteredData} />
          <div className='card p-3 custom-table-wrap text-nowrap custom-table-responsive'>
            <BootstrapTable keyField='location.street.number' data={data} bootstrap4 columns={columns} pagination={paginationFactory(options)} bordered={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
}


export default Promocode;
