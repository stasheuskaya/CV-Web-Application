import '../skills.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { saveSkill } from '../../../store/thunks/thunks';

const initialValues = {
    skillName: '',
    skillRange: '',
}

export default function AddSkillForm() {
  const dispatch = useDispatch();

    return (
        <div className = 'addSkillForm'>
          <Formik
            initialValues = {initialValues}
            validationSchema = {Yup.object({
              skillName: Yup.string()
              .required('Skill name is a required field'),
              skillRange: Yup.number()
              .min(10, 'Skill range must be greater than or equal to 10')
              .required('Skill range is a required field')
              .max(100, 'Skill range must be less than or equal to 100')
            })}
            onSubmit = {(values, { resetForm }) => {
              const skill = {name: values.skillName, range: values.skillRange}
              dispatch(saveSkill(skill));
              resetForm();
            }}
          >
            {({ errors, isValid }) => (
              <Form>
                <div className='skillName'>
                  <h2><label htmlFor="skillName">Skill Name</label></h2>
                  <Field className={`${errors.skillName ? "errBorder" : ""}`} id="skillName" name="skillName" placeholder="Enter skill name" />
                </div>
                <div className='inputErrorMessage'><ErrorMessage name="skillName" /></div>
                <div className='skillRange'>
                  <h2><label htmlFor="skillRange">Skill range</label></h2>
                  <Field className={`${errors.skillRange ? "errBorder" : ""}`} id="skillRange" name="skillRange" placeholder="Enter skill range" />
                </div>
                <div className='inputErrorMessage'><ErrorMessage name="skillRange" /></div>
                <div className='addSkillButton'>
                  <button type="submit" disabled={!isValid}>Add Skill</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
    )
}