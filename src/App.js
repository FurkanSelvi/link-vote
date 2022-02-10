
import Launcher from "./components/elements/Launcher";
import "./style/main.css";
import { Provider } from "react-redux";
import { store, persist } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
import Layout from "./components/elements/Layout";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Launcher />} persistor={persist}>
        <Layout />
      </PersistGate>
    </Provider>
  );
}

export default App;
