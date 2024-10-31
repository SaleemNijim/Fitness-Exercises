import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizatalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetmscleexercises, equipmentExercises }) => {

    return (
        <Box sx={{ marginTop: '100px' }}>
            <Typography variant='h3' mb={5}>
                Exercises that target the same muscle group
            </Typography>
            <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
                {targetmscleexercises.length !== 0 ? <HorizontalScrollbar data={targetmscleexercises} /> : <Loader />}
            </Stack>
            <Typography variant='h3' mb={5}>
                Exercises that target the same Equipment group
            </Typography>
            <Stack direction={'row'} sx={{ p: '2', position: 'relative' }}>
                {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises
