import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import componenets
import LandingPage from './Components/LandingPage/LandingPage';
import QuestionPage from './Components/Questions/QuestionPage'
import RegisterPage from './Components/Register/RegisterPage';
import HeaderMain from './Components/Header/MainHeader/HeaderMain';
import FooterMain from './Components/Footer/FooterMain';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <Router >
      <HeaderMain/>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/questions/questionpage" component={QuestionPage} />
        <Route path="/register/registerpage" component={RegisterPage} />
        <Route  component={NotFound} />
        <Route  component={NotFound} />
      </Switch>
      <FooterMain/>
    </Router>


  );
}

export default App;
