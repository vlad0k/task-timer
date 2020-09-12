import { generateData } from './components/Chart/Chart'

it ('generates right data', () => {
    
    let tasks = [{"startTime":1599869355815,"taskName":"Task 1","endTime":1599872698106},{"startTime":1599877921964,"taskName":"Task 2","endTime":1599881185697},{"startTime":1599883445573,"taskName":"Task 3","endTime":1599884185209},{"startTime":1599885403193,"taskName":"Task 4","endTime":1599886494847},{"startTime":1599887828837,"taskName":"Task 5","endTime":1599889821572},{"startTime":1599894706753,"taskName":"Task 6","endTime":1599897408254},{"startTime":1599897589454,"taskName":"Task 7","endTime":1599898302195},{"startTime":1599898414898,"taskName":"Task 8","endTime":1599903674338},{"startTime":1599905932431,"taskName":"Task 9","endTime":1599909479800},{"startTime":1599918247183,"taskName":"Task 10","endTime":1599918742391},{"startTime":1599918439283,"taskName":"Task 11","endTime":1599923265717},{"startTime":1599925397338,"taskName":"Task 12","endTime":1599926311920},{"startTime":1599934690054,"taskName":"Task 13","endTime":1599939330409}]
    let expectedResult = [{"hour":0,"minutes":0},{"hour":1,"minutes":0},{"hour":2,"minutes":0},{"hour":3,"minutes":51},{"hour":4,"minutes":4},{"hour":5,"minutes":28},{"hour":6,"minutes":26},{"hour":7,"minutes":30},{"hour":8,"minutes":33},{"hour":9,"minutes":0},{"hour":10,"minutes":46},{"hour":11,"minutes":58},{"hour":12,"minutes":41},{"hour":13,"minutes":42},{"hour":14,"minutes":17},{"hour":15,"minutes":0},{"hour":16,"minutes":21},{"hour":17,"minutes":60},{"hour":18,"minutes":22},{"hour":19,"minutes":0},{"hour":20,"minutes":0},{"hour":21,"minutes":42},{"hour":22,"minutes":35},{"hour":23,"minutes":0}]

    let data = generateData(tasks)
    
    for ( let i of data) {
        expect(i).toMatchObject(expectedResult[(data.indexOf(i))])
    }
    
})