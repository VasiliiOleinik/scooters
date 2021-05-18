import React, { useEffect } from 'react';
import { Card, Col, Row } from 'reactstrap';
import TheFooter from 'src/containers/TheFooter';

const Settings = () => {
  
  return (
    <>
      <div className="animated fadeIn">
        <Row>
          <Col>
            <div className="profile-grid d-flex align-items-start fix-view-card">
              <Card className="d-flex align-items-stretch flex-column card card-body w-100  mb-4 inputs-separate needValidateBtnInputs">
                <div className="form-group field-settingstable-prefix required">
                  <label className="control-label" htmlFor="settingstable-prefix">Префикс для названия самоката</label>
                  <input type="text" id="settingstable-prefix" className="form-control" name="SettingsTable[prefix]" value="A" aria-required="true" />
                  <p className="help-block help-block-error"></p>
                </div>
                <div className="form-group field-settingstable-cost_per_minute">
                  <label className="control-label" htmlFor="settingstable-cost_per_minute">Стоимость минуты проката, грн.</label>
                  <input type="text" id="settingstable-cost_per_minute" className="form-control" name="SettingsTable[cost_per_minute]" value="1" />

                  <p className="help-block help-block-error"></p>
                </div>
                <div className="form-group field-settingstable-unlock_cost">
                  <label className="control-label" htmlFor="settingstable-unlock_cost">Стоимость разблоктровки самоката, грн.</label>
                  <input type="text" id="settingstable-unlock_cost" className="form-control" name="SettingsTable[unlock_cost]" value="10" />

                  <p className="help-block help-block-error"></p>
                </div>                            <div className="form-group field-settingstable-free_minutes">
                  <label className="control-label" htmlFor="settingstable-free_minutes">Количество бесплатных минут при первой поездке</label>
                  <input type="text" id="settingstable-free_minutes" className="form-control" name="SettingsTable[free_minutes]" value="10" />

                  <p className="help-block help-block-error"></p>
                </div>                            <div className="form-group field-settingstable-time_limit">
                  <label className="control-label" htmlFor="settingstable-time_limit">Лимит времени для возврата в разрешенную зону, мин.</label>
                  <input type="text" id="settingstable-time_limit" className="form-control" name="SettingsTable[time_limit]" value="5" />

                  <p className="help-block help-block-error"></p>
                </div>                            <div className="form-group field-settingstable-free_minutes_first_ride">
                  <label className="control-label" htmlFor="settingstable-free_minutes_first_ride">Количество бесплатных минут для компесации клиенту</label>
                  <input type="text" id="settingstable-free_minutes_first_ride" className="form-control" name="SettingsTable[free_minutes_first_ride]" value="10" />

                  <p className="help-block help-block-error"></p>
                </div>                            <div className="form-group field-settingstable-referral_bonus">
                  <label className="control-label" htmlFor="settingstable-referral_bonus">Реферальный бонус, мин.</label>
                  <input type="text" id="settingstable-referral_bonus" className="form-control" name="SettingsTable[referral_bonus]" value="15" />

                  <p className="help-block help-block-error"></p>
                </div>                            <div className="form-group field-settingstable-walking_step">
                  <label className="control-label" htmlFor="settingstable-walking_step">Базовый шаг холдирования, грн.</label>
                  <input type="text" id="settingstable-walking_step" className="form-control" name="SettingsTable[walking_step]" value="5" />

                  <p className="help-block help-block-error"></p>
                </div>                            <div className="form-group field-settingstable-response_timer">
                  <label className="control-label" htmlFor="settingstable-response_timer">Таймер ответа самоката о своей текущей позиции, с.</label>
                  <input type="text" id="settingstable-response_timer" className="form-control" name="SettingsTable[response_timer]" />

                  <p className="help-block help-block-error"></p>
                </div>                            <div className="form-group field-settingstable-update_frequency">
                  <label className="control-label" htmlFor="settingstable-update_frequency">Периодичность обновления текущей позиции всех самокатов в приложении, с.</label>
                  <input type="text" id="settingstable-update_frequency" className="form-control" name="SettingsTable[update_frequency]" />

                  <p className="help-block help-block-error"></p>
                </div>                            <div className="form-group field-settingstable-number_of_attempts">
                  <label className="control-label" htmlFor="settingstable-number_of_attempts">Количество попыток отклика для перевода в статус "С повышенным риском".</label>
                  <input type="text" id="settingstable-number_of_attempts" className="form-control" name="SettingsTable[number_of_attempts]" />

                  <p className="help-block help-block-error"></p>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div >
      <TheFooter />
    </>
  );
}

export default Settings;
