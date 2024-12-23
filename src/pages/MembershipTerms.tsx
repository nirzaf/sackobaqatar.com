import { FC } from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';

export const MembershipTerms: FC = () => {
  const terms = [
    "All Old Boys of St. Anthony's College Kandy, living in Qatar shall be eligible for the membership.",
    "All Teachers, past and present shall be eligible to become an Honorary Member of the SACKOBA Qatar.",
    "An old boy shall be eligible to become a member of the association with a payment of QAR.200/- and SACKOBA-QATAR will provide the life membership of the parent OBA in Kandy if he is not an existing life member of the Parent Body.",
    "If a new member is holding a parent body life membership will be charged QAR.150/- for membership registration in Qatar.",
    "Annual membership renewals of SACKOBA-QATAR will be done with the payment of QAR 150/-.",
    "An existing member who does not renew his membership for a calendar year while living in Qatar will be treated as a new membership. Membership fee collection remains unchanged (QR.150/-). However, the same membership number will be used and the period of non-membership will be recorded.",
    "The processing of membership renewals will take place effective from 01st April to 31st March of every calendar year.",
    "All members of SACKOBA-QATAR will be eligible to obtain life membership from OBA parent body (Kandy) as well.",
    "Membership fees or annual membership renewal fee cannot be refunded.",
    "SACKOBA Qatar retains the right to store and make use of membership information within the scope of the Association's constitutional activities, provision of services, administration, to fulfil legal or contractual obligations and to comply with government decrees.",
    "It is the member's responsibility to ensure that all provided information are up-to-date.",
    "Members have the right to notify SACKOBA Qatar that the individual concerned does not wish to receive communications from the association. (Please notify SACKOBA Qatar of this in writing.)",
    "All other membership rights shall be exercised in accordance with the provisions of the SACKOBA Qatar Constitution."
  ];

  const bankDetails = {
    bank: "Doha Bank",
    branch: "West Bay Branch",
    accountName: "SACKOBA-Qatar",
    accountNumber: "211-280573-01-10-0",
    iban: "QA28 DOHB 0211 0280 5730 0100 1000 0"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B62D71]/10 via-[#541D67]/20 to-[#5B4886]/30 py-16 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-3xl mt-12 md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B62D71] via-[#cb67ec] to-[#5513f0] mb-4">
            Membership Terms
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            General terms and conditions for SACKOBA Qatar membership
          </p>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="https://workdrive.zohoexternal.com/file/5s3n9011971058c1e465a90bbb872188356b6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B62D71] to-[#541D67] hover:from-[#B62D71]/90 hover:to-[#541D67]/90 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
              download
            >
              <HiDownload className="w-5 h-5" />
              Download Membership Form
            </a>
          </motion.div>
        </motion.div>

        {/* Terms Section */}
        <motion.div 
          className="grid gap-8 mb-16"
          variants={containerVariants}
        >
          <div className="bg-gradient-to-br from-[#B62D71]/5 via-[#541D67]/10 to-[#5B4886]/15 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-[#B62D71]/20">
            <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-[#B62D71]/20">
              Terms & Conditions
            </h2>
            <ol className="grid gap-6">
              {terms.map((term, index) => (
                <motion.li 
                  key={index}
                  className="flex gap-4 text-white hover:text-white transition-colors"
                  variants={itemVariants}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#B62D71]/20 to-[#541D67]/20 text-white font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-lg leading-relaxed pt-1">{term}</span>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* Bank Details Section */}
        <motion.div 
          className="bg-gradient-to-br from-[#B62D71]/5 via-[#541D67]/10 to-[#5B4886]/15 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-[#B62D71]/20"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-[#B62D71]/20">
            Account Details of {bankDetails.bank} Account 
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#B62D71]/10 to-[#541D67]/10 rounded-xl p-4 border border-[#B62D71]/10 hover:border-[#B62D71]/30 transition-colors">
                <p className="text-sm text-white/80 mb-1">Branch</p>
                <p className="text-lg text-white">{bankDetails.branch}</p>
              </div>
              <div className="bg-gradient-to-r from-[#B62D71]/10 to-[#541D67]/10 rounded-xl p-4 border border-[#B62D71]/10 hover:border-[#B62D71]/30 transition-colors">
                <p className="text-sm text-white/80 mb-1">Account Name</p>
                <p className="text-lg text-white">{bankDetails.accountName}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#B62D71]/10 to-[#541D67]/10 rounded-xl p-4 border border-[#B62D71]/10 hover:border-[#B62D71]/30 transition-colors">
                <p className="text-sm text-white/80 mb-1">Account Number</p>
                <p className="text-lg text-white font-mono">{bankDetails.accountNumber}</p>
              </div>
              <div className="bg-gradient-to-r from-[#B62D71]/10 to-[#541D67]/10 rounded-xl p-4 border border-[#B62D71]/10 hover:border-[#B62D71]/30 transition-colors">
                <p className="text-sm text-white/80 mb-1">IBAN</p>
                <p className="text-lg text-white font-mono break-all">{bankDetails.iban}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
