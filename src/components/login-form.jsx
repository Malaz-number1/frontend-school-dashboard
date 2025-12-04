import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="font-sans" dir="rtl">
      <Card className="overflow-hidden p-0 bg-white animate-in fade-in duration-700 slide-in-from-bottom-4">
        <CardContent className="grid p-0 md:grid-cols-2 h-120">
          <div className="p-6 md:p-8 ">
            <FieldGroup className="flex flex-col justify-evenly h-full">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-3xl font-bold text-[#285273]">
                  أهلاً بعودتك!
                </h1>
              </div>

              <p className="text-muted-foreground text-sm text-center">
                سجّل دخولك إلى لوحة ملاذ لمتابعة نشاط طفلك، التنبيهات، والتقارير
                الذكية — كل ذلك في مكان واحد.
              </p>

              <Field>
                <Button
                  onClick={() => loginWithRedirect()}
                  className="bg-[#285273] hover:bg-[#285265] hover:cursor-pointer"
                >
                  تسجيل الدخول
                </Button>
              </Field>
            </FieldGroup>
          </div>

          <div className="bg-white relative hidden md:block">
            <img
              src="/m6.jpg"
              alt="صورة"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
