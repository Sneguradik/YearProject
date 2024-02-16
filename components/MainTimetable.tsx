import styles from "@/styles/components/MainTimeTable.module.scss";
import Button from "@/components/UIKit/Button";
import {IDayPlan, IMainTimeTable} from "@/Logic/interfaces";
import {CSSProperties} from "react";
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
  const colors:CSSProperties = DayPlan.Date.getDay() == 0?
    {backgroundColor:"rgba(146,20,12,.2)", color: "#92140C"} :
    {backgroundColor:"rgba(84,140,47,.2)",color:"#548C2F"};
  return (
    <div className={styles.table_section}>
      <div>
        <span className={styles.table_section_date} style={colors}>
          {DayPlan.Date.getDate()} {Months[DayPlan.Date.getMonth()]}
        </span>
      </div>

    </div>
  )
}
