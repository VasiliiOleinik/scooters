import React from 'react'
import { CFooter } from '@coreui/react';
import history from 'src/utils/history';

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="page-footer btns-wrap d-flex justify-content-end align-items-center w-100">
        <button className="btn btn-block btn-default mr-4" onClick={() => history.goBack()}>Отменить</button>
        <button form='users-create-form' type="submit" className="btn btn-block btn-danger mt-0 needValidateBtn" >Сохранить</button>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
