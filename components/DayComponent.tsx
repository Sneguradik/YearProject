"use client"
import {IDayPlan} from "@/Logic/interfaces";
import styles from "@/styles/components/DayCoomponent.module.scss";
import {getShortDayName, getShortMonthName} from "@/Logic/Utils";
import {GiOpenBook} from "react-icons/gi";
import {GrGroup} from "react-icons/gr";
import {FaGears} from "react-icons/fa6";
import {RxDragHandleDots1} from "react-icons/rx";
import {IoPersonCircleOutline} from "react-icons/io5";
import {MdOutlineDeleteForever} from "react-icons/md";
import Input from "@/components/UIKit/Input";
import {FaArrowAltCircleUp, FaLongArrowAltUp} from "react-icons/fa";
import {MutableRefObject, useRef, useState} from "react";

export default function DayComponent({DayPlan}:{DayPlan : IDayPlan}) {

  const [plan, setPlan] = useState<IDayPlan>(DayPlan);

  const input = useRef() as MutableRefObject<HTMLInputElement>;

  const createNote = ()=>{
    const strings = plan.Notes;
    strings.push(input.current.value);
    // @ts-ignore
    setPlan({Notes:strings,...plan});
    input.current.value = "";
  }

  const deleteNote = (id:number) =>{

  }

  return(
    <div className={styles.container}>
      <h2 className={styles.title_date}>
        {getShortDayName(plan.Date)}, {plan.Date.getDate().toString()+" "+getShortMonthName(plan.Date)}
      </h2>
      <h3 className={styles.sub_title}>Activities</h3>
      <div className={styles.activities_container}>
        {plan.Activities.length==0?<span>There no activities</span>:
        plan.Activities.map((value, index) => {
          const endTime = new Date(value.Date.getTime() + 80*60000)
          return(
            <div key={index} className={styles.activity}>
              <div className={styles.activity_title}>
                <h2>{value.Name}</h2>
                <span>{value.Date.getHours()}:{value.Date.getMinutes()} - {endTime.getHours()}:{endTime.getMinutes()}</span>
              </div>
              <div className={styles.activity_specific_container}>
                {getType(value.Type)}
              </div>
              <span className={styles.teacher}><IoPersonCircleOutline/>{value.Teacher}</span>
            </div>
          )})}
      </div>
      <h3 className={styles.sub_title}>Notes</h3>
      <div className={styles.notes}>
        {plan.Notes.map((value, index) => {return(
          <span className={styles.note} key={index}><span onClick={()=>deleteNote(index)}/> {value}</span>
        )})}

      </div>
      <Input label={"New note"} Icon={FaArrowAltCircleUp} inputRef={input} onClickIcon={createNote}/>
    </div>
  );
}

const getType = (type:string)=>{
  switch (type){
    case "Lecture":
      return(
        <div className={styles.activity_specific}>
          <GiOpenBook/>
          {type}
        </div>
      )
    case "Seminar":
      return(
        <div className={styles.activity_specific}>
          <GrGroup/>
          {type}
        </div>
      )
    case "Practical class":
      return(
        <div className={styles.activity_specific}>
          <FaGears/>
          {type}
        </div>
      )
    default:
      return (
        <div className={styles.activity_specific}>
          <RxDragHandleDots1/>
          {type}
        </div>
      )
  }
}
