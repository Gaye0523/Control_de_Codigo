import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


export const Navegation = () => {

  return (
    <Fragment>
      <div className="contarineNavigation">
        <div>
          <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
          <spam className="tiendas">Tiendas</spam>
        </div>

        <div>
          <FontAwesomeIcon icon={faHeart} className="deseos" />
          <spam className="deseos">Lista de deseos</spam>
        </div>

        <div>
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />
          <spam className="bolsa">Mi bolsa</spam>
        </div>
      </div>
    </Fragment>
  );
}

export const Menu = () => {

  const showText = () => {
    console.log('Se hizo click en el menu')
  }

  return (
    <Fragment>
      <div >
        <ul className="containerMenu">
          <li onClick={showText} className="menu">JEANS</li>
          <li onClick={showText} className="menu">DEMIN</li>
          <li onClick={showText} className="menu">ROPA</li>
          <li onClick={showText} className="menu">ACCESORIOS</li>
          <li onClick={showText} className="menu">BASICOS INFALTABLES</li>
          <li onClick={showText} className="menu">NOVEDADES</li>
          <li onClick={showText} className="menu1">REBAJAS</li>
        </ul>
      </div>
    </Fragment>
  );
}


const ViewNavegation = () => {
  return (
    <Fragment>
      <img src="./Imagenes/logo.PNG" alt="logo" className="logo" />
      <Navegation />
      <Menu />
    </Fragment>
  );
}
export default ViewNavegation;

