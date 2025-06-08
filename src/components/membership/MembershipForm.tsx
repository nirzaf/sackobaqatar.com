import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { submitFormData, MembershipFormData, MARITAL_STATUS_OPTIONS, MEMBERSHIP_TYPE_OPTIONS } from '../../services/baserow';

export const MembershipForm: FC = () => {
  const [formData, setFormData] = useState<MembershipFormData>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitFormData(formData);
      setSuccess(true);
      setFormData({});
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (success) {
    return (
      <motion.div
        className="bg-gradient-to-br from-[#B62D71]/5 via-[#541D67]/10 to-[#5B4886]/15 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-[#B62D71]/20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-white mb-6">Your membership application has been submitted successfully.</p>
        <button
          onClick={() => setSuccess(false)}
          className="px-6 py-3 bg-gradient-to-r from-[#B62D71] to-[#541D67] hover:from-[#B62D71]/90 hover:to-[#541D67]/90 text-white font-semibold rounded-lg transition-all"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="grid gap-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {error && (
        <motion.div 
          className="bg-red-500/20 text-white p-4 rounded-lg"
          variants={itemVariants}
        >
          {error}
        </motion.div>
      )}

      <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
        <div>
          <label htmlFor="field_4551270" className="block text-white mb-2">Full Name *</label>
          <input
            type="text"
            id="field_4551270"
            name="field_4551270"
            required
            value={formData.field_4551270 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>

        <div>
          <label htmlFor="field_4551373" className="block text-white mb-2">Email *</label>
          <input
            type="email"
            id="field_4551373"
            name="field_4551373"
            required
            value={formData.field_4551373 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>
      </motion.div>

      <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
        <div>
          <label htmlFor="field_4551371" className="block text-white mb-2">Mobile Number *</label>
          <input
            type="tel"
            id="field_4551371"
            name="field_4551371"
            required
            value={formData.field_4551371 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>

        <div>
          <label htmlFor="field_4551277" className="block text-white mb-2">Marital Status *</label>
          <select
            id="field_4551277"
            name="field_4551277"
            required
            value={formData.field_4551277 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          >
            <option value="">Select Status</option>
            {MARITAL_STATUS_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <label htmlFor="field_4551367" className="block text-white mb-2">Address in Qatar *</label>
        <textarea
          id="field_4551367"
          name="field_4551367"
          required
          value={formData.field_4551367 || ''}
          onChange={handleChange}
          rows={3}
          className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
        />
      </motion.div>

      <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
        <div>
          <label htmlFor="field_4551450" className="block text-white mb-2">Occupation *</label>
          <input
            type="text"
            id="field_4551450"
            name="field_4551450"
            required
            value={formData.field_4551450 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>

        <div>
          <label htmlFor="field_4551452" className="block text-white mb-2">Organization *</label>
          <input
            type="text"
            id="field_4551452"
            name="field_4551452"
            required
            value={formData.field_4551452 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>
      </motion.div>

      <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
        <div>
          <label htmlFor="field_4551456" className="block text-white mb-2">School Period From *</label>
          <input
            type="text"
            id="field_4551456"
            name="field_4551456"
            required
            value={formData.field_4551456 || ''}
            onChange={handleChange}
            placeholder="YYYY"
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>

        <div>
          <label htmlFor="field_4551461" className="block text-white mb-2">School Period To *</label>
          <input
            type="text"
            id="field_4551461"
            name="field_4551461"
            required
            value={formData.field_4551461 || ''}
            onChange={handleChange}
            placeholder="YYYY"
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>
      </motion.div>

      <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
        <div>
          <label htmlFor="field_4551463" className="block text-white mb-2">Admission Number</label>
          <input
            type="text"
            id="field_4551463"
            name="field_4551463"
            value={formData.field_4551463 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>

        <div>
          <label htmlFor="field_4551464" className="block text-white mb-2">Date of Birth *</label>
          <input
            type="date"
            id="field_4551464"
            name="field_4551464"
            required
            value={formData.field_4551464 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <label htmlFor="field_4551470" className="block text-white mb-2">Extra Curricular Activities</label>
        <textarea
          id="field_4551470"
          name="field_4551470"
          value={formData.field_4551470 || ''}
          onChange={handleChange}
          rows={3}
          className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
        />
      </motion.div>

      <motion.div className="grid md:grid-cols-2 gap-6" variants={itemVariants}>
        <div>
          <label htmlFor="field_4551480" className="block text-white mb-2">Membership Type *</label>
          <select
            id="field_4551480"
            name="field_4551480"
            required
            value={formData.field_4551480 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          >
            <option value="">Select Type</option>
            {MEMBERSHIP_TYPE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="field_4551472" className="block text-white mb-2">Proposed By</label>
          <input
            type="text"
            id="field_4551472"
            name="field_4551472"
            value={formData.field_4551472 || ''}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-[#B62D71]/30 text-white focus:outline-none focus:ring-2 focus:ring-[#B62D71]/50"
          />
        </div>
      </motion.div>

      <motion.button
        type="submit"
        disabled={loading}
        className={`w-full px-6 py-4 bg-gradient-to-r from-[#B62D71] to-[#541D67] hover:from-[#B62D71]/90 hover:to-[#541D67]/90 text-white font-semibold rounded-lg transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
        variants={itemVariants}
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </motion.button>
    </motion.form>
  );
};

export default MembershipForm;
