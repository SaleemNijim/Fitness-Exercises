import React from 'react'
import BodyPartImage from '../Assets/icons/body-part.png'
import TargetImage from '../Assets/icons/target.png'
import EquipmentImage from '../Assets/icons/equipment.png'
import { Button, Stack, Typography } from '@mui/material'




const Detail = ({ exerciseDetai }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetai
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]
    console.log(gifUrl);
    return (
        <Stack gap={'60px'} sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
                <Typography variant='h3' color={'#ff2625'}>
                    {name}
                </Typography>
                <Typography variant='h6'>
                    Exercises Keep you strong. {name} {'  '}
                    is one of the best
                    exercises to target your abs. It will help you improve your
                    mood and gain energy
                </Typography>
                {
                    extraDetail.map((item) => (
                        <Stack key={item.name} direction={'row'} gap={'24px'} alignItems={'center'}>
                            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100x', height: '100px' }}>
                                <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
                            </Button>
                            <Typography variant='h5' >
                                {item.name}
                            </Typography>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
}

export default Detail
