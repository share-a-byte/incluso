import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '18-24',
        uv: 5,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 10,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 25,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 25,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: '40-49',
        uv: 30,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: '50+',
        uv: 30,
        pv: 4800,
        fill: '#d0ed57',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};

export default class AgeGraph extends PureComponent {
    render() {
        return (
            <RadialBarChart width={900} height={400} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                <RadialBar
                    minAngle={15}
                    label={{ position: 'insideStart', fill: '#fff' }}
                    background
                    clockWise
                    dataKey="uv"
                />
                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
            </RadialBarChart>

        );
    }
}
