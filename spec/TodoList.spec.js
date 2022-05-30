const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heating on!",
      isComplete: false
    }
    // execute
    const result = todoList.createTodo("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  });

  it("gets Todo List", () => {
    // set up
    const todoList = new TodoList()

    todoList.createTodo("turn the heating on!")
    todoList.createTodo("grab a blanket")

    const expected = [{
      id: 1,
      text: "turn the heating on!",
      isComplete: false
    }, {
      id: 2,
      text: "grab a blanket",
      isComplete: false
    }]
    // execute
    const result = todoList.getTodoList()
    // verify
    expect(result).toEqual(expected)
  });

  it("sets task to Complete via ID", () => {
    // set up
    const todoList = new TodoList()

    todoList.createTodo("turn the heating on!")

    const expected = {
      id: 1,
      text: "turn the heating on!",
      isComplete: true
    }
    // execute
    const result = todoList.setItemComplete(1)
    // verify
    expect(result).toEqual(expected)
  });

  it("gets all complete items", () => {
    // set up
    const todoList = new TodoList()

    todoList.createTodo("turn the heating on!")
    todoList.createTodo("grab a blanket")
    todoList.createTodo("grab some socks")
    todoList.setItemComplete(1)
    todoList.setItemComplete(3)

    const expected = [{
      id: 1,
      text: "turn the heating on!",
      isComplete: true
    }, {
      id: 3,
      text: "grab some socks",
      isComplete: true
    }]
    // execute
    const result = todoList.getCompleteItems()
    // verify
    expect(result).toEqual(expected)
  });

  it("gets all incomplete items", () => {
    // set up
    const todoList = new TodoList()

    todoList.createTodo("turn the heating on!")
    todoList.createTodo("grab a blanket")
    todoList.createTodo("grab some socks")
    todoList.setItemComplete(1)

    const expected = [{
      id: 2,
      text: "grab a blanket",
      isComplete: false
    }, {
      id: 3,
      text: "grab some socks",
      isComplete: false
    }]
    // execute
    const result = todoList.getIncompleteItems()
    // verify
    expect(result).toEqual(expected)
  });

  it("search for Item via ID", () => {
    // set up
    const todoList = new TodoList()

    todoList.createTodo("turn the heating on!")
    todoList.createTodo("grab a blanket")
    todoList.createTodo("grab some socks")

    const expected = {
      id: 2,
      text: "grab a blanket",
      isComplete: false
    }
    // execute
    const result = todoList.searchTodoList(2)
    // verify
    expect(result).toEqual(expected)
  });

  it("invalid search for Item with that ID", () => {
    // set up
    const todoList = new TodoList()

    todoList.createTodo("turn the heating on!")
    todoList.createTodo("grab a blanket")
    todoList.createTodo("grab some socks")

    const expected = 'This Item does not exist :('
    // execute
    const result = todoList.searchTodoList(5)
    // verify
    expect(result).toEqual(expected)
  });

  it("remove an Item via ID", () => {
    // set up
    const todoList = new TodoList()

    todoList.createTodo("turn the heating on!")
    todoList.createTodo("grab a blanket")
    todoList.createTodo("grab some socks")

    const expected = [{
      id: 1,
      text: "turn the heating on!",
      isComplete: false
    }, {
    id: 2,
      text: "grab a blanket",
      isComplete: false
    }]
    // execute
    const result = todoList.removeItem(3)
    // verify
    expect(result).toEqual(expected)
  });
})
