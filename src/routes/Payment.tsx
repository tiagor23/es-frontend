const Payment = () => {
    return (
    <div className="p-5">
        <label className="text-gray-600">
            Amount
        </label>
        <div className="relative mt-2 max-w-xs text-gray-500">
            <span className="h-6 text-gray-400 absolute left-3 inset-y-0 my-auto">
                 €
            </span>
            <input
                type="number"
                placeholder="0.00"
                className="w-full pl-8 pr-16 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
                <select className="text-sm bg-transparent outline-none px-1 rounded-lg h-full">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>MRO</option>
                </select>
            </div>
        </div>
        <div className="space-x-7 px-0 py-5">
            <button className="px-5 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">
                Cash
            </button>
            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">
                Credit Card
            </button>
            <button className="px-4 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg">
                Face ID
            </button>
        </div>

    </div>
    )
}

export default Payment