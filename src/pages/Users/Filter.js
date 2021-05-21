import React, { useEffect, useState, useCallback } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
    Form,
    Label,
    Row,
    Col,
    Button,
    Link,
    Input
} from 'reactstrap';



import { FormInput } from 'src/components';

// const LoginSchema = Yup.object().shape({
//     email: Yup.string()
//         .email('Введите корректный Email')
//         .required('Обязательно к заполнению'),
//     password: Yup.string()
//         .min(6, 'Пароль слишком короткий')
//         .max(50, 'Пароль слишком длинный')
//         .required('Обязательно к заполнению')
// });

const statusOptions = [
    { value: "-- Все --", label: '-- Все --', isDisabled: true },
    { value: 'BR', label: 'BR' },
    { value: 'NL', label: 'NL' },
    { value: 'DE', label: 'DE' }
];
const roleOptions = [
    { value: "-- Все --", label: '-- Все --', isDisabled: true },
    { value: 'female', label: 'female' },
    { value: 'male', label: 'male' },
]

const Filter = ({ error, isLoading }) => {

    const handleSubmit = values => {
        console.log('values', values);
    };
    return (
        <>
            <div className="custom-grid-filter-3 mb-3">
                <Formik
                    // validationSchema={LoginSchema}
                    initialValues={{ 
                        id: '', 
                        surname: '',
                        phone: '',
                        status: '',
                        role: ''
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
                        setFieldValue
                    }) => (
                        <Form onSubmit={handleSubmit} className="formFilter activeFormFilter">
                            <div className="filters-block custom-grid-filter d-flex">
                                <div className="custom-grid-filter-content card d-flex flex-wrap pl-0 pr-0 pt-2 pb-2 mr-3">
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchusers-id" className="control-label">ID пользователя</Label>
                                        <FormInput
                                            id="searchusers-id"
                                            fieldKey="id"
                                            name="SearchUsers[id]"
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
                                        <Label for="searchusers-surname" className="control-label">Фамилия</Label>
                                        <FormInput
                                            id="searchusers-surname"
                                            fieldKey="surname"
                                            name="SearchUsers[surname]"
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
                                        <Label for="searchusers-phone" className="control-label">Телефон</Label>
                                        <FormInput
                                            id="searchusers-phone"
                                            fieldKey="phone"
                                            name="SearchUsers[phone]"
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
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchusers-status" className="control-label">Статус</Label>
                                        <Input 
                                            type="select"
                                            name="SearchUsers[status]"
                                            id="searchusers-status"
                                            fieldKey="status"
                                            autoComplete="status"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            onChange={setFieldValue}
                                            >
                                            {
                                                statusOptions.map(elem => {
                                                    return (
                                                        <option value={elem.value}>{elem.label}</option>
                                                    )


                                                })
                                            }
                                        </Input>
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchusers-role" className="control-label">Роль</Label>
                                        <Input
                                            type="select"
                                            name="SearchUsers[role]"
                                            id="searchusers-role"
                                            fieldKey="role"
                                            autoComplete="role"
                                            handleBlur={handleBlur}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            onChange={setFieldValue}
                                            >
                                            {
                                                roleOptions.map(elem => {
                                                    return (
                                                        <option value={elem.value}>{elem.label}</option>
                                                    )


                                                })
                                            }
                                        </Input>
                                        
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
                                        onClick={resetForm}
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