import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

const FormInput = ({
  fieldKey,
  isLoading,
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  type,
  placeholder,
  autoComplete,
  maskedInput,
  capitalize,
  addRowClass,
  addCollClass,
  inputIcon,
  maxLetters,
  mask
}) => {
  const error = errors[fieldKey],
    touchedField = touched[fieldKey];

  const [letterCounter, getLetterLength] = useState(maxLetters);

  const renderField = () => {
    const recountLetters = (value, maxLetters) => {
      getLetterLength(maxLetters - value);
    };

    const standardProps = {
      disabled: isLoading,
      id: fieldKey,
      type: type,
      name: fieldKey,
      placeholder: placeholder,
      onBlur: handleBlur,
      onChange: handleChange,
      value: values[fieldKey],
      className: error && touchedField && 'is-invalid',
      style: capitalize ? { textTransform: 'capitalize' } : null,
      autoComplete: autoComplete,
    };

    if (maskedInput) {
      return (
        <InputGroup>
          {inputIcon ? (
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className={inputIcon} />
              </InputGroupText>
            </InputGroupAddon>
          ) : null}
          <MaskedInput
            mask={[
              '+',
              /\d/,
              /\d/,
              '(',
              /\d/,
              /\d/,
              /\d/,
              ')',
              ' ',
              /\d/,
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/,
              '-',
              /\d/,
              /\d/
            ]}
            guide={false}
            {...standardProps}
            render={(ref, props) => <Input innerRef={ref} {...props} />}
          />
          {maxLetters ? (
            <span className="ml-1 mt-1 text-secondary">{letterCounter}</span>
          ) : null}
        </InputGroup>
      );
    }
    return (
      <InputGroup>
        {inputIcon ? (
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className={inputIcon} />
            </InputGroupText>
          </InputGroupAddon>
        ) : null}
        <Input
          {...standardProps}
          onInput={e => recountLetters(e.target.value.length, maxLetters)}
        />
        {maxLetters ? (
          <span className="ml-1 mt-1 text-secondary">{letterCounter}</span>
        ) : null}
      </InputGroup>
    );
  };

  return (
    <div className={`row ${addRowClass}`}>
      <div className={`col mb-2 ${addCollClass} error-${error} touchedField-${touchedField}`}>
        {renderField()}
        {error && touchedField && (
          <div className="invalid-feedback">{error}</div>
        )}
      </div>
    </div>
  );
};

FormInput.propTypes = {
  fieldKey: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  handleBlur: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  maskedInput: PropTypes.bool,
  capitalize: PropTypes.bool,
  addRowClass: PropTypes.string,
  inputIcon: PropTypes.string,
  maxLetters: PropTypes.string
};

FormInput.defaultProps = {
  isLoading: false,
  handleBlur: () => {},
  handleChange: () => {},
  values: {},
  errors: {},
  touched: {},
  type: 'text',
  placeholder: '',
  autoComplete: null,
  maskedInput: false,
  capitalize: false,
  addRowClass: '',
  inputIcon: '',
  maxLetters: ''
};

export default FormInput;
