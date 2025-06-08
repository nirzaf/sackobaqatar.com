/**
 * Baserow API Service
 * This service provides methods to interact with the Baserow API
 */

const API_KEY = import.meta.env.VITE_BASEROW_API_KEY;
const BASE_URL = 'https://api.baserow.io';
const TABLE_ID = '566812';

export interface MembershipFormData {
  field_4551278?: string; // Full Name
  field_4551367?: string; // Address in Qatar
  field_4551375?: string; // Address in Sri Lanka
  field_4551450?: string; // Occupation
  field_4551452?: string; // Organization
  field_4551455?: string; // Years in Qatar
  field_4551456?: string; // School Period
  field_4551461?: string; // School Period To
  field_4551463?: string; // Admission Number
  field_4551464?: string; // Date of Birth
  field_4551470?: string; // Extra Curricular Activities
  field_4551472?: string; // Proposed By
  field_4551458?: string; // Mobile Number
  field_4551459?: string; // Email
  field_4551460?: string; // Marital Status
}

export interface FormSubmission {
  id: number;
  created_on: string;
  submitted_values: MembershipFormData;
}

/**
 * Fetches form submissions from a Baserow form
 * @param formId The ID of the form to fetch submissions from
 * @returns Promise with the form submissions
 */
export const getFormSubmissions = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/database/rows/table/${TABLE_ID}/`, {
      headers: {
        'Authorization': `Token ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching form submissions: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch form submissions:', error);
    throw error;
  }
};

/**
 * Submits data to a Baserow form
 * @param formId The ID of the form to submit to
 * @param formData The data to submit to the form
 * @returns Promise with the submission result
 */
export const submitFormData = async (formData: MembershipFormData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/database/rows/table/${TABLE_ID}/`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error(`Error submitting form: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to submit form data:', error);
    throw error;
  }
};

/**
 * Extracts the form ID from a Baserow form URL
 * @param url The full Baserow form URL
 * @returns The form ID
 */
export const getFormRow = async (rowId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/api/database/rows/table/${TABLE_ID}/${rowId}/`, {
      headers: {
        'Authorization': `Token ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error fetching form row: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch form row:', error);
    throw error;
  }
};

// Marital Status options
export const MARITAL_STATUS_OPTIONS = [
  { value: 1, label: 'Single' },
  { value: 2, label: 'Married' }
];

// Membership Type options
export const MEMBERSHIP_TYPE_OPTIONS = [
  { value: 1, label: 'New Member' },
  { value: 2, label: 'Renewal' }
];

// Family in Qatar options
export const FAMILY_IN_QATAR_OPTIONS = [
  { value: 1, label: 'Yes' },
  { value: 2, label: 'No' }
];
