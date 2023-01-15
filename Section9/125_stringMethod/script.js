const flights = 'Delayed_Departure;';

console.log(flights.split('+'));

const getCode = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')){
   const [type,from,to,time] =  flight.split(';');
   const output = `${type.startsWith('Delayed') ? '*':''} ${type.replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} (${time.replace(':','h')})`.padStart(36);
   console.log(output);
}