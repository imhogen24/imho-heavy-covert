

export interface ProjectCardProps{
  title: string;
  customer: string;
  description: string;
  type: string;
  service: string;
  date:  string;
  image?: string;
  Video?: string;

}
export interface MarqueeProps{
  id: number;
  image: string;
  ImageWidth?: number;
  ImageHeight?: number;
}
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
    ImageWidth?: number;
    ImageHeight?: number;
}
