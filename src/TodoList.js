class TodoList {
    constructor() {
        this.id = 1
        this.items = []
    }
    
    createTodo(description) {
        const newItem = {
            id: this.id++,
            text: description,
            isComplete: false
        }
        this.items.push(newItem)
        
        return newItem
    }

    setItemComplete(ID) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === ID) {
                this.items[i].isComplete = true;
                return this.items[i]
            }
        }
    }

    getCompleteItems() {
        const completeItems = []

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].isComplete) {
                completeItems.push(this.items[i])
            }
        }

        return completeItems
    }

    getIncompleteItems() {
        const incompleteItems = []

        for (let i = 0; i < this.items.length; i++) {
            if (!this.items[i].isComplete) {
                incompleteItems.push(this.items[i])
            }
        }

        return incompleteItems
    }

    searchTodoList(ID) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === ID) {
                return this.items[i]
            }
        }

        return 'This Item does not exist :('
    }

    removeItem(ID) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === ID) {
                this.items.splice(i, 1)
                return this.items
            }
        }
    }
    
    getTodoList() {
        return this.items
    }
}
// const todoList = new TodoList()
// console.log(todoList.createTodo("hdsfi"))
// console.log(todoList.createTodo("hdsSDFfi"))
// console.log(todoList.createTodo("hdsSDFfsdfsdfi"))
// console.log(todoList.setItemComplete(1))
// console.log(todoList.setItemComplete(2))
// console.log(todoList.getCompleteItems())
// console.log(todoList.getIncompleteItems())
// console.log(todoList.searchTodoList(2))
// console.log(todoList.removeItem(3))

module.exports = TodoList
