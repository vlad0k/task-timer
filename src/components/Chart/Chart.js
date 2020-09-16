import * as React from 'react';
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    ResponsiveContainer, 
    LabelList, 
    Label, 
    CartesianGrid 
} from 'recharts';

export const generateData = (data) => {
    const res = [...new Array(24).keys()].map(() => 0);
    
    data.forEach( ({startTime, endTime}) => {
        
        const startHour = (new Date (startTime)).getHours()
        const startMinutes = (new Date (startTime)).getMinutes()

        const endHour = (new Date (endTime)).getHours()
        const endMinutes = (new Date (endTime)).getMinutes()

        if (startHour === endHour) {
            res[startHour] += (endMinutes - startMinutes)
        }

        if (endHour > startHour) {
            let currentHour = startHour
            res[currentHour] += (60 - startMinutes)
            currentHour += 1
            while (currentHour !== endHour) {
                res[currentHour] = 60
                currentHour += 1
            }
            res[currentHour] += endMinutes
        }
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