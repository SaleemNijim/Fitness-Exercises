import React from 'react'
import './App.css';
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ExerciseDatail from './Pages/ExerciseDatail';
import Footer from './Components/Footer';



const App = () => {
    return (
        <Box
            width={'400px'}
            sx={{
                width: { xl: '1488px' }
            }}
            m={'auto'}>

            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<ExerciseDatail />} />
            </Routes>

            <Footer />
        </Box>
    )
}

export default App
