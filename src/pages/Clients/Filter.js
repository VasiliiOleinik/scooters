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
    { value: 'Активен', label: 'Активен' },
    { value: 'Заблокирован', label: 'Заблокирован' },
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
            <div className="custom-grid-filter-2 mb-3">
                <Formik
                    initialValues={{
                        id: '',
                        surname: '',
                        phone: '',
                        status: '',
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
                                        <Label for="searchclients-status" className="control-label">Статус</Label>
                                        <Input
                                            type="select"
                                            name="SearchClients[status]"
                                            id="searchclients-status"
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
                                        <Label for="searchclients-id" className="control-label">ID</Label>
                                        <FormInput
                                            id="searchclients-id"
                                            fieldKey="id"
                                            name="SearchClients[id]"
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
                                        <Label for="searchclients-surname" className="control-label">Фамилия</Label>
                                        <FormInput
                                            id="searchclients-surname"
                                            fieldKey="surname"
                                            name="SearchClients[surname]"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            type="text"
                                            autoComplete="surname"
                                            addRowClass="mb-2"
                                        />
                                    </div> 
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchclients-confirmed_phone" className="control-label">Телефон</Label>
                                        <FormInput
                                            id="searchclients-confirmed_phone"
                                            fieldKey="phone"
                                            name="SearchClients[confirmed_phone]"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            type="text"
                                            autoComplete="phone"
                                            addRowClass="mb-2"
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