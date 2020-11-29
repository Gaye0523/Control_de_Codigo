import React, { Fragment } from 'react';
import ViewNavegation from './Components/viewNavegation.jsx';
import ViewSend from './Components/viewSend.jsx';
import ViewSummary from './Components/viewSummary.jsx';
import ViewBurger from './Components/viewBurger.jsx';
import './Style/styleGeneral.scss';
import './Style/viewNavegation.scss';
import './Style/viewSend.scss'; 
import './Style/viewSummary.scss';
import './Style/viewBurger.scss';


function App() {
  return (
    <Fragment>
      <ViewBurger />
      <ViewNavegation />
      <div className="containerGlobal">
      <ViewSend />
      <ViewSummary />
      </div>

    </Fragment>

  );
}
export default App;
