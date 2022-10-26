import { useReducer, useState } from "react";
import styles from "./Home.module.css";

const defaultState = {
	value: 0,
};

const counterReducer = (state, action) => {
	if (action.type === "INCREAMENT") {
		const newValue = state.value + 1;
		return {
			value: newValue,
		};
	}

	if (action.type === "DECREAMENT") {
		const newValue = state.value - 1;
		return {
			value: newValue,
		};
	}

	if (action.type === "RESET") {
		const newValue = 0;
		return {
			value: newValue,
		};
	}

	if (action.type === "SETVALUE") {
		const setValue = action.value;
		return {
			value: setValue,
		};
	}
	return defaultState;
};
const Home = () => {
	const [number, setNumber] = useState(0);
	const [counterState, dispatch] = useReducer(counterReducer, defaultState);

	const increamentHandler = () => {
		dispatch({ type: "INCREAMENT" });
	};
	const decreamentHandler = () => {
		dispatch({ type: "DECREAMENT" });
	};
	const resetHandler = () => {
		dispatch({ type: "RESET" });
	};
	const setValueHandler = () => {
		dispatch({ type: "SETVALUE", value: number });
        setNumber(0)
	};
	return (
		<div>
			<div className={styles.counter}>{counterState.value}</div>
			<div className={styles.controls}>
				<button className={styles.inc} onClick={increamentHandler}>
					Increament
				</button>
				<button className={styles.dec} onClick={decreamentHandler}>
					Decreament
				</button>
				<button className={styles.res} onClick={resetHandler}>
					Reset
				</button>
				<div className={styles.setBox}>
					<input
						type="number"
						value={number}
						onChange={(e) => {
							setNumber(e.target.value);
						}}
					/>
					<button className={styles.resv} onClick={setValueHandler}>
						Reset Value
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
