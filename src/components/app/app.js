import { Component } from 'react';
import nextId from "react-id-generator";


import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       data: [
        {name: 'Vadim Z.', salary: 500, increase: false, rise: true, id: 1},
        {name: 'Ivan P.', salary: 3000, increase: false, rise: false, id: 2},
        {name: 'Alex C.', salary: 5000, increase: false, rise: false, id: 3},
      ],
      term: '',
      filter: 'all'

    }
  }



 deleteItem = (id) => {
  this.setState(({data}) => ({
    data: data.filter(item => item.id !== id)
  }))
 }

 additem = (name, salary) => {
  const newItem = {
    name,
    salary,
    increase: false,
    rise: false,
    id: nextId()
  }
  if(name.value !== 0 && salary.value !== 0)
  this.setState(({data}) => {
    const newData = [...data, newItem]
    return {
      data: newData
    }
  })
 }



onToggleProps = (id, props) => {
  this.setState(({data}) => ({
    data: data.map(item => {
      if(item.id === id) {
        return {
          ...item, [props]: !item[props]
        }
      }
      return item
    })
  }))
}
searchEmployee = (items, term) => {
  if (term.length === 0) {
    return items
  }
  return items.filter(item => item.name.indexOf(term) > -1)

}
onUpdateSearch = (term) => {
  this.setState({term: term})
}

onFilterSearch = (items, filter) => {
  switch (filter) {
    case 'rise':
      return items.filter(item => item.rise === true)
    case 'moreThen1000':
      return items.filter(item => item.salary > 1000)
    default: 
      return items
  }
}
onFilterSelect = (filter) => {
  this.setState({filter: filter})
}

onChangeSalary = (id, salary) => {
  this.setState(({data}) => ({
    data: data.map(item => {
      if(item.id === id) {
        return {...item, salary: salary.replace(/\D/g, '')}
      }
      return item
    })
  }))
   
}



  render() {
    const {data, term, filter} = this.state;
    const employeeLength = this.state.data.length;
    const riseLength = this.state.data.filter(item => item.rise === true).length;
    const visibleData = this.onFilterSearch(this.searchEmployee(data, term), filter)

    return (
      <div className="app">
          <AppInfo
          emplLen={employeeLength}
          riseLen={riseLength}
          />

          <div className="search-panel">
              <SearchPanel
                onUpdateSearch={this.onUpdateSearch}
              />
              <AppFilter
              onFilterSelect={this.onFilterSelect}
              filter={filter}
              />
          </div>
          
          <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggle={this.onToggleProps}
          onChangeSalary={this.onChangeSalary}

          />
          <EmployeesAddForm
          onAdd={this.additem}/>
      </div>
    );
  }
}

export default App;
