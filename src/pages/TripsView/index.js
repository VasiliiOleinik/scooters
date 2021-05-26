import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import history from 'src/utils/history';

import { Card, Col, Row } from 'reactstrap';
import {
  CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react'


const TripsView = () => {
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

  if (!data) return null;
  return (
    <div className="animated fadeIn">
      <Row>
        <Col >
          <CButton
            className="btn btn-default mb-3 d-flex align-items-center justify-content-center mr-auto w-100px h-40px"
            onClick={() => history.goBack()}
          >
            <CIcon name="cil-chevron-left" className="mfe-2" />
          </CButton>
          <div className="profile-grid d-flex align-items-startd">
            <div className="d-flex align-items-start flex-column fix-view-card">
              <div className="d-flex align-items-stretch flex-column card card-body w-100  mb-4 inputs-separate">
                <div className="form-group disabled">
                  <label className="control-label">Самокат:</label>
                  <Link to={`/transport/view/1`}>
                    <input type="text" className="form-control readonly" readOnly="" value={`0004`} />
                  </Link>
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Клиент:</label>
                  <Link to="/clients/view/id/74">
                    <input type="text" className="form-control readonly" readOnly="" value="Tester Alokon " />
                  </Link>
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Телефон клиента:</label>
                  <input type="text" className="form-control readonly" readOnly="" value="380981053609" />
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Дата и время старта:</label>
                  <input type="text" className="form-control readonly" readOnly="" value="24.05.2021 12:30:19" />
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Дата и время завершения:</label>
                  <input type="text" className="form-control readonly" readOnly="" value="24.05.2021 12:30:44" />
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Продолжительность:</label>
                  <input type="text" className="form-control readonly" readOnly="" value="1 мин" />
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Расстояние:</label>
                  <input type="text" className="form-control readonly" readOnly="" value="-- " />
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Статус поездки:</label>
                  <input type="text" className="form-control readonly" readOnly="" value="Завершена" />
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Сумма:</label>
                  <input type="text" className="form-control readonly" readOnly="" value="30 грн " />
                </div>
                <div className="form-group disabled">
                  <label className="control-label">Статус оплаты:</label>
                  <input type="text" className="form-control readonly" readOnly="" value="Оплачено" />
                </div>
              </div>
            </div>
            <div className="fix-view-card profile-photo-card d-flex align-items-start justify-content-start flex-column ml-5 pt-2 pl-2">
              <label class="control-label mb-1">Фото:</label>
              <img class="avatar" width="200" height="200" src="/uploads/scooter/image/4351ff12eab853dbb26bfe3dc88284f3.jpg" alt="альтернативный текст"></img>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TripsView;
