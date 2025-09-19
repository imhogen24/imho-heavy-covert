import * as React from "react";

/**
 * Configuration for a single field in a form preview section
 */
export interface FieldConfig {
  label: string;
  value: string | boolean | string[] | number | Date | undefined;
  fullWidth?: boolean;
  isMedium?: boolean;
  isBoolean?: boolean;
  isArray?: boolean;
  isDate?: boolean;
  condition?: boolean;
}

/**
 * Configuration for a section in the form preview
 */
export interface SectionConfig {
  title: string;
  icon?: React.FC<{ className?: string }>;
  fields?: FieldConfig[];
  fileAttachments?: string[];
}

/**
 * Parsed file attachment with URL and display name
 */
export interface FileAttachment {
  url: string;
  name: string;
}

/**
 * Props for form preview components
 */
export interface FormPreviewProps<T = any> {
  formData: T;
}
