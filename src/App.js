
import React, {Suspense} from "react";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router} from "react-router-dom";
import PreLoader from "./components/UIElements/Preloader";
import BaseRoutes from "./routes/BaseRoutes";



const App = () => {




  return(
    <>
      <GlobalStyle></GlobalStyle>
      <Suspense fallback={<PreLoader/>}>
        <Router>
          <BaseRoutes />
        </Router>
      </Suspense>
    </>
  );
}
export default App;