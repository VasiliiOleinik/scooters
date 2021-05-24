import React, { useState } from 'react';
import { Formik } from 'formik';

// import * as Yup from 'yup';
import {
    Form,
    Label,
    Button,
} from 'reactstrap';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { FormInput } from 'src/components';

const Filter = ({ isLoading, setFilteredData }) => {

    const handleSubmit = values => {
        const arr = [values];
        setFilteredData(arr);
    };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <>
            <div className="custom-grid-filter-2 mb-3">
                <Formik
                    initialValues={{
                        imei: '',
                        scooterName: '',
                        datestart: '',
                        dateEnd: '',
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
                        setFieldTouched
                    }) => (
                        <Form onSubmit={handleSubmit} className="formFilter activeFormFilter">
                            <div className="filters-block custom-grid-filter d-flex">
                                <div className="custom-grid-filter-content card d-flex flex-wrap pl-0 pr-0 pt-2 pb-2 mr-3">
                                    <div className="custom-grid-filter-item">
                                        <Label for="notificationsearch-imei" className="control-label">IMEI</Label>
                                        <FormInput
                                            id="notificationsearch-imei"
                                            fieldKey="imei"
                                            autoComplete="imei"
                                            name="NotificationSearch[imei]"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            type="text"
                                            addRowClass="mb-2"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="notificationsearch-scootername" className="control-label">Название самоката</Label>
                                        <FormInput
                                            id="notificationsearch-scootername"
                                            fieldKey="scooterName"
                                            autoComplete="scooterName"
                                            name="NotificationSearch[scooterName]"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            type="text"
                                            addRowClass="mb-2"
                                        />
                                    </div>

                                    <div className="custom-grid-filter-item">
                                        <Label for="notificationsearch-datestart" className="control-label">Выбрать начало периода</Label>
                                        <DatePicker
                                            name="NotificationSearch[dateStart]"
                                            autoComplete="datestart"
                                            id="notificationsearch-datestart"
                                            fieldKey="datestart"
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            dateFormat="dd.MM.yyyy"
                                            className="form-control custom-date-picker"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="notificationsearch-dateend" className="control-label">Выбрать конец периода</Label>
                                        <DatePicker
                                            name="NotificationSearch[dateEnd]"
                                            autoComplete="dateEnd"
                                            id="notificationsearch-dateend"
                                            fieldKey="dateEnd"
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