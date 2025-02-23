import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/FetchData'
import HorizatalScrollbar from './HorizatalScrollbar';



const SearchExerxises = ({ setBodyPart, bodyPart, setExercises }) => {
    const [search, setsearch] = useState('')
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handelSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchExercises = exercisesData.filter(
                (exercise) =>
                    exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            );
            setsearch('')
            setExercises(searchExercises)
        }
    }

    return (
        <Stack alignItems={'center'} mt={'37px'} justifyContent={'center'} p={'20px'}>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb={'49px'} textAlign={'center'}>
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px" >

                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { lg: '1170px', md: '800px', sm: '500px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                        transition: 'all 0.5s ease'
                    }}
                    height='76px'
                    value={search}
                    onChange={(e) => setsearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button
                    className="search-btn"
                    sx={{
                        bgcolor: '#ff2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handelSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px', }}>
                <HorizatalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyPart />
            </Box>
        </Stack>
    );
};


export default SearchExerxises

