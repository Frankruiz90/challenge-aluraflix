import React from 'react'
import Form from '../../components/Form/Form'
import Loading from '../../components/Loading/Loading'

export default function NewVideo() {
  return (
    <>
    <Loading/>
      <Form title='NUEVO VIEDEO' subTitle='Complete el formulario para crear una nueva tarjeta de video' create='Crear Tarjeta'></Form>
    </>
  )
}
