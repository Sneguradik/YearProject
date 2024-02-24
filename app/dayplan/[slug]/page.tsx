import styles from "@/styles/pages/dayplan/DayPlan.module.scss"
import DayComponent from "@/components/DayComponent";
import {IDayPlan, IDayPlanPage} from "@/Logic/interfaces";
import {GetServerSideProps} from "next";
import {useRouter} from "next/navigation";
import {data} from "@/consts";



export default function DayPlanPage({params}:IDayPlanPage  ) {
  let plan : IDayPlan = {
    Activities:[],
    Notes: [],
    Date: new Date(2024,1,12)
  };
  const date = new Date(decodeURI(params.slug));
  for (const planElement of data) {
    if(date.toDateString() == planElement.Date.toDateString()) plan = planElement
  }

  return(
    <div className={styles.day_plan_container}>
      <DayComponent DayPlan={plan}/>
    </div>
  );
}


