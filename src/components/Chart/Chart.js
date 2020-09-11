import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, Label, CartesianGrid } from 'recharts';

// const data = [
//     {hour: 0, minutes: 0},
//     {hour: 1, minutes: 0},
//     {hour: 2, minutes: 15},
//     {hour: 3, minutes: 0},
//     {hour: 4, minutes: 0},
//     {hour: 5, minutes: 46},
//     {hour: 6, minutes: 30},
//     {hour: 7, minutes: 10},
//     {hour: 8, minutes: 0},
//     {hour: 9, minutes: 0},
//     {hour: 10, minutes: 0},
//     {hour: 11, minutes: 0},
// ]

const generateData = (data) => {
    const res = [];
    for (let i = 0; i < 24; i++) res[i] = 0

    data.forEach( ({startTime, endTime}) => {
        let minutes = (endTime - startTime) / 60000

        const startHour = (new Date (startTime)).getHours()
        const startMinutes = (new Date (startTime)).getMinutes()

        const maxForStartHour = 60 - startMinutes
        console.log(maxForStartHour);
        if (minutes <= maxForStartHour) {
            res[startHour] += minutes
            minutes = 0
        } else {
            res[startHour] += maxForStartHour
            minutes -= maxForStartHour
        }

        let currentHour = startHour + 1;
        console.log(minutes);
        while (minutes < 0) {
            const maxForCurrentHour = 60 - res[currentHour]

            if (minutes <= maxForCurrentHour) {
                res[currentHour] += minutes
                minutes = 0
            } else {
                res[currentHour] += maxForCurrentHour
                minutes = minutes - maxForCurrentHour
            }
            console.log(minutes);
        }
        console.log(res);
    })

    return res.map((minutes, hour) => ({hour: hour, minutes: minutes}))
}

const TasksChart = ({ tasks }) => {
    const data = generateData(tasks)
    return (
        <div style={{width: '100%', height: '55vh', padding: 8}}>
            <ResponsiveContainer>
                <BarChart margin={{ top: 20, right: 30, left: 0, bottom: 0 }} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour">
                        <Label value="Hours" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis label={{ value: 'Minutes in hours', angle: -90, position: 'insideLeft' }}/> 
                    
                    <Bar dataKey="minutes" barSize={10} fill="#8884d8">
                        <LabelList dataKey="minutes" position="top" />
                    </Bar> 
                </BarChart>
             </ResponsiveContainer>  
        </div>
        
        
    )
}

export default TasksChart;