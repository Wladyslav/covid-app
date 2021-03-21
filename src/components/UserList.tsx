import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
  const { covidData, error, loading } = useTypedSelector(
    (state) => state.covidData
  );
  const { fetchUsers } = useActions();
  console.log(covidData.result);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Bład{error}</h1>;
  }

  return <div></div>;
};

export default UserList;
