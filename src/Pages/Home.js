import { Box } from '@mui/material'
import React, { useState } from 'react'
import HeroBanner from '../Components/HeroBanner'
import Exercises from './../Components/Exercises';
import SearchExerxises from '../Components/SearchExercises';


const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Box >
            <HeroBanner />
            <SearchExerxises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}

            />
            <Exercises
                setExercises={setExercises}
                exercises={exercises}
                bodyPart={bodyPart}

            />


        </Box>
    )
}

export default Home
