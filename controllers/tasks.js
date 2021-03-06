const Task = require('../models/tasks')

const getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch (error) {
        res.status(500).send('error')
    }
}

const createTask = async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        res.status(200).json({task});

    }
    catch (error){
        res.status(500).json({msg:error})
}
}
const updateTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true
        });
        res.status(200).json({task});

    }
    catch (error){
        res.status(500).json({msg:error})
}
}

const deleteTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        res.status(200).json({msg:"Item deleted"});

    }
    catch (error){
        res.status(500).json({msg:error})
}
}

module.exports = {getAllTasks,createTask,getTask,updateTask,deleteTask}