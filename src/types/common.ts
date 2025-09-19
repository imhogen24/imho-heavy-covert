/**
 * Common utility types used across the application
 */

/**
 * Generic props for components that can be used as child components
 */
export interface WithChildren {
  children: React.ReactNode;
}

/**
 * Generic props for components that accept custom styling
 */
export interface WithClassName {
  className?: string;
}

/**
 * Common props combining children and className
 */
export interface BaseComponentProps extends WithChildren, WithClassName {}

/**
 * Props for components that can be disabled
 */
export interface WithDisabled {
  disabled?: boolean;
}

/**
 * Props for components with loading states
 */
export interface WithLoading {
  loading?: boolean;
  pending?: boolean;
}

/**
 * Generic form field state
 */
export interface FormFieldState {
  value: any;
  error?: string;
  touched?: boolean;
}

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T = any> {
  data?: T;
  error?: string;
  success: boolean;
}

/**
 * File upload related types
 */
export interface UploadedFile {
  url: string;
  name: string;
  size?: number;
  type?: string;
}

/**
 * Generic pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
  total?: number;
}

/**
 * Common modal/dialog props
 */
export interface ModalProps extends WithChildren {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
}

/**
 * Generic service response for form submissions
 */
export interface ServiceResponse {
  success: boolean;
  message?: string;
  error?: string;
}