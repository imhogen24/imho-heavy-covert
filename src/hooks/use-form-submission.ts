import { useState, useCallback } from "react";
import { toast } from "sonner";
import { UseFormReturn } from "react-hook-form";

/**
 * Configuration for the form submission hook
 */
interface FormSubmissionConfig {
  /** Success message to display when form is submitted successfully */
  successMessage: string;
  /** Error message to display when form submission fails */
  errorMessage?: string;
  /** Whether to reset the form after successful submission */
  resetOnSuccess?: boolean;
  /** Custom callback to run after successful submission */
  onSuccess?: () => void;
  /** Custom callback to run after failed submission */
  onError?: (error: unknown) => void;
}

/**
 * Custom hook for handling form submissions with common patterns
 *
 * @param submitAction - Server action to submit the form data
 * @param form - React Hook Form instance
 * @param config - Configuration options
 * @returns Object with handleSubmit function and pending state
 *
 * @example
 * ```typescript
 * const { handleSubmit, pending } = useFormSubmission(
 *   processFormAction,
 *   form,
 *   {
 *     successMessage: "Process request submitted successfully!",
 *     errorMessage: "Something went wrong!",
 *     resetOnSuccess: true
 *   }
 * );
 * ```
 */
export function useFormSubmission<TFormData extends Record<string, any>>(
  submitAction: (formData: FormData) => Promise<any>,
  form: UseFormReturn<TFormData>,
  config: FormSubmissionConfig
) {
  const [pending, setPending] = useState(false);

  const handleSubmit = useCallback(
    async (values: TFormData) => {
      setPending(true);

      try {
        // Build FormData from form values
        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
          if (value === null || value === undefined) {
            return; // Skip null/undefined values
          }

          if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
          } else if (value instanceof Date) {
            formData.append(key, value.toISOString());
          } else if (typeof value === 'boolean') {
            formData.append(key, String(value));
          } else {
            formData.append(key, String(value));
          }
        });

        // Submit the form
        const result = await submitAction(formData);

        // Handle success
        toast.success(config.successMessage);

        if (config.resetOnSuccess !== false) {
          form.reset();
        }

        config.onSuccess?.();

        return result;
      } catch (error) {
        // Handle error
        const errorMessage = config.errorMessage || "Something went wrong!";
        toast.error(errorMessage);

        config.onError?.(error);

        throw error; // Re-throw to allow component-level handling if needed
      } finally {
        setPending(false);
      }
    },
    [submitAction, form, config]
  );

  return {
    handleSubmit,
    pending,
    setPending
  };
}