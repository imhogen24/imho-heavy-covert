import { cn } from "@/lib/utils";
import { BookUser, FileText, Settings, User, GraduationCap, Calendar, Info, LucideIcon, BookOpen, Lightbulb } from "lucide-react";
import React from "react";

interface FORM_SECTION_PROPS extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    label?: string;
}

const iconMap: Record<string, LucideIcon> = {
    "client information": User,
    "documentation requirements": FileText,
    "technical details": Settings,
    "project specifics": BookUser,
    "aesthetic preferences": Settings,
    "Project specifics": BookUser,
    "file attachments": FileText,
    "training requirements": GraduationCap,
    "project details": Calendar,
    "additional information": Info,
    "project support requirements": BookOpen,
    "additional considerations": Lightbulb,
};



export function FormSection({ children, label, className, ...props }: FORM_SECTION_PROPS) {
    const IconComponent = label ? iconMap[label.toLowerCase()] : null;

    return (
        <div className={cn("space-y-8", className)} {...props}>
            {label && (
                <div className="inline-flex gap-2">
                    {IconComponent && <IconComponent className="my-auto size-4 stroke-muted-foreground" />}
                    <h2 className="text-lg capitalize font-semibold">{label}</h2>
                </div>
            )}
            {children}
        </div>
    );
}

export function SectionChild({ children, label, className, ...props }: FORM_SECTION_PROPS) {
    return (
        <div className={cn("space-y-5", className)}>

            <div className={cn("grid md:grid-cols-2 gap-6", className)}>
                {children}
            </div>
        </div>
    );
}


