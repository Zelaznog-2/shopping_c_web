import { object, string, ref } from 'yup'

const phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const schemaLogin = object({
  email: string()
    .matches(emailRegex, 'El correo electrónico no es el formato correcto')
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es requerido'),
  password: string()
    .required('La contraseña es requerida')
    .min(8, 'La contraseña debe ser mayor a 8 dígitos')
    .max(16, 'La contraseña debe ser menor a 16 dígitos')
})

export const schemaRegister = object({
  name: string().max(50, 'Máximo de 50 caracteres en el nombre').required('El nombre es requerido'),
  email: string()
    .matches(emailRegex, 'El correo electrónico no es el formato correcto')
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es requerido'),
  phone: string()
    .matches(phoneRegEx, 'El teléfono no tiene el formato correcto')
    .required('El teléfono es requerido'),
  password: string()
    .min(8, 'La contraseña debe ser mayor a 8 dígitos')
    .max(16, 'La contraseña debe ser menor a 16 dígitos')
    .required('La contraseña es requerida'),
  password_confirmation: string()
    .required('La confirmación de contraseña es requerida')
    .oneOf([ref('password'), null], 'Las contraseña es no coinciden')
})

export const schemaForgotPassword = object({
  email: string()
    .matches(emailRegex, 'El correo electrónico no es el formato correcto')
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es requerido')
})
