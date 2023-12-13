
const Calculator = () => {
  const calculatorStyle = {width: "150px", height: "50px", fontSize: "20px", margin: "10px"};
  return (
    <div className="container mt-4">
      <div>Вы ввели:</div>
      <div>Результат:</div>
      <div className="d-flex flex-row flex-wrap" style={{width: "600px"}}>
        <button style={calculatorStyle} type="button">1</button>
        <button style={calculatorStyle} type="button">2</button>
        <button style={calculatorStyle} type="button">3</button>
        <button style={calculatorStyle} type="button">4</button>
        <button style={calculatorStyle} type="button">5</button>
        <button style={calculatorStyle} type="button">6</button>
        <button style={calculatorStyle} type="button">7</button>
        <button style={calculatorStyle} type="button">8</button>
        <button style={calculatorStyle} type="button">9</button>
      </div>
      <div className="d-flex flex-row flex-wrap" style={{width: "600px"}}>
        <button style={calculatorStyle} type="button">.</button>
        <button style={calculatorStyle} type="button">0</button>
        <button style={calculatorStyle} type="button">+</button>
        <button style={calculatorStyle} type="button">-</button>
        <button style={calculatorStyle} type="button">*</button>
        <button style={calculatorStyle} type="button">/</button>
        <button style={{width: "220px", height: "50px", fontSize: "20px", margin: "15px"}} type="button">=</button>
        <button style={{width: "220px", height: "50px", fontSize: "20px", margin: "15px"}} type="button">C</button>
      </div>
    </div>
  );
};

export default Calculator;