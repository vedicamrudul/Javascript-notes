let MyDate=new Date();
console.log(MyDate);
console.log(MyDate.toISOString());
console.log(MyDate.toJSON());
// toISOS and toJSON give complex value.
console.log(MyDate.toDateString());
// toDateString() gives 'day-of-week month day year'
console.log(MyDate.toTimeString());
// toTimeString() gives time in 'hours:mins:sec GMT+something ig'
console.log(MyDate.toLocaleDateString());
// toLocalDateString() gives date dd/mm/yyyy
console.log(MyDate.toLocaleString());
// toLocalString() gives dd/mm/yyyy, time.
console.log(MyDate.toString());
// toString() gives 'day-of-week month day year time.'