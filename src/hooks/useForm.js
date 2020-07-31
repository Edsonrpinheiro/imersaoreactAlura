import { useState } from 'react';

function useForm(valoresPadrao) {
  const [values, setValues] = useState(valoresPadrao);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(info) {
    const { value } = info.target;

    setValue(
      info.target.getAttribute('name'),
      value,
    );
  }

  function clearForm() {
    setValues(valoresPadrao);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
