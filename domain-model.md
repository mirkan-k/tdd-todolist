// Add your domain model below

TodoItem (object)#
- PROPERTIES
  - ID: (integer/number)
  - description: (string)
  - isComplete: (boolean, = false as default)

TodoList (class)
- PROPERTIES
  - nextID: initially = 1
  - items (an array of TodoItems)
- METHODS (functions)
  - createTodo(inputs: description): return updated item
  - getTodoList(): return all todo items in todo list
  - setItemComplete(input: ID): return updated item
  - getIncompleteItems(): return todo items with isComplete = false
  - getCompleteItem(): return todo items with isComplete = true
  - searchItem(input: ID): if Item exists return Item with matching ID, if not return 'This Item does not exist :('
  - removeItem(input: ID): return updated todo list with specified Item removed
