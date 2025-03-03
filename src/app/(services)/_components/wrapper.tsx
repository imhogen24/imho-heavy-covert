import { cn } from "@/lib/utils";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import {
    User, FileText, BookUser, Paintbrush,
    FolderOpen, GraduationCap, Calendar, Info, BookOpen,
    Lightbulb, Settings, Package, Users, ShieldCheck,
    MessageSquare,
    LucideIcon,
    Sliders,
    TriangleAlert,
    TrendingUp,
    BriefcaseBusiness,
    LifeBuoy,
    Keyboard,
    RefreshCcw,
    Handshake,
} from "lucide-react";
interface FORM_SECTION_PROPS extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    label?: string;
}


const iconMap: Record<string, LucideIcon> = {
    "client information": User,
    "documentation requirements": FileText,
    "technical details": Settings,
    "project specifics": BriefcaseBusiness,
    "aesthetic preferences": Paintbrush,
    "file attachments": FolderOpen,
    "training requirements": GraduationCap,
    "project details": Calendar,
    "additional information": Info,
    "project support requirements": LifeBuoy,
    "additional considerations": Lightbulb,
    "input requirements": Keyboard,
    "transformation requirements": RefreshCcw,
    "output requirements": Package,
    "operational agents": Users,
    "safety, maintenance and scalability": ShieldCheck,
    "collaboration and communication": MessageSquare,
    "process requirements": Sliders,
    "challenges or inefficiencies": TriangleAlert,
    "scalability & future goals": TrendingUp,
    "notice, disclaimer, and terms of agreement": Handshake,


};



export function FormSection({ children, label, className, ...props }: FORM_SECTION_PROPS) {
    const IconComponent = label ? iconMap[label.toLowerCase()] : null;

    return (
        <div className={cn("space-y-8", className)} {...props}>
            {label && (
                <div className="inline-flex gap-2">
                    {IconComponent && <IconComponent className="my-auto size-5 stroke-muted-foreground" />}
                    <h2 className="text-base md:text-lg capitalize font-semibold">{label}</h2>
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


