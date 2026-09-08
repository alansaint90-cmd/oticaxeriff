import { Card } from "@/components/ui/card";
import { Field, Input } from "@/components/ui/form";
import { Button, LinkButton } from "@/components/ui/button";
import { loginWithPassword } from "@/lib/actions/admin-actions";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-mist px-4 py-10">
      <Card className="w-full max-w-md p-6">
        <h1 className="text-2xl font-black text-ink">Acesso à IBA Gestão</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Configure Supabase Auth e `DATABASE_URL` para habilitar login seguro e persistência.
        </p>
        <form action={loginWithPassword} className="mt-5 grid gap-4">
          <Field label="E-mail"><Input name="email" type="email" required /></Field>
          <Field label="Senha"><Input name="password" type="password" required /></Field>
          <Button type="submit">Entrar</Button>
        </form>
        <LinkButton className="mt-4 w-full" href="/" variant="secondary">Voltar ao público</LinkButton>
      </Card>
    </main>
  );
}
