import { FC, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface FormData {
  fullName: string;
  addressQatar: string;
  residencePhone: string;
  officePhone: string;
  mobilePhone: string;
  email: string;
  addressSriLanka: string;
  marriedFamilyInQatar: string;
  phoneSriLanka: string;
  obaMembershipNumber: string;
  occupation: string;
  organization: string;
  yearsInQatar: string;
  schoolPeriodFrom: string;
  schoolPeriodTo: string;
  admissionNumber: string;
  dateOfBirth: string;
  extraCurricularActivities: string[];
  proposedBy: string;
  membershipFee: string;
  date: string;
}

export const MembershipForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    addressQatar: '',
    residencePhone: '',
    officePhone: '',
    mobilePhone: '',
    email: '',
    addressSriLanka: '',
    marriedFamilyInQatar: '',
    phoneSriLanka: '',
    obaMembershipNumber: '',
    occupation: '',
    organization: '',
    yearsInQatar: '',
    schoolPeriodFrom: '',
    schoolPeriodTo: '',
    admissionNumber: '',
    dateOfBirth: '',
    extraCurricularActivities: ['', '', ''],
    proposedBy: '',
    membershipFee: '',
    date: new Date().toISOString().split('T')[0],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExtraCurricularChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      extraCurricularActivities: prev.extraCurricularActivities.map((activity, i) =>
        i === index ? value : activity
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const { error } = await supabase
        .from('membership_applications')
        .insert([formData]);

      if (error) throw error;

      setMessage({
        type: 'success',
        text: 'Your membership application has been submitted successfully!',
      });
      setFormData({
        fullName: '',
        addressQatar: '',
        residencePhone: '',
        officePhone: '',
        mobilePhone: '',
        email: '',
        addressSriLanka: '',
        marriedFamilyInQatar: '',
        phoneSriLanka: '',
        obaMembershipNumber: '',
        occupation: '',
        organization: '',
        yearsInQatar: '',
        schoolPeriodFrom: '',
        schoolPeriodTo: '',
        admissionNumber: '',
        dateOfBirth: '',
        extraCurricularActivities: ['', '', ''],
        proposedBy: '',
        membershipFee: '',
        date: new Date().toISOString().split('T')[0],
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'An error occurred while submitting your application. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Membership Application</h2>
            <p className="mt-2 text-gray-600">St. Anthony's College Old Boys' Association Qatar</p>
          </div>

          {message.text && (
            <div
              className={`mb-6 p-4 rounded-md ${
                message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="addressQatar" className="block text-sm font-medium text-gray-700">
                  Address in Qatar
                </label>
                <textarea
                  id="addressQatar"
                  name="addressQatar"
                  required
                  value={formData.addressQatar}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="addressSriLanka" className="block text-sm font-medium text-gray-700">
                  Address in Sri Lanka
                </label>
                <textarea
                  id="addressSriLanka"
                  name="addressSriLanka"
                  required
                  value={formData.addressSriLanka}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="residencePhone" className="block text-sm font-medium text-gray-700">
                    Residence Phone
                  </label>
                  <input
                    type="tel"
                    id="residencePhone"
                    name="residencePhone"
                    value={formData.residencePhone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="officePhone" className="block text-sm font-medium text-gray-700">
                    Office Phone
                  </label>
                  <input
                    type="tel"
                    id="officePhone"
                    name="officePhone"
                    value={formData.officePhone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="mobilePhone" className="block text-sm font-medium text-gray-700">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    id="mobilePhone"
                    name="mobilePhone"
                    required
                    value={formData.mobilePhone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="phoneSriLanka" className="block text-sm font-medium text-gray-700">
                    Phone Number in Sri Lanka
                  </label>
                  <input
                    type="tel"
                    id="phoneSriLanka"
                    name="phoneSriLanka"
                    value={formData.phoneSriLanka}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Professional Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="occupation" className="block text-sm font-medium text-gray-700">
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    required
                    value={formData.occupation}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="yearsInQatar" className="block text-sm font-medium text-gray-700">
                    Years in Qatar
                  </label>
                  <input
                    type="text"
                    id="yearsInQatar"
                    name="yearsInQatar"
                    required
                    value={formData.yearsInQatar}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="marriedFamilyInQatar" className="block text-sm font-medium text-gray-700">
                    Married/Family in Qatar
                  </label>
                  <input
                    type="text"
                    id="marriedFamilyInQatar"
                    name="marriedFamilyInQatar"
                    value={formData.marriedFamilyInQatar}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* School Information */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-gray-900">School Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="admissionNumber" className="block text-sm font-medium text-gray-700">
                    Admission Number
                  </label>
                  <input
                    type="text"
                    id="admissionNumber"
                    name="admissionNumber"
                    required
                    value={formData.admissionNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="obaMembershipNumber" className="block text-sm font-medium text-gray-700">
                    OBA Membership Number
                  </label>
                  <input
                    type="text"
                    id="obaMembershipNumber"
                    name="obaMembershipNumber"
                    value={formData.obaMembershipNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="schoolPeriodFrom" className="block text-sm font-medium text-gray-700">
                    School Period From
                  </label>
                  <input
                    type="text"
                    id="schoolPeriodFrom"
                    name="schoolPeriodFrom"
                    required
                    value={formData.schoolPeriodFrom}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label htmlFor="schoolPeriodTo" className="block text-sm font-medium text-gray-700">
                    School Period To
                  </label>
                  <input
                    type="text"
                    id="schoolPeriodTo"
                    name="schoolPeriodTo"
                    required
                    value={formData.schoolPeriodTo}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Extra Curricular Activities
                </label>
                {formData.extraCurricularActivities.map((activity, index) => (
                  <input
                    key={index}
                    type="text"
                    value={activity}
                    onChange={(e) => handleExtraCurricularChange(index, e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 mb-2"
                    placeholder={`Activity ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Membership Details */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Membership Details</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="proposedBy" className="block text-sm font-medium text-gray-700">
                    Proposed By
                  </label>
                  <input
                    type="text"
                    id="proposedBy"
                    name="proposedBy"
                    required
                    value={formData.proposedBy}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Membership Fee</label>
                  <div className="mt-2 space-y-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="membershipFee"
                        value="200"
                        checked={formData.membershipFee === '200'}
                        onChange={handleChange}
                        className="form-radio text-purple-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        New members without OBA Parent Body membership QR.200/=
                      </span>
                    </label>
                    <br />
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="membershipFee"
                        value="150"
                        checked={formData.membershipFee === '150'}
                        onChange={handleChange}
                        className="form-radio text-purple-600"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        New members with OBA Parent Body membership QR.150/=
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MembershipForm;
