import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="page-footer btns-wrap d-flex justify-content-end align-items-center w-100">
        <button type="button" className="btn btn-block btn-danger mt-0 needValidateBtn" disabled data-toggle="modal" data-target="#modal-warning">Сохранить</button>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
