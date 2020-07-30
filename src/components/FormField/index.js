import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

background: #53585D;
color: #F5F5F5;
border-radius: 4px;
display: block;
width: 100%;
height: 57px;
font-size: 18px;

outline: 0;
border: 0;
border-top: 4px solid transparent;
border-top: 4px solid #53585D;

padding: 16px 16px;
margin-bottom: 45px;

resize: none;
border-radius: 4px;
transition: border-color .3s;

&:focus{
  border-bottom-color: var(--primary);
}
`;

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label`

`;

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (

    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        {label}
        <Input
          as={tag}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {

  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
