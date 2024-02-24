import React from "react";
import {UUID} from "crypto";

export interface ILayout {
  children:React.ReactNode
}

export interface IActivity {
  Name: string,
  Date: Date,
  Type: string,
  Teacher: string
}

export interface IDayPlan {
  Activities : Array<IActivity>,
  Date: Date,
  Notes: Array<string>
}

export interface ICourse {
  Id : UUID,
  Name : string,

}

export interface IMainTimeTable {
  Days: Array<IDayPlan>
}

export interface IDayPlanPage {
  params:{
    slug : string
  }
}
