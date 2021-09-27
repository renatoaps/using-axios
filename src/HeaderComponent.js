import "./App.css";
import { Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <div className="header-component">
      <Header as="h2" color="blue">
        <Icon loading name="spinner" />
        <Header.Content>
          Learning React
          <Header.Subheader>React CRUD using Axios</Header.Subheader>
        </Header.Content>
      </Header>
      <div class="ui secondary pointing menu">
        <div class="right menu">
          <Link to="/create">
            <a class="active item">Create</a>
          </Link>
          <Link to="/read">
            <a class="item">Read</a>{" "}
          </Link>
          <Link to="/update">
            <a class="item">Update</a>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
