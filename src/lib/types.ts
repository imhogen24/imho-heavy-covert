export interface ImpactTextProps{
    title: string;
    description: string;
    footer?: string;
}

export interface NavItemProps{
    id: number;
    label: string;
    href: string;
    active?: boolean;
}

export interface SdgProps{
    id: number;
    image: string;
}
