import React, { useState } from 'react';
import {
    Col,
    Row,
    Form,
    Label,
    Input
} from 'reactstrap';

import ImageUploading from "react-images-uploading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik } from 'formik';
import * as Yup from 'yup';

import TheFooter from './TheFooter';
import { FormInput } from 'src/components';

import noPhoto from 'src/assets/img/no-photo.png';
import sidebarIcons from 'src/assets';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Введите корректный Email')
        .required('Обязательно к заполнению')
});

const UsersCreate = ({ error, isLoading, handleLogin }) => {
    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

    const imagesOnChange = imageList => setImages(imageList);
    // const handleSubmit = values => setData(values);
    const handleSubmit = values => {
        console.log('values', values);
    };

    const roleOptions = [
        { value: "-- Роли --", label: '-- Роли --', isDisabled: true },
        { value: 'admin', label: 'Администратор' },
        { value: 'investor', label: 'Инвестор' },
        { value: 'manager', label: 'Менеджер' }
    ];
    const statusOptions = [
        { value: "-- Статус --", label: '-- Статус --', isDisabled: true },
        { value: 'active', label: 'Активен' },
        { value: 'block', label: 'Заблокирован' }
    ]

    return (
        <>
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Formik
                            validationSchema={LoginSchema}
                            initialValues={{
                                image: `${noPhoto}`,
                                users_phone: '',
                                additional_phone: '',
                                users_email: '',
                                users_surname: '',
                                users_name: '',
                                users_patronymic: '',
                                users_birthday_at: '',
                                role: '',
                                newPassword: '',
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
                                setFieldValue,
                                setFieldTouched
                            }) => (
                                <Form onSubmit={handleSubmit} id="users-create-form">
                                    <div className="profile-grid d-flex align-items-start">
                                        <div className="fix-view-card profile-photo-card d-flex align-items-center justify-content-center flex-column card card-body mr-5">
                                            <ImageUploading
                                                value={images}
                                                onChange={imagesOnChange}
                                                dataURLKey="data_url"
                                            >
                                                {({
                                                    onImageUpdate,
                                                    onImageRemove,
                                                }) => (
                                                    <>
                                                        <div key={0} className="image-item">
                                                            <FormInput
                                                                type="hidden"
                                                                id="image"
                                                                name="ProfileModel[image]"
                                                                fieldKey="image"
                                                                handleBlur={handleBlur}
                                                                handleChange={handleChange}
                                                                values={values}
                                                                errors={errors}
                                                                touched={touched}
                                                                isLoading={isLoading}
                                                                autoComplete="image"
                                                                addRowclassName="mb-2"
                                                                value={images.length !== 0 ? images[0].data_url : noPhoto}
                                                            />
                                                            <img src={images.length !== 0 ? images[0].data_url : noPhoto} alt={images.length !== 0 ? images[0].file.name : "No photo"} width="170" height="170" className="avatar-profile" />
                                                            <div className="profile-photo-btns field-users-image d-flex align-items-center justify-content-center">
                                                                {images.length !== 0
                                                                    ? <button onClick={() => onImageRemove(0)} className="remove-img btn btn-default btn-square align-items-center justify-content-center d-flex mr-3">
                                                                        <img src={sidebarIcons.close} alt="Remove" />
                                                                    </button>
                                                                    : null
                                                                }
                                                                <button onClick={() => onImageUpdate(0)} className="btn btn-danger btn-square align-items-center justify-content-center d-flex">
                                                                    <img src={sidebarIcons.upload} alt="Upload" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </ImageUploading>
                                        </div>
                                        <div className="d-flex align-items-start flex-column fix-view-card">
                                            <div className="d-flex align-items-stretch flex-column card card-body w-100  mb-4 inputs-separate">
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users_phone">Телефон *</label>
                                                    <FormInput
                                                        id="users_phone"
                                                        name="Users[phone]"
                                                        fieldKey="users_phone"
                                                        handleBlur={handleBlur}
                                                        handleChange={handleChange}
                                                        values={values}
                                                        errors={errors}
                                                        touched={touched}
                                                        isLoading={isLoading}
                                                        type="text"
                                                        autoComplete="users_phone"
                                                        addRowclassName="mb-2"
                                                        maskedInput={true}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users-additional_phone">Телефон дополнительный</label>
                                                    <FormInput
                                                        id="users-additional_phone"
                                                        name="Users[additional_phone]"
                                                        fieldKey="additional_phone"
                                                        handleBlur={handleBlur}
                                                        handleChange={handleChange}
                                                        values={values}
                                                        errors={errors}
                                                        touched={touched}
                                                        isLoading={isLoading}
                                                        type="text"
                                                        autoComplete="additional_phone"
                                                        addRowclassName="mb-2"
                                                        maskedInput={true}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users_email">Email*</label>
                                                    <FormInput
                                                        id="users_email"
                                                        name="Users[email]"
                                                        fieldKey="users_email"
                                                        handleBlur={handleBlur}
                                                        handleChange={handleChange}
                                                        values={values}
                                                        errors={errors}
                                                        touched={touched}
                                                        isLoading={isLoading}
                                                        type="text"
                                                        autoComplete="users_email"
                                                        addRowclassName="mb-2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-stretch flex-column card card-body w-100  mb-4 inputs-separate">
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users_surname">Фамилия*</label>
                                                    <FormInput
                                                        id="users_surname"
                                                        name="Users[surname]"
                                                        fieldKey="users_surname"
                                                        handleBlur={handleBlur}
                                                        handleChange={handleChange}
                                                        values={values}
                                                        errors={errors}
                                                        touched={touched}
                                                        isLoading={isLoading}
                                                        type="text"
                                                        autoComplete="users_surname"
                                                        addRowclassName="mb-2"
                                                    />

                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users_name">Имя*</label>
                                                    <FormInput
                                                        id="users_name"
                                                        name="Users[name]"
                                                        fieldKey="users_name"
                                                        handleBlur={handleBlur}
                                                        handleChange={handleChange}
                                                        values={values}
                                                        errors={errors}
                                                        touched={touched}
                                                        isLoading={isLoading}
                                                        type="text"
                                                        autoComplete="users_name"
                                                        addRowclassName="mb-2"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users_patronymic">Отчество</label>
                                                    <FormInput
                                                        id="users_patronymic"
                                                        name="Users[patronymic]"
                                                        fieldKey="users_patronymic"
                                                        handleBlur={handleBlur}
                                                        handleChange={handleChange}
                                                        values={values}
                                                        errors={errors}
                                                        touched={touched}
                                                        isLoading={isLoading}
                                                        type="text"
                                                        autoComplete="users_patronymic"
                                                        addRowclassName="mb-2"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <Label for="users_birthday_at" className="control-label">Дата Рождения</Label>
                                                    <DatePicker
                                                        name="Users[birthday_at]"
                                                        autoComplete="users_birthday_at"
                                                        values={values}
                                                        errors={errors}
                                                        touched={touched}
                                                        isLoading={isLoading}
                                                        handleBlur={handleBlur}
                                                        handleChange={handleChange}
                                                        selected={startDate}
                                                        onChange={(date) => setStartDate(date)}
                                                        dateFormat="dd.MM.yyyy"
                                                        className="form-control custom-date-picker"
                                                        id="users_birthday_at"
                                                        fieldKey="users_birthday_at"
                                                    />
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-stretch flex-column card card-body w-100  mb-4 inputs-separate">
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users-role">Роль*</label>
                                                    <Input
                                                        type="select"
                                                        name="Users[role]"
                                                        id="users-role"
                                                        fieldKey="role"
                                                        autoComplete="role"
                                                        handleBlur={handleBlur}
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
                                                            roleOptions.map(elem => <option value={elem.value} key={elem.value}>{elem.label}</option>)
                                                        }
                                                    </Input>
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users_newpassword">Пароль*</label>
                                                    <FormInput
                                                        id="users_newpassword"
                                                        name="Users[newPassword]"
                                                        fieldKey="newPassword"
                                                        handleBlur={handleBlur}
                                                        handleChange={handleChange}
                                                        values={values}
                                                        errors={errors}
                                                        touched={touched}
                                                        isLoading={isLoading}
                                                        type="password"
                                                        autoComplete="newPassword"
                                                        addRowclassName="mb-2"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label className="control-label" htmlFor="users-status">Статус*</label>
                                                    <Input
                                                        type="select"
                                                        name="Users[status]"
                                                        id="users-status"
                                                        fieldKey="status"
                                                        autoComplete="status"
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
                                                            statusOptions.map(elem => <option value={elem.value} key={elem.value}>{elem.label}</option>)
                                                        }
                                                    </Input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </div>
            <TheFooter />
        </>
    );
}

export default UsersCreate;
