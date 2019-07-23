import React from "react";
import Navigator from "./navigation/Navigator";
import NavigationService from "./navigation/NavigationService";

const App = () => {
  return (
        <Navigator ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
  );
};

export default App;
