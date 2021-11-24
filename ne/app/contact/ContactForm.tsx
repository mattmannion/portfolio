import s from './contactForm.module.scss';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface ErrorIF {
  error: string | undefined;
  touched: boolean | undefined;
}

function Error({ error, touched }: ErrorIF) {
  return (
    <div className={s.error}>
      {error && touched ? <div>Required</div> : <div>&nbsp;</div>}
    </div>
  );
}

export function ContactForm() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
    },

    validationSchema: Yup.object({
      firstname: Yup.string().required('Must enter a First Name'),
      lastname: Yup.string().required('Must enter a Last Name'),
      email: Yup.string()
        .email('Invaild Email Address')
        .required('Must enter an Email'),
      subject: Yup.string().required('Must enter a Subject'),
      message: Yup.string().required('Must enter a Message'),
    }),

    onSubmit: async function (values) {
      try {
        await axios.post('/api/contact', values);
        resetForm();
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h1 className={s.title}>Contact Me!</h1>
      <div className={s.item}>
        <input
          type={s.text}
          name='firstname'
          placeholder='First Name'
          className={s.inputField}
          onChange={handleChange}
          value={values.firstname}
          onBlur={handleBlur}
        />
        <Error error={errors.firstname} touched={touched.firstname} />
      </div>
      <div className={s.item}>
        <input
          type='text'
          name='lastname'
          placeholder='Last Name'
          className={s.inputField}
          onChange={handleChange}
          value={values.lastname}
          onBlur={handleBlur}
        />
        <Error error={errors.lastname} touched={touched.lastname} />
      </div>
      <div className={s.item}>
        <input
          type='email'
          name='email'
          placeholder='Email'
          className={s.inputField}
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
        />
        <Error error={errors.email} touched={touched.email} />
      </div>
      <div className={s.item}>
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          className={s.inputField}
          onChange={handleChange}
          value={values.subject}
          onBlur={handleBlur}
        />
        <Error error={errors.subject} touched={touched.subject} />
      </div>
      <div className={s.item}>
        <textarea
          name='message'
          placeholder='Message'
          className={s.inputField}
          onChange={handleChange}
          value={values.message}
          onBlur={handleBlur}
        />
        <Error error={errors.message} touched={touched.message} />
      </div>
      <button className={s.accentButton} type='submit'>
        submit
      </button>
    </form>
  );
}
