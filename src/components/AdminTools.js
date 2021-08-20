import React from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import { Switch, Route } from "react-router-dom";
import AdminBar from "./AdminBar";
import AddUser from "./AddUser";
import EditUsers from "./EditUsers";
import AddChild from "./AddChild";
import EditChildren from "./EditChildren";

const AdminTools = () => {
  const user = useContext(AuthContext);

  return (
    <div className="AdminTools">
      {user.currentUser.userType === "admin" && (
        <>
          <AdminBar />
          <Switch>
            <Route path="/admin-tools/add-user" component={AddUser} />
            <Route path="/admin-tools/edit-users" component={EditUsers} />
            <Route path="/admin-tools/add-child" component={AddChild} />
            <Route path="/admin-tools/edit-children" component={EditChildren} />
          </Switch>
        </>
      )}
    </div>
  );
};

export default AdminTools;
