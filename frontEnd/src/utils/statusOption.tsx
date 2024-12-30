export enum TaskStatus {
    Pending = 0,
    Completed = 1,
 
  }

  export const TaskStatusOptions = [
    { label: "Pending", value: TaskStatus.Pending },
    { label: "Completed", value: TaskStatus.Completed },
];