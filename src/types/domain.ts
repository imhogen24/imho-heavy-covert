import * as React from "react";
import { IconProps } from "./ui";

/**
 * Domain-specific types for IMHO Engineering application
 */

/**
 * Service route navigation
 */
export interface ServiceRouteProps {
  idx: number;
  label: string;
  href: string;
  active?: boolean;
}

/**
 * Social media icon props
 */
export interface SocialIconProps {
  idx: number;
  icon: React.FC<IconProps> | undefined;
  href: string;
}

/**
 * Hero section icon props
 */
export interface HeroIconProps {
  idx: number;
  icon: React.FC<IconProps> | undefined;
}

/**
 * Work with us section card props
 */
export type WorkWithUsProps = {
  idx: number;
  image: string;
  title: string;
  description: string;
  footer?: string;
  cta?: string;
  route: string;
}

/**
 * Project showcase card props
 */
export interface ProjectCardProps {
  idx: number;
  title: string;
  client: string;
  description: string;
  type: string;
  service: string;
  date: string;
  image?: string;
  Video?: string;
  height?: number;
  width?: number;
}

/**
 * Client marquee component props
 */
export interface MarqueeProps {
  id: number;
  image: string;
  imageLight: string;
  ImageWidth?: number;
  ImageHeight?: number;
}

/**
 * Impact section text props
 */
export interface ImpactTextProps {
  idx: number;
  title: string;
  description: string;
  footer?: string;
}

/**
 * Navigation item props (legacy - use NavItem from ui.ts for new components)
 */
export interface NavItemProps {
  id: number;
  label: string;
  href: string;
  active?: boolean;
}

/**
 * SDG (Sustainable Development Goals) component props
 */
export interface SdgProps {
  id: number;
  image: string;
  imageLight: string;
  ImageWidth?: number;
  ImageHeight?: number;
}