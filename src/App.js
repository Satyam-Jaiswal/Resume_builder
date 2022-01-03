import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HeartOutlined } from "@ant-design/icons";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

// Components
import Home from "./components/Home";
import CreateResume from "./components/createResume";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/create" component={CreateResume} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <strong style={{ float: "left", marginLeft: "10px" }}>
        Resume Builder
      </strong>
      <p style={{ float: "right", marginRight: "10px" }}>
        Made with <HeartOutlined /> by Satyam Jaiswal
      </p>
    </ThemeProvider>
  );
};

export default App;
