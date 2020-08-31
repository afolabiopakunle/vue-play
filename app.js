new Vue({
    el: "#app",
    data: {
        todos: [{
                task: "Watch Chelsea",
                done: false
            },
            {
                task: "Wash clothes",
                done: true
            },
            {
                task: "Watch Cartoon",
                done: false
            },
        ]
    },
    methods: {
        toggle: function (todo) {
            todo.done = !todo.done
        }
    }
})