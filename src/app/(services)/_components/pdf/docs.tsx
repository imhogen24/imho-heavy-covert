
import { GenericPDFDocument } from "./generic-pdf";
import { cadPdfConfig } from "./lib/config/cad-config";
import { productPdfConfig } from "./lib/config/product-config";
import { supportPdfConfig } from "./lib/config/support-config";
import { processPdfConfig } from "./lib/config/process-config";
import { CadFormData } from "@/lib/schemas/cad/z";
import { ProductFormData } from "@/lib/schemas/product/z";
import { ProcessFormData } from "@/lib/schemas/process/z";
import { SupportFormData } from "@/lib/schemas/support/z";

export const CadPDF = ({ data }: { data: CadFormData }) => (
  <GenericPDFDocument data={data} config={cadPdfConfig} />
);

export const ProductPDF = ({ data }: { data: ProductFormData }) => (
  <GenericPDFDocument data={data} config={productPdfConfig} />
);

export const ProcessPDF = ({ data }: { data: ProcessFormData }) => (
  <GenericPDFDocument data={data} config={processPdfConfig} />
);

export const SupportPDF = ({ data }: { data: SupportFormData }) => (
  <GenericPDFDocument data={data} config={supportPdfConfig} />
);