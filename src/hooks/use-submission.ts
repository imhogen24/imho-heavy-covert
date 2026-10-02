"use client";

import { useState } from "react";
import type { FieldValues } from "react-hook-form";

type SubmitResult = { ok: true } | { ok: false; error?: string };

/**
 * Posts a form's values to `/api/submissions/<type>` with an idempotency key.
 * The key stays the same across retries of one fill, so a double click or a
 * retry after a network error can't store the submission twice. It is
 * replaced after a success so the form can be filled and sent again.
 */
export const useSubmission = (type: string) => {
  const [submissionId, setSubmissionId] = useState(() => crypto.randomUUID());

  return async (values: FieldValues): Promise<SubmitResult> => {
    const response = await fetch(`/api/submissions/${type}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, submissionId }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || result?.error) {
      return { ok: false, error: result?.error };
    }

    setSubmissionId(crypto.randomUUID());

    return { ok: true };
  };
};
