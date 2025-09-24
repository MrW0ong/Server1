import { type JSX, useEffect, useState } from "react";

function TaskList(props: {
  task: Task[];
  // noinspection SpellCheckingInspection
  callbackfn: (t: any, index: any) => JSX.Element;
}) {
  return <ul>{props.task.map(props.callbackfn)}</ul>;
}
interface Task {
  id: number;
  description: string;
  completed: boolean;
}
export function Application() {
  const [task, setTask] = useState<Task[]>([]);

  function loadTasks() {
    setTask([
      { id: 0, description: "create project", completed: true },
      { id: 1, description: "create react webapp", completed: false },
      { id: 2, description: "create Hono backend", completed: false },
    ]);
  }

  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <TaskList
      task={task}
      callbackfn={(t, i) => <li key={t.id}>{t.description}</li>}
    />
  );
}
