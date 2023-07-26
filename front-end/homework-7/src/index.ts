type Person = {
  name: string;
  email: string;
  image: string;
  id: string;
  age: number;
};

//Pick
type User = Pick<Person, "name" | "email" | "age">;

//Omit
type User1 = Pick<Person, "image" | "id">;


type Task = {
  id: number;
  text: string;
  isComplited?: boolean;
  completedDate?: Date | undefined;
}

const task: Task = {
  id: 0,
  text: "Text",
}
console.log(task);

//Partial
function update(task: Task, patch: Partial<Task>) : Task {
  return {
    ...task,
    ...patch
  }
}

const t1 = update(task, {text: "Hello"});
console.log(t1);
task.id = t1.id;
task.text = t1.text;
console.log(task);

//Required
const task1: Task = {
  id: 1,
  text: "Text_1",
  isComplited: true,
  completedDate: new Date(),
}

function getCompleted(tasks: Task[]) {
  return tasks.filter(task => task.isComplited && task.completedDate) as Required<Task>[];
}

const tasks = getCompleted([task, task1]);
console.log(tasks);

//Record
type ThemeParams = {
  fontSize: number,
  color: string
};

type Theme = "light" | "dark";

type AppTheme = Record<Theme, ThemeParams>;

const t: AppTheme = {
  light: {
    fontSize: 20,
    color: "white"
  },
  dark: {
    fontSize: 30,
    color: "black"
  }
};
console.log(t);