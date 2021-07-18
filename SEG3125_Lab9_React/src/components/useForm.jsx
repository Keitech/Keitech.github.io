import { useState, useEffect } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    phone: '',
    credit: '',
    cvv: '',
    exp: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        alert("Thanks for your Submission!")
        window.location.reload();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors }
}

export default useForm