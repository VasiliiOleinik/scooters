import React from 'react';
import Select from 'react-select';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ onChange, options, value,error, className }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };
    console.log('value', value);

    return (
        <div className={className}>
            <Select
                value={defaultValue(options, value)}
                onChange={value => {
                    onChange(value)

                }} options={options} />
        </div>

    )
}