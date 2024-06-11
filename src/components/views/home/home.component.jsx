'use client'

import { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tabs from '@/components/Tabs/Tabs.component';
import {styled} from '@mui/material/styles';
import useMainContext from '@/hooks/useMain.context';
import { Typography } from '@mui/material';

const Container = styled(Box)(({theme}) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100vw',
    height: '100vh',
    background: `linear-gradient(to bottom left, #e66465, ${theme.palette.primary.main});`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

const HomeView = () => {

    const { dispatch } = useMainContext();

    useEffect(() => {
        // get data and dispatch it.
        fetch('/data.json')
        .then(response => response.json())
        .then(json => {
            dispatch({type: 'setUsers', payload: json.data});
        })
    }, [dispatch])

    return (
        <Container>
            <Box sx={{color: 'common.white', padding: '2rem 0'}}>
                <Typography variant='h2' component='h1'>RealFi Assessment</Typography>
            </Box>
            <Paper sx={{
                width: '100%',
                maxWidth: '1000px',
                height: '100%',
                maxHeight: '450px'
            }}>
                <Tabs />
            </Paper>
      </Container>
    )
}

export default HomeView;