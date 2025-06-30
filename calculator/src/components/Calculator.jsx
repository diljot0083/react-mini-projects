import { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {

    const [input, setInput] = useState("");

    const handleClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput("");
    }

    const handleEqual = () => {
        try {
            const result = evaluate(input);
            setInput(String(result))
        } catch (error) {
            setInput("Error")
        }
    }

    return (
        <div>
            <input className="display" type="text" value={input} readOnly />

            <div className="buttons">
                {/* Row 1 */}
                <button onClick={handleClear} className="operator">C</button>
                <button onClick={() => handleClick("/")} className="operator">/</button>
                <button onClick={() => handleClick("*")} className="operator">*</button>
                <button onClick={() => handleClick("-")} className="operator">-</button>

                {/* Row 2 */}
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("+")} className="operator">+</button>

                {/* Row 3 */}
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={handleEqual} className="equal">=</button>

                {/* Row 4 */}
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("0")}>0</button>

                {/* Row 5 */}
                <button onClick={() => handleClick(".")}>.</button>
            </div>


        </div>
    )
}
export default Calculator;