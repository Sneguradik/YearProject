
export function ContactStyles(...args : (string|undefined)[]):string {return args.join(" ");}

export function isArranged(date : Date):boolean {
  const today  = new Date();
  return(
    date.getFullYear() >= today.getFullYear() &&
    date.getMonth() >= today.getMonth() &&
    date.getDate() >= today.getDate());
}
export function isToday(date : Date):boolean {
  const today  = new Date();
  return(
    date.getFullYear() == today.getFullYear() &&
    date.getMonth() == today.getMonth() &&
    date.getDate() == today.getDate());
}

const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

const Days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
]

export function getShortDayName(date:Date): string {return Days[date.getDay()];}
export function getShortMonthName(date:Date): string {return Months[date.getMonth()];}
