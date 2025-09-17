import { useState } from "react";

export function Application() {
  const [task, setTask] = useState([
    { description: "something" },
    { description: "something else" },
  ]);

  return (
    <>
      <h1>My Task</h1>
      <ul>
        {task.map((t, index) => (
          <li>{t.description}</li>
        ))}
      </ul>
    </>
  );
}
