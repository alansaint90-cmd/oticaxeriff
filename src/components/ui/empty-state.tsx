import { Inbox } from "lucide-react";
import { Card } from "./card";

export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <Card className="grid place-items-center p-8 text-center">
      <Inbox className="mb-3 text-slate-400" size={32} aria-hidden />
      <h3 className="font-semibold text-ink">{title}</h3>
      <p className="mt-1 max-w-md text-sm text-slate-500">{description}</p>
    </Card>
  );
}
