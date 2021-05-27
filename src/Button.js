import classnames from "clsx";

const primaryStyles =
  "text-white bg-primary hover:bg-primary-1 focus:bg-primary-1 focus:ring-primary";
const accentStyles =
  "text-white bg-accent hover:bg-accent-1 focus:bg-accent-1 focus:ring-accent";
const defaultStyles =
  "text-black bg-transparent border-gray-400 hover:bg-gray-300 focus:ring-gray-400";

const Button = ({ children, variant = "accent", ...buttonProps }) => {
  const buttonClass = classnames(
    "inline-flex items-center px-3 py-2",
    "border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    {
      [primaryStyles]: variant === "primary",
      [accentStyles]: variant === "accent",
      [defaultStyles]: variant === "default",
    }
  );

  return (
    <button type="button" {...buttonProps} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
