import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../Store/store';
import {task, add, answerResult, remove, subtract, multiply, divide} from './calculatorSlice';

const Calculator = () => {
  const calculatorStyle = {width: "150px", height: "50px", fontSize: "20px", margin: "10px", fontWeight: "500"};

  const { value, result } = useSelector((state: RootState) => state.calculator);
  const dispatch = useDispatch();


  const buttonClick = (value: number) => {
    dispatch(task(value));
  };

  const resultTask = () => {
    dispatch(answerResult());
  };

  const removeTask = () => {
    dispatch(remove());
  };


  return (
    <div className="container mt-4">
      <div>Вы ввели: {value}</div>
      <div>Результат: {result}</div>
      <div className="d-flex flex-row flex-wrap" style={{width: "600px"}}>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(1)}>1</button>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(2)}>2</button>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(3)}>3</button>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(4)}>4</button>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(5)}>5</button>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(6)}>6</button>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(7)}>7</button>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(8)}>8</button>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(9)}>9</button>
      </div>
      <div className="d-flex flex-row flex-wrap" style={{width: "600px"}}>
        <button style={calculatorStyle} type="button" onClick={() => buttonClick(0)}>0</button>
        <button style={calculatorStyle} type="button" onClick={() => dispatch(add(Number('+')))}>+</button>
        <button style={calculatorStyle} type="button" onClick={() => dispatch(subtract(Number('-')))}>-</button>
        <button style={calculatorStyle} type="button" onClick={() => dispatch(multiply(Number('*')))}>*</button>
        <button style={calculatorStyle} type="button" onClick={() => dispatch(divide(Number('/')))}>/</button>
        <button style={calculatorStyle}
                type="button"
                onClick={resultTask}
        >=</button>
        <button style={{width: "220px", height: "50px", fontSize: "20px", margin: "15px"}}
                type="button"
                onClick={removeTask}
        >C</button>
      </div>
    </div>
  );
};

export default Calculator;