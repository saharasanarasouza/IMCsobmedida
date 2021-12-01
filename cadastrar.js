import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

const App = () => {
  const usersData = [
    { id: 1, name: "João Melo", username: "001" },
    { id: 2, name: "Flavia Melo", username: "002" },
    { id: 3, name: "Isabely Melo", username: "003" }
  ];

  const [users, setUsers] = useState(usersData);

  // ativar funcao de adicionar/atualizar usuario
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };