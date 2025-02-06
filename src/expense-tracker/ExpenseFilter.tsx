interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mt-3">
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        name=""
        id="category"
        className="form-control"
      >
        <option value="">All Category</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
