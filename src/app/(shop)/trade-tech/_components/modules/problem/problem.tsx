import { cn } from "@/lib/utils";
import { AlertTriangle, Clock, Smartphone, User } from "lucide-react";

const problems = [
  {
    icon: Smartphone,
    title: "Stolen phones and cash",

    iconForeground: "text-red-700",
    iconBackground: "bg-red-50 dark:bg-red-950/30",
    ringColorClass: "ring-red-700/30",
  },
  {
    icon: AlertTriangle,
    title: "Constant fatigue and back pain",
    iconForeground: "text-orange-700",
    iconBackground: "bg-orange-50 dark:bg-orange-950/30",
    ringColorClass: "ring-orange-700/30",
  },
  {
    icon: Clock,
    title: "Loss of time and money",

    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50 dark:bg-blue-950/30",
    ringColorClass: "ring-blue-700/30",
  },
  {
    icon: User,
    title: "Lack of professional identity",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50 dark:bg-purple-950/30",
    ringColorClass: "ring-purple-700/30",
  },
];

const ProblemSection = () => {
  return (
    <div className="flex flex-row w-full h-full justify-between border-b muted-border">
      <div className="hidden relative lg:grid grid-cols-1 w-28 border-r muted-border border-dashed min-h-full"></div>

      <div className="w-full ">
        {/* Header with your typography style */}
        <div className="flex flex-col items-center justify-center h-36 text-center">
          <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-geistSans)] font-bold mb-4">
            The Cost of <span className="">Doing Nothing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Without proper gear, traders face:
          </p>
        </div>

        {/* Problem grid using your exact card patterns - sharp, grid-aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0  border-t muted-border border-dashed">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={cn(
                "p-8 bg-white dark:bg-neutral-900 border-dashed",
                // Add borders to create grid effect
                index % 2 === 0
                  ? "border-r border-b muted-border"
                  : "border-b muted-border",
                index >= 2 ? "border-t-0" : ""
              )}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <span
                    className={cn(
                      problem.iconBackground,
                      problem.iconForeground,
                      "inline-flex rounded-lg p-3 ring-2 ring-inset",
                      problem.ringColorClass
                    )}
                  >
                    <problem.icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                </div>
                <h3 className="font-semibold mb-3">{problem.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center p-10">
          <div className="text-lg font-semibold text-center max-w-3xl mx-auto">
            The{" "}
            <span className="inline-flex items-center gap-2 px-4 py-2 border muted-border bg-transparent text-neutral-900 dark:text-neutral-100 rounded-lg text-sm font-medium mx-1">
              <Clock className="w-4 h-4" />
              cost
            </span>{" "}
            of doing nothing is staying stuck in{" "}
            <span className="inline-flex items-center gap-2 px-4 py-2 border muted-border bg-transparent text-neutral-900 dark:text-neutral-100 rounded-lg text-sm font-medium mx-1">
              <AlertTriangle className="w-4 h-4" />
              unsafe
            </span>
            , exhausting routines.
          </div>
        </div>
      </div>

      <div className="hidden relative lg:grid grid-cols-1 w-28 border-l muted-border border-dashed min-h-full"></div>
    </div>
  );
};

export default ProblemSection;
