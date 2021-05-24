import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Col, Row, Collapse } from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import columns from './tableColumns';
import options from './tableOptions';

import Filter from './Filter';

const Security = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hightRisk, setHightRisk] = useState(false);
  const [outZone, setOutZone] = useState(false);

  const securityHightRisk = [
    {
      name: 'A00001',
      removeId: '383',
      lat: '30.49256',
      lon: '50.445425',
      eventsId: '1'
    },
    {
      name: 'A00002',
      removeId: '384',
      lat: '30.49256',
      lon: '50.445425',
      eventsId: '2'
    }
  ];
  const securityOutZone = [
    {
      name: 'A00001',
      lat: '30.49256',
      lon: '50.445425',
      eventsId: '1'
    },
    {
      name: 'A00002',
      lat: '30.49256',
      lon: '50.445425',
      eventsId: '2'
    }
  ];


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
          <div className="security-grid d-flex">
            <div className="security-grid-main w-100 mr-4">
              <div className='card p-3 custom-table-wrap text-nowrap custom-table-responsive'>
                <BootstrapTable keyField='location.street.number' data={data} bootstrap4 columns={columns} pagination={paginationFactory(options)} bordered={false} />
              </div>
            </div>
            <div className="security-grid-side d-flex flex-column flex-grow-1">
              <div className="card mb-3 p-3">
                <h2 onClick={() => setHightRisk(!hightRisk)}>Транспорт с повышенным риском <br></br>  <span>147</span> </h2>
                <Collapse isOpen={hightRisk}>
                  <div className="d-flex flex-column security-grid-table w-100">

                    {
                      securityHightRisk.map(item => {
                        return (
                          <div className="d-flex w-100 security-grid-row justify-content-between">
                            <div className="security-grid-cell d-flex align-items-center justify-content-center p-2">{item.name}</div>
                            <div className="security-grid-cell d-flex align-items-center justify-content-center p-2">
                              <Link to={`/remove-risky-scooter/id/${item.removeId}`} className="btn btn-block btn-default mt-0 d-flex align-items-center justify-content-center">Сбросить</Link>
                            </div>
                            <div className="security-grid-cell d-flex align-items-center justify-content-center p-2">
                              <a className="simple-link" target="_blank" href={`https://www.google.com/maps/place/${item.lat},${item.lon}`}>Местоположение</a>
                            </div>
                            <div class="security-grid-cell d-flex align-items-center justify-content-center p-2">
                              <Link class="simple-link" target="_blank" to={`/events/id/${item.eventsId}`}>События</Link>
                            </div>
                          </div>
                        )
                      })
                    }
                    <Link to="/alarm-scooters" className="btn d-flex align-items-center justify-content-center btn-danger mt-3 ml-auto">Все</Link>
                  </div>
                </Collapse>
              </div>
              <div className="card p-3">
                <h2 onClick={() => setOutZone(!outZone)}>Транспорт вне зоны  <br></br> <span> 239</span> </h2>
                <Collapse isOpen={outZone}>
                  <div className="d-flex flex-column security-grid-table w-100">

                    {
                      securityOutZone.map(item => {
                        return (
                          <div className="d-flex w-100 security-grid-row justify-content-between">
                            <div className="security-grid-cell d-flex align-items-center justify-content-center p-2">{item.name}</div>
                            <div className="security-grid-cell d-flex align-items-center justify-content-center p-2">
                              <a className="simple-link" target="_blank" href={`https://www.google.com/maps/place/${item.lat},${item.lon}`}>Местоположение</a>
                            </div>
                            <div class="security-grid-cell d-flex align-items-center justify-content-center p-2">
                              <Link class="simple-link" target="_blank" to={`/events/id/${item.eventsId}`}>События</Link>
                            </div>
                          </div>
                        )
                      })
                    }
                    <Link to="/outside" className="btn d-flex align-items-center justify-content-center btn-danger mt-3 ml-auto">Все</Link>
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div >
  );
}


export default Security;
