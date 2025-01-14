import * as React from 'react';

interface FormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  businessOperations: string;
  productPurpose: string;
  productVision: string;
  productObjectives: string[];
  targetAudience: string;
  coreFunctions: string;
  performanceMetrics: string;
  preferredMaterials: string;
  complianceStandards: string[];
  environmentalConditions: string;
  visualStyle: string;
  ergonomicFeatures: string;
  brandingRequirements: string;
  budgetRange: string;
  preferredTimeline: string;
  requirePrototypes: boolean;
  numberOfPrototypes?: number;
  requiredTests: string[];
  comparableProducts: string;
  collaborationPreferences: string[];
  additionalComments: string;
}

export const EmailTemplate = ({
  formData,
}: {
  formData: FormData;
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ color: '#333', borderBottom: '2px solid #333', paddingBottom: '10px' }}>
      Product Requirements Form Submission
    </h1>

    <section style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#444', borderBottom: '1px solid #ddd' }}>Client Information</h2>
      <p><strong>Organization:</strong> {formData.organizationName}</p>
      <p><strong>Contact Person:</strong> {formData.contactPerson}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      {formData.phoneNumber && <p><strong>Phone:</strong> {formData.phoneNumber}</p>}
      {formData.address && <p><strong>Address:</strong> {formData.address}</p>}
    </section>

    <section style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#444', borderBottom: '1px solid #ddd' }}>Project Overview</h2>
      <p><strong>Business Operations:</strong> {formData.businessOperations}</p>
      <p><strong>Product Purpose:</strong> {formData.productPurpose}</p>
    </section>

    <section style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#444', borderBottom: '1px solid #ddd' }}>Vision and Objectives</h2>
      <p><strong>Vision:</strong> {formData.productVision}</p>
      <p><strong>Objectives:</strong></p>
      <ul>
        {formData.productObjectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
      <p><strong>Target Audience:</strong> {formData.targetAudience}</p>
    </section>

    <section style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#444', borderBottom: '1px solid #ddd' }}>Functional Requirements</h2>
      <p><strong>Core Functions:</strong> {formData.coreFunctions}</p>
      <p><strong>Performance Metrics:</strong> {formData.performanceMetrics}</p>
      <p><strong>Preferred Materials:</strong> {formData.preferredMaterials}</p>
      <p><strong>Compliance Standards:</strong></p>
      <ul>
        {formData.complianceStandards.map((standard, index) => (
          <li key={index}>{standard}</li>
        ))}
      </ul>
      <p><strong>Environmental Conditions:</strong> {formData.environmentalConditions}</p>
    </section>

    <section style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#444', borderBottom: '1px solid #ddd' }}>Prototyping</h2>
      <p><strong>Requires Prototypes:</strong> {formData.requirePrototypes ? 'Yes' : 'No'}</p>
      {formData.requirePrototypes && (
        <p><strong>Number of Prototypes:</strong> {formData.numberOfPrototypes}</p>
      )}
      <p><strong>Required Tests:</strong></p>
      <ul>
        {formData.requiredTests.map((test, index) => (
          <li key={index}>{test}</li>
        ))}
      </ul>
    </section>

    <section style={{ marginBottom: '20px' }}>
      <h2 style={{ color: '#444', borderBottom: '1px solid #ddd' }}>Additional Information</h2>
      <p><strong>Comparable Products:</strong> {formData.comparableProducts}</p>
      <p><strong>Collaboration Preferences:</strong></p>
      <ul>
        {formData.collaborationPreferences.map((pref, index) => (
          <li key={index}>{pref}</li>
        ))}
      </ul>
      <p><strong>Additional Comments:</strong> {formData.additionalComments}</p>
    </section>
  </div>
);
