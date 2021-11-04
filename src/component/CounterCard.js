import { useState } from "react"

const CounterCard = () => {
    const [counter, setCounter] = useState(0)

    const counterHandler = (event) => {
        if (counter >= 0) {
            const { id } = event.target
            switch (id) {
                case "btnAdd":
                    setCounter(counter + 1)
                    break;

                case "btnSubtract":
                        setCounter(counter - 1)
                    break;
                default:
                    setCounter(counter + 0);
            }
        }
        else {
            setCounter(0)
        }
    }
    return (
        <section className="counter-section">
            <div className="card">
                <div className="center">
                    <div>
                        <h3 >Counter</h3>
                    </div>
                    <div >
                        <h1 id="Count">{counter}</h1>
                    </div>
                    <div className="btn">
                        <button id="btnAdd" onClick={counterHandler} >ADD Count</button>
                    </div>
                    <div className="btn">
                        <button id="btnSubtract" disabled={counter <= 0} onClick={counterHandler}>LOWER Count</button>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default CounterCard;