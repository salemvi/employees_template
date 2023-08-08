import "./app-info.css";

const AppInfo = ({emplLen, riseLen}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N </h1>
            <h2>Общее число сотрудников: {emplLen}</h2>
            <h2>Премию получат: {riseLen}</h2>
        </div>
    )
}

export default AppInfo;