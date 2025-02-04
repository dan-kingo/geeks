const ExpenseForm = () => {
  const categories = ["Groceries", "Utilities", "Entertainment", "Other"];
  return (
    <form>
      <label htmlFor="description" className="form-label fw-bold">
        Description
      </label>
      <input
        id="description"
        placeholder="enter description"
        type="text"
        className="form-control mb-3"
      />
      <label htmlFor="amount" className="form-label fw-bold">
        Amount
      </label>
      <input
        id="amount"
        placeholder="enter amount"
        type="number"
        className="form-control mb-3"
      />
      <label htmlFor="category" className="form-label fw-bold">
        Category
      </label>
      <select name="" id="category" className="form-control mb-3">
        {categories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>

      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default ExpenseForm;
