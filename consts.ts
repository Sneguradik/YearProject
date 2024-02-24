import {IDayPlan} from "@/Logic/interfaces";

export const data : IDayPlan[] = [
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
