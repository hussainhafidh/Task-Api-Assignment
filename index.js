const express = require("express");
const uuid = require("uuid")
const mongoose = require("mongoose");
// const taskRoute = require()



require("dotenv").config()



const router = express.Router;


let tasks = [];

//as per Question: creating a new task
router.post("/v1/tasks", (req, res) => {
    const { title } = req.body;
    const newTask = {
        id: uuid.v4(),
        title,
        is_completed: false,
    };
    tasks.push(newTask);
    res.status(201).json({ id: newTask.id });
});

//List all task that is created
router.get("/v1/tasks", (req, res) => {
    res.status(200).json({ tasks });
})


// to Get a specific task
router.get("/v1/tasks/:id", (req, res) => {
    const { id } = req.params;
    const task = task.find(task => task.id === id);
    if (!task) {
        res.status(404).json({ error: "There is no task at that id" });
    } else {
        res.status(200).json(task);

    }
});

// to  Delete a specific task


router.delete("v1/tasks/:id", (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task = task.id !== id);
    res.status(204).end();
});

//Edit the title or completion of a specific task

router.put("/v1/tasks/:id", (req, res) => {
    const { id } = req.params;
    const { title, is_completed } = req.body;

    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
        res.status(404).json({ error: "There is no task at that id" });
    } else {
        tasks[taskIndex].title = title || tasks[taskIndex].title;
        tasks[taskIndex].is_completed = is_completed !== undefined ? is_completed :
            task[taskIndex].is_completed;
        res.status(204).end();
    }
});

//to Bulk add tasks


router.post("/v1/tasks", (req, res) => {
    const { tasks: newTask } = req.body;
    const addedTasks = newTasks.map(task => {
        const newTask = {
            id: uuid.v4(),
            title: task.title,
            is_completed: task.is_completed !== undefined ? task.is_completed : false,
        };
        tasks.push(newTask);
        return { id: newTask.id };
    });
    res.status(201).json({ tasks: addedTasks });
});


module.exports = router
