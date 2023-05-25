import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMsg?: string;
}

const Input: FC<Props> = ({ label, errorMsg, placeholder, ...rest }) => {
  return (
    <fieldset>
      <div>
        <label>{label}</label>
        <span>{errorMsg}</span>
      </div>

      <input
        {...rest}
        className="focus:ring-strawberry-red focus:ring transition"
      />
    </fieldset>
  );
};

export default Input;
