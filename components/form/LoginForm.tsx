import { InputForm } from "./input/InputForm"

export function LoginForm() {
  return <InputForm
    formInput={{
      title: "Wellcome back",
      subtitle: "Username",
      type: "Login",
      label: "username",
      placeholder: "adomin123"
    }}
  />
}
