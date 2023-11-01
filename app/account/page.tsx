import { Separator } from "@/components/ui/separator";
import { CreateAccount } from "./login";

export default function Page() {
  return (
    <div className="space-y-6">
      <Separator />
      <CreateAccount />
    </div>
  )
}