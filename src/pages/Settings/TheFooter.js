import React, { useCallback } from 'react'
import { CFooter } from '@coreui/react'
import {
  Button,
} from 'reactstrap';

const TheFooter = (props) => {
  const { toggle } = props;
  return (
    <CFooter fixed={false}>
      <div className="page-footer btns-wrap d-flex justify-content-end align-items-center w-100">
        <button form='settings-form' type="submit" className="btn btn-block btn-danger mt-0 needValidateBtn" onClick={toggle}>Сохранить</button>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
