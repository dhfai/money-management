import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { InputForm } from "./input/InputForm"

export function RegisterForm() {
  return <InputForm
      formInput={{
        title: "Create an account",
        subtitle: "Email",
        type: "Register",
        label: "email",
        placeholder: "m@example.com"
      }}
    />
}
