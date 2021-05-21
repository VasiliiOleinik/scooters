import eye from 'src/assets/img/icons/eye.png';

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
    sort: false,
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

  export default columns;