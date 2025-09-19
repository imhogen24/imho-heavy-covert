/**
 * API-related types for server actions and responses
 */

/**
 * Standard API response format for all server actions
 */
export interface ActionResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Email sending response from Resend API
 */
export interface EmailResponse {
  id?: string;
  error?: string;
}

/**
 * File upload response from UploadThing
 */
export interface UploadResponse {
  fileUrl: string;
  fileName: string;
  fileSize?: number;
  fileType?: string;
}

/**
 * Form submission metadata
 */
export interface FormSubmissionMeta {
  submittedAt: Date;
  ipAddress?: string;
  userAgent?: string;
}

/**
 * Generic server action result
 */
export type ServerActionResult<T = any> =
  | { success: true; data: T }
  | { success: false; error: string };

/**
 * Notification service types
 */
export interface NotificationPayload {
  type: 'contact' | 'service_request' | 'confirmation';
  recipient: string;
  subject: string;
  templateData: Record<string, any>;
}

/**
 * Service request status
 */
export type RequestStatus =
  | 'pending'
  | 'processing'
  | 'completed'
  | 'rejected';

/**
 * Service form submission data structure
 */
export interface ServiceFormSubmission {
  id?: string;
  type: 'product' | 'process' | 'cad' | 'support';
  status: RequestStatus;
  submittedAt: Date;
  clientInfo: {
    organizationName: string;
    contactPerson: string;
    email: string;
    phoneNumber?: string;
  };
  formData: Record<string, any>;
  attachments?: string[];
}