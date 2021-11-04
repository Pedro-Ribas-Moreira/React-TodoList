// import React, { useState, useEffect } from "react";
// import "./App.css";
// import ItemDiv from "./components/UI/ItemDiv";
// import MainDiv from "./components/Logic/MainDiv";
// import AddTodo from "./components/Logic/AddTodo";

// import Box from "@mui/material/Box";

// function App() {
//   const [currentItems, setCurrentItems] = useState([]);

//   useEffect(() => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       setCurrentItems([]);
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//       todos.sort(function (a, b) {
//         if (a.key < b.key) {
//           return 1;
//         }
//         // a must be equal to b
//         return 0;
//       });

//       setCurrentItems(todos);
//     }
//   }, []);

//   const addItemHandler = (item) => {
//     setCurrentItems((oldItems) => {
//       return [...oldItems, item];
//     });

//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     const todoItem = {
//       check: false,
//       priority: false,
//       title: item.title,
//       text: item.text,
//       key: item.key,
//     };
//     todos.push(todoItem);
//     localStorage.setItem("todos", JSON.stringify(todos));
//   };

//   const removeUserHandler = (id) => {
//     const newList = currentItems.filter((item) => item.key !== id);
//     setCurrentItems(newList);

//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }

//     const todoKey = id;
//     todos.forEach(function (todo) {
//       if (todo.key === todoKey) {
//         todos.splice(todos.indexOf(todo), 1);
//       }
//     });

//     localStorage.setItem("todos", JSON.stringify(todos));
//   };
//   // -------------------------------------------

//   const onCheckHandler = (id) => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     const key = id;
//     todos.forEach(function (todo) {
//       if (todo.key === key) {
//         todo.check = !todo.check;
//       }
//     });
//     localStorage.setItem("todos", JSON.stringify(todos));

//     setCurrentItems(todos);
//   };

//   const onPriorityHandler = (id) => {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//     const key = id;
//     todos.forEach(function (todo) {
//       if (todo.key === key) {
//         todo.priority = !todo.priority;
//       }
//     });
//     localStorage.setItem("todos", JSON.stringify(todos));

//     setCurrentItems(todos);
//   };

//   // --------------------------------------

//   const list = currentItems.map((e) => {
//     return (
//       <ItemDiv
//         deleteItem={removeUserHandler}
//         priorityItem={onPriorityHandler}
//         id={e.key}
//         title={e.title}
//         text={e.text}
//         isChecked={e.check}
//         isPriority={e.priority}
//         onCheck={onCheckHandler}
//       />
//     );
//   });

//   return (
//     <Box
//       sx={{
//         display: "grid",
//         placeContent: "center",
//         height: "100vh",
//         width: "100%",
//         background: "linear-gradient(to right, #E1E9E8, #E8EEED)",
//       }}
//     >
//       <MainDiv>{list}</MainDiv>

//       <AddTodo onNewItem={addItemHandler} />
//     </Box>
//   );
// }

// export default App;

import React from "react";
import Dashboard from "./components/Dashboard/Dashboard";

const App = (props) => {
  return <Dashboard />;
};

export default App;
