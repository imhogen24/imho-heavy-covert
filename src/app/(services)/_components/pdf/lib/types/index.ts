export interface FieldConfig {
  label: string;
  value: string | string[] | undefined;
  isArray?: boolean;
  condition?: boolean;
}

export interface SectionConfig {
  title: string;
  fields: FieldConfig[];
}

export interface PDFConfig {
  requestType: string;
  getSections: (data: any) => SectionConfig[];
  getFooterText: (data: any) => string;
}
