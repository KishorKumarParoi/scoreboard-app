import { useDispatch, useSelector } from "react-redux";
import { addCounter, decrement, deleteCounter, increment, reset } from "../features/counter/counterSlice";
import Counter from "./Counter";
import Posts from './Posts';
import Stats from "./Stats";

export default function App() {
    const counters = useSelector((state) => state.counters);
    console.log(counters);
    const dispatch = useDispatch();

    const totalCount = counters.reduce(
        (sum, current) => sum + current.value,
        0
    );

    const handleIncrement = (counterId) => {
        dispatch(increment(counterId));
    };

    const handleDecrement = (counterId) => {
        dispatch(decrement(counterId));
    };

    const handleAddCounter = () => {
        dispatch(addCounter());
    };

    const handleReset = () => {
        dispatch(reset());
    };

    const handleDeleteMatch = (counterId) => {
        dispatch(deleteCounter(counterId));
    };


    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Scoreboard Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {counters.map((counter) => (
                    <Counter
                        count={counter.value}
                        key={counter.id}
                        onIncrement={() => handleIncrement(counter.id)}
                        onDecrement={() => handleDecrement(counter.id)}
                        onDelete={() => handleDeleteMatch(counter.id)}
                    />
                ))}

                <div className="flex justify-evenly ">
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg" onClick={handleAddCounter} >Add Counter</button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg" onClick={handleReset} >Reset</button>
                </div>

                <Stats totalCount={totalCount} />

                <Posts />
            </div>
        </div>
    );
}