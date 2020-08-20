// node server setup
//
// Express makes it easier to write node server codes.
// you first need to install express by => npm insall express --save or -s
// from there you can then move

// update a todo based on an id using put

const express = require("express");

const port = 5000;

let todos = [{ id: 1, task: "call mom", date: "20/08/2020", completed: false }];

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(201).json(todos);
});

app.get("/:id", (req, res) => {
  id = req.params.id;

  //   for todo in todos:
  //     if todo.get("id") == id:
  //         print(todo)

  //   todos.forEach((it, ind) => {
  //     if (it.id === id) {
  //       console.log();
  //       res.send(it);
  //     }
  //   });

  todos.forEach((todo) => {
    if (todo.id == id) {
      return res.status(200).json(todo);
    }
  });

  res.status(404).json({ error: "todo not found" });
});

app.delete("/:id", (req, res) => {
  id = req.params.id;
  const newTodos = [];

  todos.forEach((todo) => {
    if (todo.id != id) {
      newTodos.push(todo);
    }
  });

  todos = newTodos;

  res.status(204).send();
});

app.post("/", (req, res) => {
  todo = req.body;
  todo.id = todos.length + 1;
  todos.push(todo);

  res.status(201).send();
});

app.put("/:id", (req, res) => {
  const todoID = req.params.id;
  const update = req.body;

  todos.forEach((todo) => {
    if (todo.id == todoID) {
      // todo = update;
      if (update.completed != undefined) {
        todo.completed = update.completed;
      }

      if (update.task != undefined) {
        todo.task = update.task;
      }

      if (update.date != undefined) {
        todo.date = update.date;
      }
    }

    newTodos.push(todo);
  });

  todos = newTodos;

  // res.send("PUT request");
});

app.listen(port, () => {
  console.log("Server is running......");
});
