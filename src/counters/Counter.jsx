export default function Counter() {

    return (
        <>
            <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
                {/* <!-- header --> */}
                <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                    Simple Counter Application
                </h1>

                {/* <!-- counters --> */}
                <div className="mx-auto max-w-md mt-10 space-y-5">
                    <div
                        className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
                    >
                        <div id="counter" className="text-2xl font-semibold"></div>
                        <div className="flex space-x-3">
                            <button
                                id="increment"
                                className="bg-indigo-400 text-white px-3 py-2 rounded-lg shadow"
                            >
                                Increment
                            </button>
                            <button
                                id="decrement"
                                className="bg-red-400 text-white px-3 py-2 rounded-lg shadow"
                            >
                                Decrement
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}