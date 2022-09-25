import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/RegistrationForm/Form';
import LoginPage from './components/LoginForm/LoginPage';
import Home from './components/Home/Home';
import NavBar from './RecycleComponent/Navbar/NavBar';
import CustomerForm from './components/CustomerRegisterForm/CustomerForm';
import ContactUsMain from './components/ContactUs/ContactUsMain';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} />
          </Route>
          <Route path='home'>
            <Route index element={<Home />} />
          </Route>
          <Route path='login'>
            <Route index element={<LoginPage />} />
          </Route>
          <Route path='form'>
            <Route index element={<Form />} />
          </Route>
          <Route path='contact'>
            <Route index element={<ContactUsMain />} />
          </Route> 
          <Route path='customerForm'>
            <Route index element={<CustomerForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
