import { IInputProps } from "./interface";
import { InputBasic, InputSearch, InputLabel } from "./variants";

const Input = ({label, placeholder, name, type, model, register, error, maxLength}: IInputProps) => {
  
  switch (model) {
    case "input-basic":
      return <InputBasic label={label} placeholder={placeholder} name={name} type={type} register={register} maxLength={maxLength} />
    case "input-label":
      return (
        <fieldset className="w-full flex flex-col gap-1">
          <InputLabel label={label} placeholder={placeholder} name={name} type={type} register={register} maxLength={maxLength} />
          <span className="h-6 text-feedback-error-1 text-right">{error?.message}</span>
        </fieldset>
      )
    case "input-search":
      return <InputSearch label={label} placeholder={placeholder} name={name} type={type} register={register} />
    default:
      return <InputBasic label={label} placeholder={placeholder} name={name} type={type} register={register} maxLength={maxLength} />
  }
}

export default Input;
