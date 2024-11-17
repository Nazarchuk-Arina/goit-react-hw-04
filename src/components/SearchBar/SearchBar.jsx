import { Formik, Form, Field } from "formik";
import s from "./SearchBar.module.css";

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    onChangeQuery(values.query);
  };
  return (
    <header className={s.form}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            placeholder="Search images and photos"
            className={s.input}
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
