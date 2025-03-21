import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FormInputProps } from "@/lib/form-input"

export function InputForm({ formInput }: { formInput: FormInputProps }) {
  return (
    <form className={cn("flex flex-col gap-6")}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">{formInput.type} to your account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your {formInput.label} below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor={formInput.label}>{formInput.subtitle}</Label>
          <Input id={formInput.label} type={formInput.label} placeholder={formInput.placeholder} required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required placeholder="*******" />
        </div>
        <Button type="submit" className="w-full">
          {formInput.type}
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}
