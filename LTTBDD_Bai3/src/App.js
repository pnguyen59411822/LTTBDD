import { Provider } from "react-redux";
import store from "./redux/stores/store";
import AppNavigation from "./navigations/app/AppNavigation";


const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;