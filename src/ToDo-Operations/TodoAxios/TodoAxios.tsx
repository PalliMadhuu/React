import React, { FC } from 'react';
import './TodoAxios.css';
import axios from 'axios';


interface TodoAxiosProps { }
export function postToDo(data: any) {
    axios.post(' http://localhost:3000/To-Do', data).then(response => { console.log(response.data) }).catch(error => console.log(error))
}
export function deleteTask(task: any) {
    axios.delete(`http://localhost:3000/To-Do/${task}`)
        .then(response => {
            window.alert('Deleted Succesfully')

        })
        .catch(error => {
            window.alert(error)
        });
};
export function EditTask(taskId: any, updatedTask: any) {
    axios.put(`http://localhost:3000/To-Do/${taskId}`, updatedTask)
        .then(res => window.alert('task Saved SuccessFully'))
        .catch(error => console.log(error))
}
export async function getTaskById(taskId: any) {
    let data = await axios.get(`http://localhost:3000/To-Do/${taskId}`)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error;
        });

    return data;

}

const TodoAxios: FC<TodoAxiosProps> = () => (
    <div className="TodoAxios" data-testid="TodoAxios">
        TodoAxios Component
    </div>
);

export default TodoAxios;
