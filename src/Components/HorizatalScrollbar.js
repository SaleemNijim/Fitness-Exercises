import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';
import BodyPart from './BodyPart';
import LeftArrowIcon from '../Assets/icons/left-arrow.png'
import RightArrowIcon from '../Assets/icons/right-arrow.png'
import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow  arrow">
            <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
    );
};
const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, bodyParts }) => {
    console.log(data);

    // Check if data is an array before mapping over it
    if (!Array.isArray(data)) {
        // Handle the case where data is not an array (e.g., display an error message or return early)
        return <div>Data is not an array.</div>;
    }

    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    m="0 40px"
                >
                    {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
                </Box>
            ))}
        </ScrollMenu>
    );
}

export default HorizontalScrollbar;