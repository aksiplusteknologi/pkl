function indonesianDate(my_date) {

    // return my_date

    // return my_date[2] + my_date[1] + my_date[0];
    if(!my_date) {
        return false
    }

    let str = my_date;
    let date = moment(str);

    return date.format('Do MMMM YYYY')

}

function getTimeZone()
{
    let raw_data = localStorage.getItem('sekolah');
    let sekolah = JSON.parse(raw_data)
    
    return sekolah.timezone.toUpperCase()
}


export default indonesianDate;