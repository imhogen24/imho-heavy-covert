import { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export type WorkWithUsProps = {
  idx: number;
  icon: React.FC<IconProps>
  title: string
  description: string
  footer?: string
}
export interface ProjectCardProps{
  idx: number;
  title: string;
  client: string;
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
    idx: number;
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
