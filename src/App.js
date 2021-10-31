import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import MyOrder from './components/MyOrder/MyOrder';
import AddNewService from './components/AddNewService/AddNewService';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import Booking from './components/Booking/Booking';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllUsers from './components/AllUsers/AllUsers';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
        <Header></Header>
          <Switch>
              <Route exact path="/">
                  <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/myOrder">
                <MyOrder></MyOrder>
              </Route>
              <Route path="/addNewService">
                <AddNewService></AddNewService>
              </Route>
              <Route path="/manageAllOrder">
                <ManageAllOrder></ManageAllOrder>
              </Route>
              <PrivateRoute exact path="/booking/:bookingId">
                <Booking></Booking>
              </PrivateRoute>
              <Route path="/allUsers/:id">
                <AllUsers></AllUsers>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/registration">
                <Register></Register>
              </Route>
              <Route exact path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
