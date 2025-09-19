import * as React from "react";

/**
 * Reusable UI component types and interfaces
 */

/**
 * Common button variant types
 */
export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "close"
  | "download"
  | "primary"
  | "primary-outline"
  | "primary-orange";

/**
 * Common button sizes
 */
export type ButtonSize = "nav" | "sm" | "lg" | "icon" | "standard";

/**
 * Common dialog/modal sizes
 */
export type DialogSize = "sm" | "md" | "lg" | "xl" | "full";

/**
 * Generic icon component props
 */
export interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
  "aria-hidden"?: boolean;
}

/**
 * Props for components with icons
 */
export interface WithIcon {
  icon?: React.ComponentType<IconProps>;
  iconPosition?: "left" | "right";
}

/**
 * Form field wrapper props
 */
export interface FormFieldProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

/**
 * Navigation item structure
 */
export interface NavItem {
  id: string | number;
  label: string;
  href: string;
  icon?: React.ComponentType<IconProps>;
  children?: NavItem[];
  active?: boolean;
}

/**
 * Card component base props
 */
export interface CardProps {
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Modal/Dialog base props
 */
export interface DialogBaseProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  size?: DialogSize;
  className?: string;
}

/**
 * Loading state props
 */
export interface LoadingProps {
  loading?: boolean;
  loadingText?: string;
  spinner?: boolean;
}

/**
 * Toast/notification types
 */
export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  type: ToastType;
  message: string;
  description?: string;
  duration?: number;
}

/**
 * Table column definition
 */
export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: keyof T;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: string | number;
}

/**
 * Generic form section props
 */
export interface FormSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Theme-related types
 */
export type Theme = "light" | "dark" | "system";

/**
 * Responsive breakpoint props
 */
export interface ResponsiveProps {
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
}