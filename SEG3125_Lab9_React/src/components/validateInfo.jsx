export default function validateInfo(values) {
    let errors = {};
  
    if (!values.fullname.trim()) {
      errors.fullname = 'Fullname required';
    }
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.phone) {
      errors.phone = 'Phone is required';
    } else if (values.phone.length < 14) {
      errors.phone = 'Enter a valid Phone Number';
    }
    if (!values.credit) {
      errors.credit = 'Credit Card Required';
    } else if (values.credit.length < 19 ) {
      errors.credit = 'Enter a valid Credit Card'
    }
    if (!values.cvv) {
      errors.cvv = 'CVV required';
    } else if (values.cvv.length < 7 ) {
      errors.cvv = 'Enter a valid CVV'
    }
    if (!values.exp) {
      errors.exp = 'Expiry Date required';
    } else if (values.exp.length < 13 ) {
      errors.exp = 'Enter a valid Expiry Date'
    }
    return errors;
}