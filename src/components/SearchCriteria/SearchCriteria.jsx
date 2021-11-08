import "./SearchCriteria.scss";
const SearchCriteria = (props) => {
  const { handleOnChange, text, value, isChecked } = props;
  return (
    <div>
      <label htmlFor={value}>
        <input
          type="checkbox"
          id={value}
          value={value}
          onChange={handleOnChange}
          checked={isChecked}
        />
        {text}
      </label>
    </div>
  );
};
export default SearchCriteria;
