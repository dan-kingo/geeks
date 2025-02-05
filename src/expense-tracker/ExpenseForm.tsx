import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string().min(5, { message: "at least 5 chars allowed" }),
  amount: z.number({ message: "Amount is Required" }).min(10).max(50_000),
  category: z.string(),
});

type Expense = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Expense>({ resolver: zodResolver(schema) });
  const categories = ["Groceries", "Utilities", "Entertainment", "Other"];
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label htmlFor="description" className="form-label fw-bold">
        Description
      </label>
      <input
        {...register("description")}
        id="description"
        placeholder="enter description"
        type="text"
        className="form-control mb-3"
      />
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <label htmlFor="amount" className="form-label fw-bold">
        Amount
      </label>
      <input
        {...register("amount", { valueAsNumber: true })}
        id="amount"
        placeholder="enter amount"
        type="number"
        className="form-control mb-3"
      />
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      <label htmlFor="category" className="form-label fw-bold">
        Category
      </label>
      <select
        {...register("category")}
        name=""
        id="category"
        className="form-control mb-3"
      >
        {categories.map((category, index) => (
          <option value={category} key={index}>
            {category}
          </option>
        ))}
      </select>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}

      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default ExpenseForm;
