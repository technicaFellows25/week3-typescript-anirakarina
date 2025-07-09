// Create your interfaces and enum below:
interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
}

enum Priority {
    Low,
    Medium,
    High
}

interface TaskPriority extends Task {
    priority: Priority;
}
// Create your task below:
const task: TaskPriority = {
    id: 12345,
    title: "technica exercises",
    description: "code week 8 typescript exercise",
    dueDate: new Date("07/09/2025"),
    priority: Priority.High
}
// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(task);