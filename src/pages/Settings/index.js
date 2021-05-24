import React, { useState, useCallback } from 'react';
import { 
  Card, 
  Col, 
  Row, 
  Form,
  Button} from 'reactstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import TheFooter from './TheFooter';
import AccessModal from './AccessModal';
import { FormInput } from 'src/components';


const regex = /[A-Za-z]/;

const LoginSchema = Yup.object().shape({
  prefix: Yup.string()
    .min(1, 'Значение должно состоять из 1-й, 2-х, или 3-х букв латинского алфавита')
    .max(3, 'Значение должно состоять из 1-й, 2-х, или 3-х букв латинского алфавита')
    .matches(regex, 'Значение должно состоять из 1-й, 2-х, или 3-х букв латинского алфавита'),
  cost_per_minute: Yup.string()
    .min(6, 'Пароль слишком короткий')
    .max(50, 'Пароль слишком длинный')
    .required('Обязательно к заполнению')
});

const Settings = ({ error, isLoading, handleLogin }) => {

  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const toggle = () => setModal(!modal);

  const handleSubmit = values => {
    console.log('values', values);
    setData(values);
  };

    // При фильтрации запрос на сервак и вывод новых, отфильтрованных данных

    const sendFilterData = useCallback((values) => {
      setModal(!modal);
      axios({
        method: 'POST',
        url: '/settings/change-setting',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          'token': window.token
        },
        data: values
      })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log('sendFilterData', error);
        });
    }, []);

  return (
    <>
      <div className="animated fadeIn">
        <Row>
          <Col>
            <div className="profile-grid d-flex align-items-start fix-view-card">
              <Card className="d-flex align-items-stretch flex-column card card-body w-100  mb-4 inputs-separate needValidateBtnInputs">
                <Formik
                  validationSchema={LoginSchema}
                  initialValues={{
                    prefix: 'A',
                    cost_per_minute: '1',
                    unlock_cost: '10',
                    free_minutes: '10',
                    time_limit: '5',
                    first_ride: '10',
                    referral_bonus: '15',
                    walking_step: '5',
                    response_timer: '',
                    update_frequency: '',
                    number_of_attempts: ''
                  }}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    touched
                  }) => (
                    <Form onSubmit={handleSubmit} id="settings-form">
                      <div className="form-group field-settingstable-prefix required">
                        <label className="control-label" htmlFor="settingstable-prefix">Префикс для названия самоката</label>
                        <FormInput
                          id="settingstable-prefix"
                          name="SettingsTable[prefix]"
                          fieldKey="prefix"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="prefix"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-cost_per_minute">
                        <label className="control-label" htmlFor="settingstable-cost_per_minute">Стоимость минуты проката, грн.</label>
                        <FormInput
                          id="settingstable-cost_per_minute"
                          name="SettingsTable[cost_per_minute]"
                          fieldKey="cost_per_minute"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="cost_per_minute"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-unlock_cost">
                        <label className="control-label" htmlFor="settingstable-unlock_cost">Стоимость разблоктровки самоката, грн.</label>
                        <FormInput
                          id="settingstable-unlock_cost"
                          name="SettingsTable[unlock_cost]"
                          fieldKey="unlock_cost"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="unlock_cost"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-free_minutes">
                        <label className="control-label" htmlFor="settingstable-free_minutes">Количество бесплатных минут при первой поездке</label>
                        <FormInput
                          id="settingstable-free_minutes"
                          name="SettingsTable[free_minutes]"
                          fieldKey="free_minutes"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="free_minutes"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-time_limit">
                        <label className="control-label" htmlFor="settingstable-time_limit">Лимит времени для возврата в разрешенную зону, мин.</label>
                        <FormInput
                          id="settingstable-time_limit"
                          name="SettingsTable[time_limit]"
                          fieldKey="time_limit"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="time_limit"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-free_minutes_first_ride">
                        <label className="control-label" htmlFor="settingstable-free_minutes_first_ride">Количество бесплатных минут для компесации клиенту</label>
                        <FormInput
                          id="settingstable-free_minutes_first_ride"
                          name="SettingsTable[free_minutes_first_ride]"
                          fieldKey="first_ride"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="first_ride"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-referral_bonus">
                        <label className="control-label" htmlFor="settingstable-referral_bonus">Реферальный бонус, мин.</label>
                        <FormInput
                          id="settingstable-referral_bonus"
                          name="SettingsTable[referral_bonus]"
                          fieldKey="referral_bonus"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="referral_bonus"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-walking_step">
                        <label className="control-label" htmlFor="settingstable-walking_step">Базовый шаг холдирования, грн.</label>
                        <FormInput
                          id="settingstable-walking_step"
                          name="SettingsTable[walking_step]"
                          fieldKey="walking_step"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="walking_step"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-response_timer">
                        <label className="control-label" htmlFor="settingstable-response_timer">Таймер ответа самоката о своей текущей позиции, с.</label>
                        <FormInput
                          id="settingstable-response_timer"
                          name="SettingsTable[response_timer]"
                          fieldKey="response_timer"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="response_timer"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-update_frequency">
                        <label className="control-label" htmlFor="settingstable-update_frequency">Периодичность обновления текущей позиции всех самокатов в приложении, с.</label>
                        <FormInput
                          id="settingstable-update_frequency"
                          name="SettingsTable[update_frequency]"
                          fieldKey="update_frequency"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="update_frequency"
                          addRowClass="mb-2"
                        />
                      </div>
                      <div className="form-group field-settingstable-number_of_attempts">
                        <label className="control-label" htmlFor="settingstable-number_of_attempts">Количество попыток отклика для перевода в статус "С повышенным риском".</label>
                        <FormInput
                          id="settingstable-number_of_attempts"
                          name="SettingsTable[number_of_attempts]"
                          fieldKey="number_of_attempts"
                          handleBlur={handleBlur}
                          handleChange={handleChange}
                          values={values}
                          errors={errors}
                          touched={touched}
                          isLoading={isLoading}
                          type="text"
                          autoComplete="number_of_attempts"
                          addRowClass="mb-2"
                        />
                      </div>
                      <AccessModal toggle={toggle} modal={modal} sendFilterData={sendFilterData} data={data}/>
                    </Form>
                  )}
                </Formik>
              </Card>
            </div>
          </Col>
        </Row>
      </div >
      <TheFooter toggle={toggle} />
    </>
  );
}

export default Settings;
