import { useState } from "react";

export function Application() {
  const [task, setTask] = useState([
    { summary: "something", completed: true },
    { summary: "something else", completed: false },
  ]);

  return (
    <>
      <h1>My Tasks</h1>
      <ul>
        {task.map((t, index) => (
          <li>
            <label>
              <input type={"checkbox"} checked={t.completed} /> {t.summary}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
