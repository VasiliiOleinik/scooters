import React from 'react';
import { Link } from 'react-router-dom';
import {
  CButton,
  CCol,
  CContainer,
  CInputGroup,
  CRow
} from '@coreui/react';

const Page404 = () => {
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You{'\''}re lost.</h4>
              <p className="text-muted float-left">The page you are looking for was not found.</p>
            </div>
            <CInputGroup className="input-prepend d-flex align-items-center justify-content-center">
              <Link to="/dashboard">
                <CButton color="info">Вернуться на главную</CButton>
              </Link>
            </CInputGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Page404;
