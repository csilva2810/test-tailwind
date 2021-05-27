import classnames from "clsx";

const Input = ({ label, error, ...inputProps }) => {
  const inputClass = classnames(
    "block w-full sm:text-sm border-gray-300 rounded-lg",
    {
      "focus:ring-accent focus:border-accent": !error,
      "border-red-600 focus:ring-red-400 focus:border-red-500": Boolean(error),
    }
  );

  return (
    <div>
      <label
        htmlFor={inputProps.id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input type="text" className={inputClass} {...inputProps} />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
