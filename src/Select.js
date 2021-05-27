import classnames from "clsx";

const Select = ({ label, error, children, ...selectProps }) => {
  const selectClass = classnames(
    "block w-full sm:text-sm border-gray-300 rounded-lg",
    {
      "focus:ring-accent focus:border-accent": !error,
      "border-red-600 focus:ring-red-400 focus:border-red-500": Boolean(error),
    }
  );

  return (
    <div>
      <label
        htmlFor={selectProps.id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <select className={selectClass} {...selectProps}>
          {children}
        </select>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Select;
