import React from "react";

import { useAuth } from "../../Contexts/AuthContext";
import Admin from "./Admin"

const AdminPage = () => {
  const { isAdmin } = useAuth();
  if (isAdmin) {
    return (
      <>
        <Admin />
      </>
    );
  } else {
    return <div>Restricted</div>;
  }
};

export default AdminPage;
