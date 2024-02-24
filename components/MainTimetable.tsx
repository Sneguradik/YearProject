"use client"
import styles from "@/styles/components/MainTimeTable.module.scss";
import Button from "@/components/UIKit/Button";
import {IDayPlan, IMainTimeTable} from "@/Logic/interfaces";
import {CSSProperties, MouseEventHandler, MutableRefObject, useEffect, useRef, useState} from "react";
import {ContactStyles, getShortDayName, getShortMonthName, isArranged, isToday} from "@/Logic/Utils";
import {useParams, usePathname, useRouter} from "next/navigation";
export default function MainTimetable({Days}:IMainTimeTable) {

  const router = useRouter();

  return(
    <>
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
            return(<TableSection key={i} DayPlan={value} onClick={()=>{
              router.push(`/dayplan/${value.Date.toDateString()}`)
            }}/>)
          })}
        </div>
      </div>
    </>

  )
}





function TableSection({DayPlan, onClick}:{DayPlan: IDayPlan, onClick?: MouseEventHandler<HTMLDivElement>}) {
  const colors:CSSProperties = DayPlan.Date.getDay() == 0?
    {backgroundColor:"rgba(146,20,12,.2)", color: "#92140C"} :
    {backgroundColor:"rgba(84,140,47,.2)",color:"#548C2F"};

  const arranged = isArranged(DayPlan.Date);
  return (
    <div className={ContactStyles(styles.table_section,isToday(DayPlan.Date)?styles.table_section_today:"")} onClick={onClick}>
      {!arranged?<div className={styles.table_section_arranged}></div>:<></>}
      <div className={styles.table_section_date}>
        <span style={colors}>
          {DayPlan.Date.getDate()} {getShortMonthName(DayPlan.Date)}
        </span>
        <span style={{backgroundColor:"rgba(45,48,250,.2)",color:"#2d30fa"}}>
          {getShortDayName(DayPlan.Date)}
        </span>
      </div>
      {DayPlan.Activities.length==0?<span className={styles.table_section_activity_title}>No activities today</span>:
        <>
          <span className={styles.table_section_activity_title}>Activities</span>
          <div>

          </div>
        </>}
    </div>
  )
}
