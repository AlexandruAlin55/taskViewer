import "./App.css";
import TaskCard from "./components/task-card/TaskCard";
import TaskViewer from "./components/taskViewer";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      name: "Alin are mere.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
  ];

  return (
    <div className="app-container">
     <TaskViewer tasks={data} ></TaskViewer>
    </div>
  );
}

export default App;
