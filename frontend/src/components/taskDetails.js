import { useEffect, useState } from 'react'

const TaskDetails = ({ taskID }) => {
    
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

    return (
        <div className="holiday-details">
            <h4>{task.name}</h4>
            <p><strong>Due date: </strong>{task.dueDate}</p>
            <p><strong>Completed? </strong>{task.completed}</p>
        </div>
    )
}

export default TaskDetails