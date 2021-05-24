import React from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CCol,
  CContainer,
  CInputGroup,
  CRow
} from '@coreui/react';

import history from 'src/utils/history';

const Page404 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Дружище, извини, но мы не смогли найти эту страницу…</h4>
            </div>
            <CInputGroup className="input-prepend d-flex align-items-center justify-content-center">
              <CButton color="danger" onClick={() => history.goBack()}>Вернуться назад</CButton>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404;
