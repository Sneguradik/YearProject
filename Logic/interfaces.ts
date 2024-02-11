import React from "react";

export interface ILayout {
  children:React.ReactNode
}

export interface IActivity {
  Name: string,
  Date: Date,
  Type: string,
  
}

export interface IDayPlan {
  Activities : Array<IActivity>,
  Date: Date,
  
}

export interface IMainTimeTable {
  Days: Array<IDayPlan>
}
