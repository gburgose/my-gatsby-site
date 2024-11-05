import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import TextareaAutosize from 'react-textarea-autosize';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const validationSchema = Yup.object({
  name: Yup.string().required("El nombre es obligatorio"),
  company: Yup.string().required("La empresa es obligatoria"),
  email: Yup.string().email("El email no es válido").required("El email es obligatorio"),
  phone: Yup.string().required("El teléfono es obligatorio"),
  rut: Yup.string().required("El RUT es obligatorio"),
  subject: Yup.string().required("El asunto es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio").max(500, "El mensaje no puede tener más de 500 caracteres"),
});

const FormContact: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        company: "",
        email: "",
        phone: "",
        rut: "",
        subject: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Aquí puedes manejar el envío del formulario
        console.log("Formulario enviado", values);
        MySwal.fire({
          title: 'Formulario enviado',
          text: 'Tu mensaje ha sido enviado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        });
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting, isValid, dirty, values }) => (
        <Form className="form form--contact">
          <div className="form--contact__grid">
            <div className="form--contact__field">
              <label htmlFor="name">Nombre</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className="form--contact__field">
              <label htmlFor="company">Empresa</label>
              <Field type="text" id="company" name="company" />
              <ErrorMessage name="company" component="span" />
            </div>
            <div className="form--contact__field">
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="span" />
            </div>
            <div className="form--contact__field">
              <label htmlFor="phone">Teléfono</label>
              <Field type="tel" id="phone" name="phone" />
              <ErrorMessage name="phone" component="span" />
            </div>
            <div className="form--contact__field">
              <label htmlFor="rut">RUT</label>
              <Field type="text" id="rut" name="rut" />
              <ErrorMessage name="rut" component="span" />
            </div>
            <div className="form--contact__field">
              <label htmlFor="subject">Asunto</label>
              <Field type="text" id="subject" name="subject" />
              <ErrorMessage name="subject" component="span" />
            </div>
          </div>
          <div className="form--contact__field">
            <label htmlFor="message">Mensaje</label>
            <Field as={TextareaAutosize} id="message" name="message" maxLength="500" />
            <ErrorMessage name="message" component="span" />
            <div className="form--contact__counter">
              {values.message.length}/500
            </div>
          </div>
          <div className="form--contact__field">
            <button className="button button--submit" type="submit" disabled={isSubmitting || !isValid || !dirty}>
              Enviar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormContact;