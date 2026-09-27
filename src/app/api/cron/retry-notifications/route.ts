import { db } from "@/lib/db";
import {
  academySupportSubmissions,
  capabilityAssessmentSubmissions,
  cohortSponsorshipSubmissions,
  contactSubmissions,
  customEngineeringSubmissions,
  designForgeSubmissions,
  draftingDigitizationSubmissions,
  imhogenAcademySubmissions,
  imhogenPartnershipSubmissions,
} from "@/lib/db/schema";
import { retrySubmission } from "@/lib/notifications/retry";

import { and, isNull, lt, or } from "drizzle-orm";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const expectedSecret = process.env.CRON_SECRET;

  console.log(
    "[CRON] Auth check:",
    authHeader === `Bearer ${expectedSecret}` ? "SUCCESS" : "FAILED",
  );

  if (authHeader !== `Bearer ${expectedSecret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

  const tables = [
    contactSubmissions,
    imhogenAcademySubmissions,
    imhogenPartnershipSubmissions,
    academySupportSubmissions,
    capabilityAssessmentSubmissions,
    cohortSponsorshipSubmissions,
    designForgeSubmissions,
    customEngineeringSubmissions,
    draftingDigitizationSubmissions,
  ];

  for (const table of tables) {
    const pendingRows = await db
      .select()
      .from(table)
      .where(
        and(
          or(isNull(table.adminNotifiedAt), isNull(table.confirmationSentAt)),
          lt(table.notifyAttempts, 5),
          lt(table.createdAt, fiveMinutesAgo),
        ),
      );

    for (const pr of pendingRows) {
      await retrySubmission(table, pr);
    }
  }

  return Response.json({ success: true });
}
