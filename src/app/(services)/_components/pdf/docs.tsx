import { CadFormData, ProductFormData } from "@/lib/z";
import { GenericPDFDocument } from "./generic-pdf";
import { cadPdfConfig } from "./lib/config/cad-config";
import { productPdfConfig } from "./lib/config/product-config";

export const CadPDF = ({ data }: { data: CadFormData }) => (
  <GenericPDFDocument data={data} config={cadPdfConfig} />
);

export const ProductPDF = ({ data }: { data: ProductFormData }) => (
  <GenericPDFDocument data={data} config={productPdfConfig} />
);