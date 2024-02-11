import styles from "@/styles/components/MainTimeTable.module.scss";
import Button from "@/components/UIKit/Button";
import {IDayPlan, IMainTimeTable} from "@/Logic/interfaces";
export default function MainTimetable({Days}:IMainTimeTable) {
  return(
    <div className={styles.container}>
      <div className={styles.controls}>
        <h2>Periods</h2>
        <div>
          <Button text={"Week"}/>
          <Button text={"Month"}/>
        </div>
      </div>

      <div className={styles.table}>
        {Days.map((value,i) => {
          return(<TableSection key={i} DayPlan={value}/>)
        })}
      </div>
    </div>
  )
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

function TableSection({DayPlan}:{DayPlan: IDayPlan}) {
  return (
    <div className={styles.table_section}>
      <span className={styles.table_section_date}>{DayPlan.Date.getDay()} {Months[DayPlan.Date.getMonth()-1]}</span>
    </div>
  )
}
