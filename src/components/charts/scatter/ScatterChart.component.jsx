import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import useMainContext from '@/hooks/useMain.context';

export default function BasicScatter() {
    const { users } = useMainContext();

    const mappedData = users.map((user, index) => {
        const birthDate = new Date(user.BirthDate);
        const today = new Date();
        const birthYear = birthDate.getFullYear();
        const thisYear = today.getFullYear();
        const age = parseInt(thisYear) - parseInt(birthYear);
        return {age, number: index + 1};
    });

    return (
        <ScatterChart
        width={400}
        height={300}
        series={[
            {
            label: 'Age',
            data: mappedData.map((v) => ({ x: v.number, y: v.age, id: v.number })),
            },
            {
            label: 'Total Users',
            data: mappedData.map((v) => ({ x: v.number, y: v.age, id: v.number })),
            },
        ]}
        />
    );
}
