import React, { Fragment } from 'react';

export const ViewProducts = () => {
  return (
    <Fragment>
      <div className="containerProducts">
        <div className="containerSecadora">
          <img src="./Imagenes/secadora.webp" alt="secadora" className="secadora" />
          <p>SECADORA GAS 220W TAPA CIEGA CARGA FRONTAL LINEA XPERT</p>
          <p>$10,599</p>
        </div>

        <div className="containerCofre">
          <img src="./Imagenes/cofre.jpg" alt="cofre" className="cofre" />
          <p className="texto">COFRE LADY EMBLEM 75 ML EDP + 7,5 ML EDP + 100 ML B</p>
          <p className="valor">$1,890</p>
        </div>

        <div className="containerCofre1">
          <img src="./Imagenes/cofre1.webp" alt="cofre1" className="cofre1" />
          <p>COFRE GIFTSET PE 4PC 360 PURPLE WOMAN EDP 100ML</p>
          <p>$1,485</p>
        </div>

        <div className="containerButtonOrder">
          <button>Editar</button>
        </div>

        <div className="containerInfoOrder">
          <div className="infoOrder">
            <spam>SUBTOTAL</spam>
            <spam>ENVÍO</spam>
          </div>
          <div className="containerValorOrder">
            <spam >$13,974</spam>
            <spam>A calcular</spam>
          </div>
        </div>

        <div className="containerTotal">
          <spam className="total">TOTAL</spam>
          <spam className="valor" >$13,974</spam>
        </div>


      </div>



    </Fragment>
  );
}


const ViewSummary = () => {
  return (
    <Fragment>
      <div className="containerSummary">
        <div className="titleOrder">
          <h4>RESUMEN DE LA ORDEN</h4>
        </div>
        <ViewProducts />
      </div>
    </Fragment>
  );
}
export default ViewSummary;