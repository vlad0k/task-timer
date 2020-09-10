import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, Label, CartesianGrid } from 'recharts';

const data = [
    {hour: 0, minutes: 0},
    {hour: 1, minutes: 0},
    {hour: 2, minutes: 15},
    {hour: 3, minutes: 0},
    {hour: 4, minutes: 0},
    {hour: 5, minutes: 46},
    {hour: 6, minutes: 30},
    {hour: 7, minutes: 10},
    {hour: 8, minutes: 0},
    {hour: 9, minutes: 0},
    {hour: 10, minutes: 0},
    {hour: 11, minutes: 0},
]

const generateData = (data) => {
    if (!data) return []
    
    const res = []
    for (let i = 0; i < 24; i++) res[i] = 0

    data.forEach( ({startTime, endTime}) => {

        let startHour = (new Date(startTime)).getHours()
        let startMinutes = (new Date(startTime)).getMinutes()

        let minutes = (endTime - startTime) / 60000

        const maxForHour = []

        for (let i = startHour; i < 24; i++) {
            if (i === startHour) maxForHour[i] = 60 - startMinutes
            else maxForHour[i] = 60 - res[i]
        }

        for (let i = startHour; i < 24; i++) {
            if ( minutes >= maxForHour[i] ) {
                res[i] += maxForHour[i]
                minutes -= maxForHour[i]
            } else {
                res[i] += minutes
                minutes = 0
            }
        }
    })

    return res.map((minutes, hour) => ({hour: +hour, minutes: Math.ceil(minutes)}))
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

const formatTimer = duration => {
    let milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24)

    hours = (hours < 10) ? `0${hours}` : hours
    minutes = (minutes < 10) ? `0${minutes}` : minutes
    seconds = (seconds < 10) ? `0${seconds}` : seconds

    return {hours, minutes, seconds, milliseconds}
}