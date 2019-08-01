import React from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';
import DataBinding from './components/dataBinding';
import Newdata from './components/newdata';
import Newlogin from './components/newlogin';
import login from './components/login';
import Localstorage from './components/localstorage';
import Pushing from './components/pushing';
import Practice from './components/practice';
import Postlist from './components/postlist';
import pagestion from './components/pagestion';
import Education from './components/education';
import Details from './components/details';
import Sidemenu from './components/sidemenu';
import Editable from './components/editable';
import All from './components/all';

function App() {
  return (

    <Switch>
      <Route path="/dataBinding" component={DataBinding} />
      <Route path="/Newdata" component={Newdata} />
      <Route path="/Newlogin" component={Newlogin} />
      <Route path="/Login" component={login} />
      <Route path="/localstorage" component={Localstorage} />
      <Route path="/pushing" component={Pushing} />
      <Route path="/practice" component={Practice} />
      <Route path="/postlist" component={Postlist} />
      <Route path="/pagestion" component={pagestion} />
      <Route path="/education" component={Education} />
      <Route path="/details" component={Details} />
      <Route path="/sidemenu" component={Sidemenu} />
      <Route path="/editable" component={Editable} />
      <Route path="/all" component={All} />
      
    </Switch>



  );
}

export default App;
