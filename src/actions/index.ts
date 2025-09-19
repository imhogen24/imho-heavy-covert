/**
 * @fileoverview Central exports for all IMHO Engineering server actions
 *
 * This module serves as the main entry point for all server actions used throughout
 * the IMHO Engineering application. It re-exports actions from specialized modules
 * to maintain backward compatibility while providing a clean, organized structure.
 *
 * The actions are organized by service domain:
 * - Contact form submissions
 * - CAD (Computer-Aided Design) requests
 * - Product development requests
 * - Process improvement requests
 * - Engineering support and training requests
 * - Shared email utilities
 *
 * @author IMHO Engineering
 * @version 1.0.0
 */

export { cadFormAction } from "./cad.actions";
export { contactFormAction } from "./contact.actions";
export { processFormAction } from "./process.actions";
export { productFormAction } from "./product.actions";
export { supportFormAction } from "./support.actions";

// Shared email utilities (exported for potential reuse)
export {
  EMAIL_CONFIG,
  generateRequestId,
  sendEmail,
  sendNotificationWithConfirmation,
} from "./email.actions";

// Legacy exports for backward compatibility
export { productFormAction as ProductFormAction } from "./product.actions";
export { supportFormAction as SupportFormAction } from "./support.actions";
