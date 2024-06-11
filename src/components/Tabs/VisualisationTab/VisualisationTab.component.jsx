import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/material/styles';
import BasicPie from '@/components/charts/pie/PieChart.component';
import BasicScatter from '@/components/charts/scatter/ScatterChart.component';

const GridItem = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
}))

const VisualisationsTab = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Grid container>
                <GridItem item xs={12} md={6}> 
                    <Typography component="h2" variant='h6'>Dependants by Country</Typography>
                    <Paper>
                        <BasicPie />
                    </Paper>
                </GridItem>
                <GridItem item xs={12} md={6}>
                    <Typography component="h2" variant='h6'>Various Age groups</Typography>
                    <Paper>
                        <BasicScatter />
                    </Paper>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default VisualisationsTab;