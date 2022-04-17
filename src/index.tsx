import "./styles/main.scss"
import { createRoot } from 'react-dom/client';
import { App } from './App';


const jsx = (
  <App />
)

const root = createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(jsx);
