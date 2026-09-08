import { LinkButton } from "@/components/ui/button";
import { PageShell } from "@/components/public/page-shell";

export default function ThanksPage() {
  return (
    <PageShell title="Obrigado por estar conosco" description="Esperamos que você se sinta em casa. Em breve nossa equipe poderá entrar em contato com você.">
      <div className="grid gap-3 sm:flex">
        <LinkButton href="/proximo-passo" size="lg">Ver meus próximos passos</LinkButton>
        <LinkButton href="/" size="lg" variant="secondary">Voltar ao início</LinkButton>
      </div>
    </PageShell>
  );
}
