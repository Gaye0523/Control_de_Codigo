import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';


const SendForm = () => {
  return (
    <Fragment>
      <div className="containerForm">
        <div className="containerDirection">
          <h3>DIRECCIÓN DE ENVÍO</h3>
        </div>
        <Form />
      </div>
    </Fragment>

  );
}
export default SendForm;

export const Form = () => {

  const [datos, setDatos] = useState({
    Nombre: '',
    Apellidos: '',
    Correo_Electronico: '',
    Número_de_teléfono: '',
    Codigo_Postal: '',
    Colonia: '',
    Estado: '',
    Ciudad: '',
    Municipio: '',
    Calle: ''
  })

  const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

/*   const enviarDatos = (event) => {
    event.preventDefault();
    console.log(datos.Nombre + ' ' + datos.Apellidos)
  } */

  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Fragment>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="containerForm1">
          <div className="containerInput1">
            <div className="containerIcon">
              <span className="msj-error">
                {errors?.Nombre?.message}
              </span>
              <FontAwesomeIcon icon={faUser} />
              <input type="text"
                placeholder="Nombre"
                name="Nombre"
                onChange={handleInputChange}
                ref={
                  register({
                    required: {
                      value: true,
                      message: 'Nombre es requerido'
                    },
                    maxLength: {
                      value: 5,
                      message: 'No más de 5 carácteres!'
                    },
                    minLength: {
                      value: 2,
                      message: 'Mínimo 2 carácteres'
                    }
                  })
                }
              />
            </div>

            <div className="containerIcon">
              <FontAwesomeIcon icon={faEnvelope} />
              <input type="text"
                placeholder="Correo Electrónico"
                name="Correo_Electronico"
                onChange={handleInputChange} />
            </div>

            <div className="containerIcon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input type="text"
                placeholder="Codigo Postal"
                name="Codigo_Postal"
                onChange={handleInputChange} />
            </div>

            <div className="containerIcon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input type="text"
                placeholder="Estado/Región"
                name="Estado"
                onChange={handleInputChange}
              />
            </div>

            <div className="containerIcon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input type="text"
                placeholder="Delegacion o municipio"
                name="Municipio"
                onChange={handleInputChange} />
            </div>
          </div>

          <div className="containerInput2">
            <div className="containerIcon1">
              <FontAwesomeIcon icon={faUser} />
              <input type="text"
                placeholder="Apellidos"
                name="Apellidos"
                onChange={handleInputChange}
                ref={
                  register({
                    required: {
                      value: true,
                      message: 'Apellidos requeridos'
                    },
                    maxLength: {
                      value: 5,
                      message: 'No más de 20 carácteres!'
                    },
                    minLength: {
                      value: 2,
                      message: 'Mínimo 2 carácteres'
                    }
                  })
                }
              />
              <span className="msj-error">
                {errors?.Apellidos?.message}
              </span>
            </div>

            <div className="containerIcon1">
              <FontAwesomeIcon icon={faPhoneAlt} />
              <input type="Número de teléfono"
                placeholder="Numero de teléfono"
                name="Número_de_teléfono"
                onChange={handleInputChange} />
            </div>

            <div className="containerIcon1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input type="text"
                placeholder="Colonia"
                name="Colonia"
                onChange={handleInputChange} />
            </div>

            <div className="containerIcon1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input type="text"
                placeholder="Ciudad"
                name="Ciudad"
                onChange={handleInputChange} />
            </div>

            <div className="containerIcon1">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <input type="text"
                placeholder="Calle"
                name="Calle"
                onChange={handleInputChange} />
            </div>
          </div>
        </div>

        <div className="containerButton">
          <button>Libreta de direcciones</button>
          <button className="guardar" type="submit">Guardar</button>
        </div>

        <div className="containerCheck">
          <input type="checkbox" value="check" /> Utilizar como dirección de facturación.
        </div>
      </form>
    </Fragment>
  );
}

