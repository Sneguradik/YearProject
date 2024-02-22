import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss"
import MainTimetable from "@/components/MainTimetable";
import {FaListUl} from "react-icons/fa";
import {FaUserGraduate} from "react-icons/fa6";
import {IoIosStats} from "react-icons/io";
import {GrSchedules} from "react-icons/gr";
import {IDayPlan} from "@/Logic/interfaces";


export default function Home() {
  const data : IDayPlan[] = [
    {
      Activities:[],
      Notes: [],
      Date: new Date(2024,1,12)
    },
    {
      Activities:[{
        Name: "Project seminar",
        Date: new Date(2024, 1, 13, 13, 0),
        Type: "Seminar",
        Teacher: "John Doe"
      },{
        Name: "Calcus",
        Date: new Date(2024, 1,13, 14,40),
        Type: "Lecture",
        Teacher: "John Doe"
      }],
      Notes: [
        "Prepare for test",
      ],
      Date : new Date(2024, 1, 13)
    },
    {
      Activities:[{
        Name: "Calculus",
        Date : new Date(2024,1,14, 14,40),
        Type : "Seminar",
        Teacher: "John Doe"
      }],
      Notes: [],
      Date: new Date(2024,1,14)
    },
    {
      Activities:[{
        Name: "Calculus",
        Date : new Date(2024,1,15, 14,40),
        Type : "Seminar",
        Teacher: "John Doe"
      }],
      Notes: [],
      Date: new Date(2024,1,15)
    },
    {
      Activities:[{
        Name: "Project seminar",
        Date: new Date(2024, 1, 16, 13, 0),
        Type: "Seminar",
        Teacher: "John Doe"
      },{
        Name: "Calcus",
        Date: new Date(2024, 1,16, 14,40),
        Type: "Lecture",
        Teacher: "John Doe"
      }],
      Notes: [],
      Date : new Date(2024, 1, 16)
    },
    {
      Activities:[],
      Notes: [],
      Date: new Date(2024,1,17)
    },
    {
      Activities:[],
      Notes: [],
      Date: new Date(2024,1,18)
    }
  ]

  return (
    <div className={styles.main_wrapper}>
      <main className={styles.main}>
        <div className={styles.nav_buttons}>
          <div className={styles.nav_btn}>
            <FaListUl/>
            <div>
              <h2>Tasks</h2>
              <span>Here you can monitor your open tasks.</span>
            </div>
            <span>You have 8 new tasks. 5 are expiring in nearest 3 days.</span>
          </div>
          <div className={styles.nav_btn}>
            <FaUserGraduate/>
            <div>
              <h2>Courses</h2>
              <span>Here you can manage your courses.</span>
            </div>
            <span>You have 8 new tasks. 5 are expiring in nearest 3 days.</span>
          </div>
          <div className={styles.nav_btn}>
            <IoIosStats/>
            <div>
              <h2>Stats</h2>
              <span>Here you can monitor your marks and stats.</span>
            </div>
            <span>You have 8 new tasks. 5 are expiring in nearest 3 days.</span>
          </div>
          <div className={styles.nav_btn}>
            <GrSchedules/>
            <div>
              <h2>Timetable</h2>
              <span>Here you can monitor your open tasks.</span>
            </div>
            <span>You have 8 new tasks. 5 are expiring in nearest 3 days.</span>
          </div>
        </div>

        <MainTimetable Days={data}/>
      </main>
    </div>

  );
}
