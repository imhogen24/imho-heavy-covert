import { z } from "zod";

/**
 * Field builders shared by every intake schema. The wording of each message is
 * derived from the field's label so the phrasing stays identical across forms;
 * pass an override only where a field needs its own words.
 */

const E164 = /^\+[1-9]\d{1,14}$/;

const PHONE_ERROR =
  "Phone number must be in E.164 format with country code (e.g., +12025550123)";

/** A phone number the form requires. */
export const phoneNumber = z
  .string()
  .trim()
  .refine((value) => E164.test(value), { error: PHONE_ERROR });

/** Blank is allowed, but a filled-in value must still be E.164. */
export const optionalPhoneNumber = z
  .string()
  .trim()
  .refine((value) => value === "" || E164.test(value), { error: PHONE_ERROR })
  .optional();

export const email = z.email({ error: "Please enter a valid email address" });

/**
 * An optional link. The `z.literal("")` branch is load-bearing here: an empty
 * input is not a valid URL, so without it an untouched field fails.
 */
export const optionalUrl = z
  .url({ error: "Please enter a valid URL" })
  .optional()
  .or(z.literal(""));

/** A short required field — a name, a title, an organization. */
export const nameText = (label: string, max: number) =>
  z
    .string()
    .min(2, { error: `${label} must be at least 2 characters long` })
    .max(max, { error: `${label} cannot exceed ${max} characters` });

/** A required free-text answer. */
export const requiredText = (
  min: number,
  max: number,
  minError: string,
  maxError = `Response cannot exceed ${max} characters`,
) => z.string().min(min, { error: minError }).max(max, { error: maxError });

/**
 * An optional free-text answer. `z.string().max(n)` already accepts "", so no
 * empty-string union is needed.
 */
export const optionalText = (
  max: number,
  maxError = `Response cannot exceed ${max} characters`,
) => z.string().max(max, { error: maxError }).optional();
