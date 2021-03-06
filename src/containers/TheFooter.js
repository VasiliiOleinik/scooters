import React from 'react'
import { CFooter } from '@coreui/react'
import {
  Button,
} from 'reactstrap';

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="page-footer btns-wrap d-flex justify-content-end align-items-center w-100">
        <Button type="submit" className="btn btn-block btn-danger mt-0 needValidateBtn" data-toggle="modal" data-target="#modal-warning">Сохранить</Button>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
