import { FieldConfig, SectionConfig } from "@/types/form-preview";

export interface PDFConfig {
  requestType: string;
  getSections: (data: any) => SectionConfig[];
  getFooterText: (data: any) => string;
}
