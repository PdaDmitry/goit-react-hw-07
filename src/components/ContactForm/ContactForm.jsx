import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
// import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const userId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const initState = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    // console.log({ id: nanoid(), ...values }); //newContact
    //the unique identifier will be generated by the backend itself
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string().trim().min(3, 'Too Short!').max(50, 'Too Long!').required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required')
      .matches(/^[\d-]+$/, 'Number can only contain digits and dashes'),
  });

  return (
    <Formik initialValues={initState} onSubmit={handleSubmit} validationSchema={contactSchema}>
      <Form className={css.form} autoComplete="off">
        <div className={css.contInput}>
          <label className={css.inpName} htmlFor={userId}>
            Username
          </label>
          <Field className={css.field} type="text" id={userId} name="name" />
          <ErrorMessage className={css.errorText} name="name" component="span" />
        </div>

        <div className={css.contInput}>
          <label className={css.inpName} htmlFor={numberId}>
            Number
          </label>
          <Field className={css.field} type="text" id={numberId} name="number" />
          <ErrorMessage className={css.errorText} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
