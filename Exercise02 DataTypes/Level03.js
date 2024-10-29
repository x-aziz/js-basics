// ### **Exercises: Level 3**
// 1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
//     1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
let date = new Date();
let year = date.getFullYear();
let month = ("0" + date.getMonth() + 1).slice(-2);
let day = ("0" + date.getDate()).slice(-2);
let hour = ("0" + date.getHours()).slice(-2);
let minute = ("0" + date.getMinutes()).slice(-2);
console.log(year + "-" + month + "-" + day + " " + hour + ":" + minute);
