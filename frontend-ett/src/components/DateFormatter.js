const DateFormatter = (timestamp) => {
  const splits = timestamp.split('T').join('-').split('.').join('-').split('-');
  switch (splits[1]) {
    case '01':
      splits[1] = "January"
      break;
    case '02':
      splits[1] = "February"
      break;
    case '03':
      splits[1] = "March"
      break;
    case '04':
      splits[1] = "April"
      break;
    case '05':
      splits[1] = "May"
      break;
    case '06':
      splits[1] = "June"
      break;
    case '07':
      splits[1] = "July"
      break;
    case '08':
      splits[1] = "August"
      break;
    case '09':
      splits[1] = "September"
      break;
    case '10':
      splits[1] = "October"
      break;
    case '11':
      splits[1] = "November"
      break;
    case '12':
      splits[1] = "December"
      break;
  }
  return (splits[1] + " " + splits[2]+', '+splits[0]);
}

export default DateFormatter;