import * as Yup from 'yup';

export const FormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(200, 'Too long!')
    .required('Required, need add information'),
  email: Yup.string().min(5, 'Too short!').max(200, 'Too long!').email('Invalid email format'),
  password: Yup.string()
    .min(5, 'Too short!')
    .max(200, 'Too long!')
    .required('Required, need add information')
});
