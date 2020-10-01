exports.getTodayDate = function()  {
    // current timestamp in milliseconds
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    let todayDate = date + "-" + month + "-" + year;

    // prints date & time in YYYY-MM-DD format
    console.log(todayDate);

     return todayDate;
}