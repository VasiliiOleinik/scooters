import React from "react";
import { Switch, Route, Link, matchPath } from "react-router-dom";
import eye from 'src/assets/img/icons/eye.png';

const columns = [{
    dataField: 'location.street.number',
    text: 'ID поездки',
    sort: true
  }, {
    dataField: 'cell',
    text: 'ID клиента',
    sort: true
  }, {
    dataField: 'picture',
    text: 'Изображение',
    sort: true,
    formatter: (cell) => {
      if (cell.large) {
        return <a href={cell.large} target="_blank">{cell.large}</a>
      }
    },
  }, {
    dataField: 'id.value',
    text: 'ID самоката',
    sort: true
  },
  {
    dataField: 'phone',
    text: 'Телефон клиента',
    sort: true
  },
  {
    dataField: 'login.salt',
    text: 'Самокат',
    sort: true
  },
  {
    dataField: 'location.timezone.offset',
    text: 'Продолжительность',
    sort: true
  },
  {
    dataField: 'location.postcode',
    text: 'Расстояние',
    sort: true
  },
  {
    dataField: 'nat',
    text: 'Статус',
    sort: true
  },
  {
    dataField: 'registered.date',
    text: 'Дата и время старта',
    sort: true
  },
  {
    dataField: 'registered.date',
    text: 'Дата и время завершения',
    sort: true
  },
  
  {
    dataField: 'location',
    text: 'Действия',
    sort: false,
    formatter: (cell) => {
      if (cell.coordinates) {
        return <Link to={`trips/view:${cell.street.number} `}>Детали</Link>
      }
    },

  }];

  export default columns;