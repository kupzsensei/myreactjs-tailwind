function App() {
  return (
    <div className="w-screen h-screen bg-orange-300 flex flex-col gap-5 justify-center items-center">
      <h1 className="text-4xl hover:text-white animate-float">Instagram</h1>
      <div>
        <div className="flex flex-col gap-3 w-[300px]">
          <input
            type="text"
            placeholder="username"
            className="px-5 py-2 border-1 border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="password"
            className="px-5 py-2 border-1 border-gray-300 rounded-md"
          />
          <button className="bg-blue-400 rounded-lg font-bold text-white py-3">
            login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
