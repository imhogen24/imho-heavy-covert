import { cn } from "@/lib/utils";
import { GearFineIcon } from "@phosphor-icons/react/dist/csr/GearFine";

export function Services({ className }: { className?: string }) {
  return (
    <section
      aria-label="Organizations we collaborate with"
      className={cn("relative w-full border-t muted-border", className)}
    >
      <div className="border-b muted-border w-full flex h-20 justify-center items-center">
        <h2 className="text-2xl font-semibold">
          One{" "}
          <span className="inline-flex p-3 border muted-border rounded-full bg-accent ">
            <GearFineIcon size={28} weight="light" /> System
          </span>
          . Three Engines of Execution.
        </h2>
      </div>
    </section>
  );
}
