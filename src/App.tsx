import { useState } from "react";
import ExpenseForm from "./expense-tracker/ExpenseForm";
import ExpenseList, { Expense } from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./expense-tracker/ExpenseFilter";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "fppd", amount: 21, category: "Groceries" },
    { id: 2, description: "ufbj", amount: 34, category: "Utilities" },
    { id: 3, description: "ajafkad", amount: 46, category: "Groceries" },
  ]);
  const selectedExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <ExpenseForm
        onSubmitForm={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        expenses={selectedExpense}
      />
    </>
  );
};

export default App;
