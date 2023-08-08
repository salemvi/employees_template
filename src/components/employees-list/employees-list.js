import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggle, onChangeSalary}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployeesListItem 
            key={id}  
            {...itemProps}
           onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}
           onDelete={() => onDelete(id)}
           onChangeSalary={(e) => onChangeSalary(id, e.target.value)}
           />
           
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;