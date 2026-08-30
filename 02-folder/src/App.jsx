function App() {
  return (
    <center>
      <h1>Todo App</h1>

      <div className="container text-center">
        
        {/* Input Row */}
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo here"
            />
          </div>

          <div className="col-3">
            <input
              type="date"
              className="form-control"
            />
          </div>

          <div className="col-3">
            <button
              type="button"
              className="btn btn-success w-100"
            >
              Add
            </button>
          </div>
        </div>

        {/* Todo 1 */}
        <div className="row mt-3">
          <div className="col-6 text-start">
            Buy Milk
          </div>

          <div className="col-3 text-start">
            4/10/2023
          </div>

          <div className="col-3">
            <button
              type="button"
              className="btn btn-danger w-100"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Todo 2 */}
        <div className="row mt-3">
          <div className="col-6 text-start">
            Go to College
          </div>

          <div className="col-3 text-start">
            4/10/2023
          </div>

          <div className="col-3">
            <button
              type="button"
              className="btn btn-danger w-100"
            >
              Delete
            </button>
          </div>
        </div>

      </div>
    </center>
  );
}

export default App;