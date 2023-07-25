import { useEffect, useState } from 'react'

const TaskDetails = ({ holiday, taskID }) => {
    
    const [task, setTask] = useState('')

    useEffect(() => {
        const fetchTask = async () => {
            const response = await fetch ('/api/holidays/task/' + taskID)
            const json = await response.json()

            if (response.ok) {
                setTask(json)
            }
        }

        fetchTask()
    }, [])

    const handleClick = async () => {
        holiday.taskList.pop(taskID)
        const response = await fetch('/api/holidays/' + holiday._id, {
            method: 'PATCH',
            body: JSON.stringify(holiday),
            headers: {
                'Content-Type': 'application/json'
        }
        })
        const json = await response.json()
        if (response.ok) {
            console.log("Holiday updated: " + json)
        }
    }

    return (
        <div className="holiday-details">
            <h4>{task.name}</h4>
            <p><strong>Due date: </strong>{task.dueDate}</p>
            <p><strong>Completed? </strong>{task.completed}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default TaskDetails