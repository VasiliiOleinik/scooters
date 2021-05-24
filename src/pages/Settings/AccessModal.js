import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

const AccessModal = (props) => {
  const {
    className,
    modal,
    toggle,
    sendFilterData,
    data
  } = props;

  return (
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          Сохранить внесенные изменения?
        </ModalBody>
        <ModalFooter>
          
          <Button className="btn btn-block btn-default mr-4 w-100px " onClick={toggle}>Нет</Button>
          <Button className="btn btn-block btn-danger mt-0 w-100px " onClick={() => sendFilterData(data)}>Да</Button>
        </ModalFooter>
      </Modal>
  );
}

export default AccessModal;