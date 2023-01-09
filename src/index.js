import SidePanel from "./components/SidePanel";
import TodoEditDialog from "./components/TodoEditDialog";
import TodoPage from "./components/TodoPage";

const root = document.getElementById("root");
root.appendChild(TodoEditDialog());
root.appendChild(SidePanel());
const pagePanel = document.createElement("div");
pagePanel.id = "pagePanel";
pagePanel.appendChild(TodoPage());
root.appendChild(pagePanel);
