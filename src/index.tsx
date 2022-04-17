import "./styles/main.scss"
import { createRoot } from 'react-dom/client';
import { App }        from './App';
import { Provider }   from "react-redux";
import { setupStore } from "./redux/store";




const store = setupStore()

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)

const root = createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(jsx);
