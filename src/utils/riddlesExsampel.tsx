  export type riddle = {
    taskDescription:string,
    correctAnswer:string,
    timelimit:number,
    name:string|null,
    difficulty:string,
    _id:string|null,
    id:number|null|string
  }


export const questionsExampel:riddle[] = [
  {
    taskDescription: "5+5?",
    correctAnswer: "10",
    timelimit: 1,
    difficulty:"easy",
    _id:"",
    name: "math",
    id:1
  },
    {
    taskDescription: "5+15?",
    correctAnswer: "20",
    timelimit: 1,
    difficulty:"easy",
    _id:"",
    name: "math",
    id:1
  },
    {
    taskDescription: "15+15?",
    correctAnswer: "30",
    timelimit: 1,
    difficulty:"easy",
    _id:"",
    name: "math",
    id:1
  },
]