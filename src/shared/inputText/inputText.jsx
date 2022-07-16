import styles from "./inputText.module.scss";

const InputText = ({value = "", className, onChange, ...rest}) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default InputText;
