import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';

import eye from 'src/assets/img/icons/eye.png';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const doFetch = async () => {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const body = await response.json();
      const contacts = body.results;
      console.log('contacts', contacts);
      setData(contacts);
    };
    doFetch();
  }, []);


  const customTotal = (from, to, size) => (
    <div className="react-bootstrap-table-pagination-total mt-4">
      Всего: <span>{size}</span>
    </div>
  );

  const sizePerPageOptionRenderer = ({
    text,
    page,
    onSizePerPageChange
  }) => (
    <li
      key={text}
      role="presentation"
      className="dropdown-item"
    >
      <a
        href="#"
        tabIndex="-1"
        role="menuitem"
        data-page={page}
        className="d-flex w-100"
        onMouseDown={(e) => {
          e.preventDefault();
          onSizePerPageChange(page);
        }}
      >
        {text}
      </a>
    </li>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 1,
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: '<',
    nextPageText: '>',
    lastPageText: '>>',
    nextPageTitle: '<<',
    prePageTitle: '<',
    firstPageTitle: '>',
    lastPageTitle: '>>',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageOptionRenderer,
    sizePerPageList: [{
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: '25', value: 25
    }, {
      text: '50', value: 50
    }, {
      text: '100', value: 100
    }]
  };

  const columns = [{
    dataField: 'location.street.number',
    text: 'ID пользователя',
    sort: true
  }, {
    dataField: 'name.last',
    text: 'Фамилия',
    sort: true
  }, {
    dataField: 'name.first',
    text: 'Имя',
    sort: true
  }, {
    dataField: 'phone',
    text: 'Телефон',
    sort: true
  },
  {
    dataField: 'gender',
    text: 'Роль',
    sort: true
  },
  {
    dataField: 'nat',
    text: 'Статус',
    sort: true
  },
  {
    dataField: 'registered.date',
    text: 'Дата и время последнего входа',
    sort: true
  },
  {
    dataField: 'location',
    text: 'Действия',
    sort: true,
    formatter: (cell) => {
      console.log('cell', cell);
      if (cell.coordinates) {
        return <a
          href={`http://maps.google.com/maps?q=${cell.coordinates.latitude},${cell.coordinates.longitude}&ll=${cell.coordinates.latitude},${cell.coordinates.longitude}&z=17`}
          target="_blank">
          <img src={eye} alt="" />
        </a>


      }
    },

  }];

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <div className='card p-3 custom-table-wrap text-nowrap table-responsive'>
            <BootstrapTable keyField='location.street.number' data={data} bootstrap4 columns={columns} pagination={paginationFactory(options)} bordered={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
}


export default Users;


