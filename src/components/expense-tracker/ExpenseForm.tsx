import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Expense } from "./ExpenseList";

interface Props {
  onSubmitForm: (data: Expense) => void;
}
const schema = z.object({
  description: z.string().min(5, { message: "at least 5 chars allowed" }),
  amount: z.number({ message: "Amount is Required" }).min(10).max(50_000),
  category: z.string(),
});

type ExpenseData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmitForm }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmitForm(data);
        reset();
      })}
    >
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
        name="category"
        id="category"
        className="form-control mb-3"
      >
        <option value=""></option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
      {errors.category && (
        <p className="text-danger">{errors.category.message}</p>
      )}

      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default ExpenseForm;
