import { type JSX, useState } from "react";

function TaskList(props: {
  task: { summary: string; completed: boolean }[];
  callbackfn: (t: any, index: any) => JSX.Element;
}) {
  return <ul>{props.task.map(props.callbackfn)}</ul>;
}

export function Application() {
  const [task, setTask] = useState([
    { summary: "something", completed: true },
    { summary: "something else", completed: false },
  ]);

  return (
    <>
      <h2>My Tasks</h2>
      <TaskList
        task={task}
        callbackfn={(t, index) => (
          <li>
            <label>
              <input type={"checkbox"} checked={t.completed} /> {t.summary}
            </label>
          </li>
        )}
      />
      <h2>New tasks</h2>
    </>
  );
}
