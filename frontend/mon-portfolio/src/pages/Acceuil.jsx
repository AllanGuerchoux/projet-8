import React from 'react';
import Header from '../component/Header';
import MainAcceuil from '../component/MainAcceuil';
import ContactForm from '../component/componentProjets/ContactForm';
import Footer from '../component/Footer';

const Acceuil = () => {
    return (
        <div className='pageWrapper'>
           <Header /> 
           <MainAcceuil />
           
           <ContactForm />
           <Footer />
        </div>
    );
};

export default Acceuil;