import { useState } from "react";
import ExpenseForm from "./expense-tracker/ExpenseForm";
import ExpenseList, { Expense } from "./expense-tracker/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "fppd", amount: 21, category: "groceries" },
    { id: 2, description: "ufbj", amount: 34, category: "Utilities" },
    { id: 3, description: "ajafkad", amount: 46, category: "groceries" },
  ]);
  return (
    <>
      <ExpenseForm />
      <ExpenseList
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        expenses={expenses}
      />
    </>
  );
};

export default App;
