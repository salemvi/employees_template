import './employees-list-item.css';

const EmployeesListItem = (props) => {

    const {name, salary, increase, rise, onDelete, onToggle, onChangeSalary} = props;


    const classIncrease = increase ? ' increase': '';
    const classRise = rise ? ' like' : '';

   

    return (
        <li className={"list-group-item d-flex justify-content-between" + classIncrease + classRise}>
            <span className="list-group-item-label " data-toggle='rise' onClick={onToggle}>{name}</span>
            <input type="text" className="list-group-item-input" onChange={onChangeSalary} defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm " data-toggle='increase'
                    onClick={onToggle}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}


export default EmployeesListItem;