import React from "react";
import Loadable from 'react-loadable';
import Loading from 'src/components/Loading';
import { Link, matchPath, Route } from "react-router-dom";
import eye from 'src/assets/img/icons/eye.png';
import history from 'src/utils/history';

const TripsView = Loadable({
  loader: () => import('src/pages/TripsView'), loading: Loading
});

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
        const match = matchPath(`/trips/view/${cell.postcode}`, {
          path: "/trips/view/:id",
          exact: true,
          strict: false
        });
        console.log('match', match);
        return <Link to={match.url} > Детали</Link>
        // return <Link to={match.url} component={TripsView}> 12345 </
      }
    },

  }];

  export default columns;