import { useFormik } from "formik";
import * as yup from "yup";

import Input from "./Input";
import Select from "./Select";
import DatePicker from "./DatePicker";
import Button from "./Button";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  country: yup.string().required("Country is required"),
  birthday: yup.string().required("Select your birthday"),
  password: yup.string().required("Type your password"),
});

const Form = () => {
  const getError = (field) => {
    if (touched[field] && errors[field]) {
      return errors[field];
    }

    return "";
  };

  const onSubmit = (values) => {
    console.log("onSubmit", values);
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    resetForm,
    setFieldValue,
    setFieldTouched,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      country: "",
      birthday: "",
      password: "",
    },
    validationSchema,
    onSubmit,
  });

  console.log("formValues", values);

  return (
    <>
      <h1 className="text-2xl font-semibold text-gray-900">Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <Input
            name="name"
            id="name"
            label="Name"
            placeholder="Type your name"
            error={getError("name")}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="mt-3">
          <Select
            name="country"
            id="country"
            label="Country"
            placeholder="Select your Country"
            error={getError("country")}
            value={values.country}
            onChange={(e) => setFieldValue("country", e.target.value)}
            onBlur={handleBlur}
          >
            <option value="">Select your country</option>
            <option value="br">Brazil</option>
            <option value="cl">Chile</option>
          </Select>
        </div>

        <div className="mt-3">
          <DatePicker
            name="birthday"
            id="birthday"
            label="Birthday"
            placeholder="Select your birthday"
            error={getError("birthday")}
            value={values.birthday}
            onChange={(date) => setFieldValue("birthday", date)}
            onBlur={() => setFieldTouched("birthday", true)}
          />
        </div>

        <div className="mt-3">
          <Input
            type="password"
            name="password"
            id="password"
            label="Password"
            placeholder="Type your password"
            error={getError("password")}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>

        <div className="flex items-center gap-3 mt-6">
          <Button variant="default" onClick={() => resetForm()}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default Form;
