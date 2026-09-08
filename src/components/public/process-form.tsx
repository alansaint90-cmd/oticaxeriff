import { Button } from "@/components/ui/button";
import { Consent } from "@/components/public/consent";
import { Field, Input, Select } from "@/components/ui/form";
import { submitProcessInterest } from "@/lib/actions/public-actions";

export function ProcessForm({ type }: { type: "batismo" | "membresia" }) {
  return (
    <form action={submitProcessInterest} className="grid gap-4">
      <input name="type" type="hidden" value={type} />
      <Field label="Nome"><Input name="name" required /></Field>
      <Field label="WhatsApp"><Input name="whatsapp" inputMode="tel" required /></Field>
      {type === "batismo" ? <Field label="Idade"><Input name="age" min={8} type="number" /></Field> : null}
      <Field label="Há quanto tempo frequenta a IBA?"><Input name="participationTime" /></Field>
      {type === "batismo" ? (
        <>
          <Field label="Já entregou sua vida a Jesus?"><Select name="acceptedJesus"><option>Sim</option><option>Não</option></Select></Field>
          <Field label="Deseja conversar com alguém antes?"><Select name="wantsConversation"><option>Sim</option><option>Não</option></Select></Field>
        </>
      ) : null}
      <Consent />
      <Button size="lg" type="submit">{type === "batismo" ? "QUERO DAR ESSE PASSO" : "QUERO CONHECER O PROCESSO"}</Button>
    </form>
  );
}
