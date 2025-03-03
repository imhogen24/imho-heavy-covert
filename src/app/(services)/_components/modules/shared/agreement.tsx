import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function Agreement() {
  // Terms of agreement content split into sections
  const termsContent = [
    {
      title: "Definition of a Client",
      content: "A client refers to an individual representing an organization or their personal business, seeking to successfully onboard a project with IMHO."
    },
    {
      title: "Use of Client Information",
      content: "Clients providing their personal or organizational details to IMHO should do so with the understanding that IMHO strictly uses this information for project onboarding and related documentation. IMHO does not sell, misuse, or collect additional sensitive information for unauthorized purposes."
    },
    {
      title: "Confidentiality of Shared Information",
      content: "All project-related information or specifications submitted to IMHO during onboarding are treated as confidential and will not be disclosed publicly without the explicit consent of the client."
    },
    {
      title: "Intellectual Property Considerations",
      content: "Any information shared with IMHO is not automatically considered copyrighted, patented, or proprietary unless a prior agreement stating otherwise is in place. Clients should take appropriate legal steps to protect sensitive intellectual property before disclosure."
    },
    {
      title: "Compliance with IMHO's Standard Operating Procedures",
      content: "Clients agree to adhere to IMHO's standard operating procedures (SOPs) for project onboarding and execution. These procedures ensure efficiency and clarity in service delivery. Details of the SOPs can be found be downloaded on page."
    },
    {
      title: "Service Charges and Value Proposition",
      content: "IMHO's product and process development services are structured to provide comprehensive solutions, including Engineering Design, Procurement, Fabrication, Construction, Delivery, and/or Commissioning. Clients understand that service charges reflect the full value of these phases and are billed accordingly."
    },
    {
      title: "Distinction Between Development Services and Product Purchase",
      content: "Clients acknowledge that IMHO's services involve custom product and process development, which differs from purchasing an off-the-shelf product or pre-existing process. Accordingly, project timelines and service charges will reflect the complexity of engineering design, procurement requirements, and fabrication or construction deliverables."
    },
    {
      title: "Right to Reject Projects",
      content: "IMHO reserves the right to reject any project that is deemed illegal, unethical, or misaligned with legal, social, and moral policies within the jurisdiction in which it operates."
    },
    {
      title: "Project Feasibility and IMHO's Right to Decline",
      content: [
        "IMHO reserves the right to assess project feasibility before accepting any request.",
        "If a project is deemed technically unfeasible, beyond IMHO's scope, or economically unviable, IMHO may decline or suggest modifications before proceeding."
      ]
    },
    {
      title: "Scope of Work and Change Requests",
      content: [
        "The scope of the project will be clearly defined and agreed upon before work begins.",
        "Any modifications, additions, or scope changes requested by the client after project commencement may result in additional costs and timeline adjustments."
      ]
    },
    {
      title: "Payment Terms and Refund Policy",
      content: [
        "IMHO will provide detailed invoices with clear payment structures before starting work.",
        "Clients agree to pay the required fees upfront or according to the agreed payment schedule.",
        "Refunds will only be considered under exceptional circumstances, such as failure to deliver agreed-upon milestones due to IMHO's shortcomings, excluding factors beyond IMHO's control (e.g., client delays, force majeure)."
      ]
    },
    {
      title: "Client Responsibilities",
      content: [
        "Clients must provide accurate, complete, and timely information necessary for the project.",
        "Any delays in communication, approvals, or data submission by the client may affect project timelines, and IMHO will not be held liable for such delays.",
        "Clients are responsible for ensuring they have the necessary permissions, intellectual property rights, and regulatory approvals before engaging IMHO."
      ]
    },
    {
      title: "Intellectual Property and Ownership",
      content: [
        "IMHO retains the right to use general methodologies, frameworks, and non-client-specific solutions developed during the project for future work.",
        "The ownership of final project deliverables will be negotiated based on contractual agreements, ensuring fair use and protection for both parties."
      ]
    },
    {
      title: "Confidentiality and Non-Disclosure",
      content: [
        "Both IMHO and the client agree to protect sensitive project information and maintain confidentiality throughout and after project completion.",
        "IMHO will not disclose project details to third parties unless explicitly permitted by the client.",
        "Clients agree not to disclose IMHO's proprietary methods, technical solutions, or pricing structures to competitors or unauthorized parties."
      ]
    },
    {
      title: "Third-Party Involvement and Liability",
      content: [
        "IMHO may engage third-party vendors, engineers, or suppliers for specialized components of the project.",
        "While IMHO will ensure quality and compliance, clients acknowledge that third-party services are subject to their own terms, warranties, and liabilities."
      ]
    },
    {
      title: "Project Termination and Exit Clauses",
      content: [
        "Either party may terminate the project under specific conditions, including breach of contract, prolonged inactivity, or legal issues.",
        "If a project is terminated, IMHO will bill for all work completed up to that point, and intellectual property ownership will be handled accordingly."
      ]
    },
    {
      title: "Force Majeure (Unforeseen Circumstances)",
      content: [
        "IMHO will not be held liable for project delays or failures caused by unforeseeable events beyond its control, including but not limited to:",
        "Natural disasters",
        "Political instability",
        "Supply chain disruptions",
        "Unexpected legal or regulatory changes"
      ]
    },
    {
      title: "Legal Compliance and Dispute Resolution",
      content: [
        "Both IMHO and the client agree to comply with all applicable local and international laws related to the project.",
        "Any disputes arising from the project will be resolved through mediation and arbitration before pursuing legal action."
      ]
    }
  ];

  return (
    <ScrollArea className="h-96 md:h-[40rem] w-full rounded-[0.5rem] border muted-border p-4">
      <div className="space-y-6">
        {termsContent.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc pl-6 space-y-2">
                {section.content.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}