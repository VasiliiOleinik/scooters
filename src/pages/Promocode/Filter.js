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
    { value: 'Активный', label: 'Активный' },
    { value: 'Завершен', label: 'Завершен' },
    { value: 'Неактивный', label: 'Неактивный' },
];
const typeOptions = [
    { value: "-- Все --", label: '-- Все --', isDisabled: true },
    { value: 'Активен', label: 'Активен' },
    { value: 'Заблокирован', label: 'Заблокирован' },
];

const Filter = ({ isLoading, setFilteredData }) => {

    const handleSubmit = values => {
        const arr = [values];
        setFilteredData(arr);
    };

    const [startDateStart, setStartDateStart] = useState(new Date());
    const [startDateEnd, setStartDateEnd] = useState(new Date());
    const [endDateStart, setEndDateStart] = useState(new Date());
    const [endDateEnd, setEndDateEnd] = useState(new Date());

    return (
        <>
            <div className="custom-grid-filter-3 mb-3">
                <Formik
                    initialValues={{
                        type: '',
                        begin_date: '',
                        begin_date2: '',
                        status: '',
                        end_date: '',
                        end_date2: '',
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
                                        <Label for="searchpromocods-type" className="control-label">Тип</Label>
                                        <Input
                                            type="select"
                                            name="SearchPromocods[type]"
                                            id="searchpromocods-type"
                                            fieldKey="type"
                                            autocomplete="type"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            onChange={(value) => setFieldValue('type', value.target.options[value.target.selectedIndex].value)}
                                            onBlur={() => setFieldTouched('type', true)}
                                            value={values.status}
                                        >
                                            {
                                                typeOptions.map(elem => {
                                                    return (
                                                        <option value={elem.value} key={elem.value}>{elem.label}</option>
                                                    )


                                                })
                                            }
                                        </Input>
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchpromocods-begin_date" className="control-label">Дата начала</Label>
                                        <DatePicker
                                            name="SearchPromocods[begin_date]"
                                            autoComplete="begin_date"
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            selected={startDateStart}
                                            onChange={date => setStartDateStart(date)}
                                            selectsStart
                                            startDate={startDateStart}
                                            endDate={startDateEnd}
                                            dateFormat="dd.MM.yyyy"
                                            className="form-control custom-date-picker"
                                            id="searchpromocods-begin_date"
                                            fieldKey="begin_date"
                                        />
                                    </div>
                                   
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchpromocods-begin_date2" className="control-label"></Label>
                                        <DatePicker
                                            name="SearchPromocods[begin_date2]"
                                            autoComplete="begin_date2"
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            selected={startDateEnd}
                                            onChange={date => setStartDateEnd(date)}
                                            selectsEnd
                                            startDate={startDateStart}
                                            endDate={startDateEnd}
                                            minDate={startDateStart}
                                            dateFormat="dd.MM.yyyy"
                                            className="form-control custom-date-picker"
                                            id="searchpromocods-begin_date2"
                                            fieldKey="begin_date2"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchpromocods-status" className="control-label">Статус</Label>
                                        <Input
                                            type="select"
                                            name="SearchPromocods[status]"
                                            id="searchpromocods-status"
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
                                        <Label for="searchpromocods-end_date" className="control-label">Дата конца</Label>
                                        <DatePicker
                                            name="SearchPromocods[end_date]"
                                            autoComplete="end_date"
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            selected={endDateStart}
                                            onChange={date => setEndDateStart(date)}
                                            selectsStart
                                            startDate={endDateStart}
                                            endDate={endDateEnd}
                                            dateFormat="dd.MM.yyyy"
                                            className="form-control custom-date-picker"
                                            id="searchpromocods-end_date"
                                            fieldKey="end_date"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchpromocods-end_date2" className="control-label"></Label>
                                        <DatePicker
                                            name="SearchPromocods[end_date2]"
                                            autoComplete="end_date2"
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            selected={endDateEnd}
                                            onChange={date => setEndDateEnd(date)}
                                            selectsEnd
                                            startDate={endDateStart}
                                            endDate={endDateEnd}
                                            minDate={endDateStart}
                                            dateFormat="dd.MM.yyyy"
                                            className="form-control custom-date-picker"
                                            id="searchpromocods-end_date2"
                                            fieldKey="end_date2"
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