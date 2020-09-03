import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import PC from './pc/pc';
import SP from './sp/sp';

const App = () => (
  <BrowserRouter>
    {/* BrowserRouter直下に置けるコンポーネントは1つだけ */}
    <div>
      {/* RouteはBrowserRouter以下ならばどこの階層に置いてもよい */}
      <Route exact path="/" component={PC} /> {/*（1）*/}
      <Route path="/sp" component={SP} />
    </div>
  </BrowserRouter>
);

export default App;
