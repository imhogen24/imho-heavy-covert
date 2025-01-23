import { SVGProps } from 'react'


export interface ServiceRouteProps {
    idx: number;
    label: string;
    href: string;
    active?: boolean;
    }
export interface SocialIconProps{
    idx: number;
    icon: React.FC<IconProps> | undefined;
    href: string;
}
export interface HeroIconProps {
    idx: number;
    icon: React.FC<IconProps> | undefined;

}
export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export type WorkWithUsProps = {
  idx: number;
  image: string;
  title: string;
  description: string;
  footer?: string;
  cta?: string;
  route: string;
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
  height?: number;
  width?: number;

}
export interface MarqueeProps{
  id: number;
  image: string;
  imageLight:string;
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
    imageLight: string;
    ImageWidth?: number;
    ImageHeight?: number;
}
