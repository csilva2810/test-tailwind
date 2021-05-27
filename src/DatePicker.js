import classnames from "clsx";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const DatePicker = ({ label, error, onChange, value, ...inputProps }) => {
  const inputClass = classnames(
    inputProps.className,
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
        <DayPickerInput
          classNames={{
            container: "w-full DayPickerInput",
            overlayWrapper: "DayPickerInput-OverlayWrapper",
            overlay: "DayPickerInput-Overlay bg-white shadow-sm rounded-md",
          }}
          inputProps={{
            type: "text",
            ...inputProps,
            className: inputClass,
          }}
          value={value}
          onDayChange={onChange}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default DatePicker;
