import React, { useState } from 'react';
import { Formik } from 'formik';

// import * as Yup from 'yup';
import {
    Form,
    Label,
    Button,
    Input
} from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



import { FormInput } from 'src/components';


const statusOptions = [
    { value: "-- Все --", label: '-- Все --', isDisabled: true },
    { value: 'in_process', label: 'В процессе' },
    { value: 'finished', label: 'Завершена' },
    { value: 'error', label: 'Не завершена' }
];

const Filter = ({ isLoading, setFilteredData }) => {

    const handleSubmit = values => {
        const arr = [values];
        setFilteredData(arr);
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <div className="custom-grid-filter-3 mb-3">
                <Formik
                    initialValues={{
                        id: '',
                        clientId: '',
                        scooterId: '',
                        status: '',
                        datestart:  startDate,
                        dateend:  endDate
                    }}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        errors,
                        touched,
                        resetForm,
                        setFieldValue,
                        setFieldTouched,
                        formProps 
                    }) => (
                        <Form onSubmit={handleSubmit} className="formFilter activeFormFilter">
                            <div className="filters-block custom-grid-filter d-flex">
                                <div className="custom-grid-filter-content card d-flex flex-wrap pl-0 pr-0 pt-2 pb-2 mr-3">
                                    <div className="custom-grid-filter-item">
                                        <Label for="tripssearch-id" className="control-label">ID поездки</Label>
                                        <FormInput
                                            id="tripssearch-id"
                                            fieldKey="id"
                                            name="TripsSearch[id]"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            type="text"
                                            autoComplete="id"
                                            addRowClass="mb-2"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="tripssearch-clientid" className="control-label">ID клиента</Label>
                                        <FormInput
                                            id="tripssearch-clientid"
                                            fieldKey="surname"
                                            name="TripsSearch[clientId]"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            type="text"
                                            autoComplete="clientId"
                                            addRowClass="mb-2"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="tripssearch-scooterid" className="control-label">ID самоката</Label>
                                        <FormInput
                                            id="tripssearch-scooterid"
                                            fieldKey="phone"
                                            name="TripsSearch[scooterId]"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            type="text"
                                            autoComplete="scooterId"
                                            addRowClass="mb-2"
                                            maskedInput={true}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="tripssearch-status_trip" className="control-label">Статус</Label>
                                        <Input
                                            type="select"
                                            name="TripsSearch[status_trip]"
                                            id="tripssearch-status_trip"
                                            fieldKey="status"
                                            autocomplete="status"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            onChange={(value) => setFieldValue('status', value.target.options[value.target.selectedIndex].value)}
                                            onBlur={() => setFieldTouched('status', true)}
                                            value={values.status}
                                        >
                                            {
                                                statusOptions.map(elem => {
                                                    return (
                                                        <option value={elem.value} key={elem.value}>{elem.label}</option>
                                                    )


                                                })
                                            }
                                        </Input>
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="tripssearch-datestart" className="control-label">Период дата старта (Начало)</Label>
                                        <DatePicker
                                            name="TripsSearch[dateStart]"
                                            autoComplete="datestart"
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            // onChange={(date, dateString) => setFieldValue("datestart", date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            dateFormat="dd.MM.yyyy"
                                            className="form-control custom-date-picker"
                                            id="tripssearch-datestart"
                                            fieldKey="datestart"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="tripssearch-dateend" className="control-label">Период дата старта (Конец)</Label>
                                        <DatePicker
                                            name="TripsSearch[dateend]"
                                            autoComplete="dateend"
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            selected={endDate}
                                            onChange={date => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            dateFormat="dd.MM.yyyy"
                                            className="form-control custom-date-picker"
                                            id="tripssearch-dateend"
                                            fieldKey="dateend"
                                        />
                                    </div>
                                </div>

                                <div className="custom-grid-filter-btns d-flex">
                                    <Button
                                        type="submit"
                                        className="btn btn-block btn-danger mt-0 mr-3 formFilterApply"
                                    >
                                        Применить
                                    </Button>
                                    <Button
                                        type="reset"
                                        onClick={() => resetForm()}
                                        className="btn btn-block btn-default mt-0 d-flex align-items-center justify-content-center"
                                    >
                                        Сбросить
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
}

export default Filter;