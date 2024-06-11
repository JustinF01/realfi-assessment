import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import useMainContext from '@/hooks/useMain.context';

export default function BasicPie() {
    const {users} = useMainContext();
    const mappedData = users.map((user, index) => ({id: index, value: user.Dependants, label: user.Country}));
    return (
        <PieChart
        series={[
            {
            data: mappedData,
            },
        ]}
        width={450}
        height={300}
        />
    );
}
