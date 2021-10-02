const EventEmitter = require('events');
const emitter = new EventEmitter();

const msHour = 1000*60*60;
const msDay = msHour*24;
const msMonth = msDay*30;
const msYear = msDay*365;

const singleMsUnits = {
    hours: msHour,
    days: msDay,
    months: msMonth,
    years: msYear
}

const attrs = {
    hours: process.argv[2],
    date: process.argv[3],
    months: process.argv[4],
    years: process.argv[5],
}
const prepareTimersLeft = ()=>{
    const date = new Date(attrs.years, attrs.months, attrs.date, attrs.hours);
    // const timers = {};
    let difference = date.getTime()-Date.now();
    console.log(date.getTime()+" and "+Date.now()+" difference: "+difference);
    const years =   Math.floor( difference/msYear ) * msYear;
    difference -= years;
    const months =  Math.floor( difference /msMonth ) * msMonth;
    difference -= months;
    const days =    Math.floor( difference/msDay ) * msDay;
    difference -= days;
    const hours =   Math.floor( difference/msHour) * msHour;

    console.log("===== Timers =====\n :: hours:"+hours+"\n :: days:"+days+"\n :: months:"+months+"\n :: years:"+years);
    return {hours, days, months, years};
}

const allTimersValues = prepareTimersLeft();

const allTimersValues2 = {
    hours: attrs.hours*msHour,
    days: attrs.date*msDay,
    months: attrs.months*msMonth,
    years: attrs.years*msYear,
}



const TimerTypes = [
    {
        type: 'hours',
        payload: 'decrease 1 hour',
    },
    {
        type: 'days',
        payload: 'decrease 1 day',
    },
    {
        type: 'months',
        payload: 'decrease 1 month',
    },
    {
        type: 'years',
        payload: 'decrease 1 year',
    },
];

const run = async (period) => {
    emitter.emit(period.type, period.payload);
    await new Promise(resolve => setTimeout(resolve, 1000));
    await run(period);
  }

const completeMessage = (name)=>{
    console.log(`Timer '${name}' complete!`);
}




const decreaseTimer = (periodName)=>{
    allTimersValues[periodName] -= 1000;
    if(allTimersValues[periodName] >= 0){
        const floored = Math.floor(allTimersValues[periodName]/singleMsUnits[periodName]);
        // console.log(periodName+" left: \t"+allTimersValues[periodName]);
        console.log(periodName+" left: \t"+floored);
    }else{
        completeMessage(periodName)
        emitter.off(periodName);
    }
}


for(let period of TimerTypes){
    emitter.on(period.type, ()=>decreaseTimer(period.type));
    run(period);
}

