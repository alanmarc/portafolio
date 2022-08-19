import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';

import { Index } from '../pages/Index';
import { Contact } from '../pages/Contact';
import { Projects } from '../pages/Projects';
import Header from '../components/header/Header';


export const AppRouter = () => {
  return (
    <>
        <Header /> 
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/' element={<Navigate to="/"/>} />
        </Routes>
    </>
  )
}
