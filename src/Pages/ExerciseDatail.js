import React, { useEffect, useState } from 'react'
import { exerciseOptions, fetchData, youtubeoptions } from '../utils/FetchData'
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom'
import Detail from '../Components/Detail';
import ExerciseVideo from '../Components/ExerciseVideo';
import SimilarExercises from '../Components/SimilarExercises';



const ExerciseDatail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideo, setexerciseVideo] = useState([]);
    const [targetmscleexercises, setTargetmscleexercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const fetchExercisesData = async () => {

            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeoptions);
            setexerciseVideo(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetmscleexercises(targetMuscleExercisesData);

            const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExercises(equimentExercisesData);
        }
        fetchExercisesData()

    }, [id])
    console.log(exerciseVideo);
    return (
        <Box>
            <Detail exerciseDetai={exerciseDetail} />
            <ExerciseVideo exerciseVideo={exerciseVideo} name={exerciseDetail.name} />
            <SimilarExercises targetmscleexercises={targetmscleexercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDatail
