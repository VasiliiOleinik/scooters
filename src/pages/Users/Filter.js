import React from 'react';
import { Formik } from 'formik';

// import * as Yup from 'yup';
import {
    Form,
    Label,
    Button,
    Input
} from 'reactstrap';



import { FormInput } from 'src/components';


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

const Filter = ({ isLoading, setFilteredData }) => {

    const handleSubmit = values => {
        const arr = [values];
        setFilteredData(arr);
    };
    return (
        <>
            <div className="custom-grid-filter-3 mb-3">
                <Formik
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
                        setFieldValue,
                        setFieldTouched
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
                                            maskedInput={true}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="custom-grid-filter-item">
                                        <Label for="searchusers-status" className="control-label">Статус</Label>
                                        <Input
                                            type="select"
                                            name="SearchUsers[status]"
                                            id="searchusers-status"
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
                                        <Label for="searchusers-role" className="control-label">Роль</Label>
                                        <Input
                                            type="select"
                                            name="SearchUsers[role]"
                                            id="searchusers-role"
                                            fieldKey="role"
                                            autocomplete="role"
                                            handleBlur={() => setFieldTouched('role', true)}
                                            handleChange={handleChange}
                                            values={values}
                                            errors={errors}
                                            touched={touched}
                                            isLoading={isLoading}
                                            onChange={(value) => setFieldValue('role', value.target.options[value.target.selectedIndex].value)}
                                            onBlur={() => setFieldTouched('role', true)}
                                            value={values.role}
                                        >
                                            {
                                                roleOptions.map(elem => {
                                                    return (
                                                        <option value={elem.value} key={elem.value}>{elem.label}</option>
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