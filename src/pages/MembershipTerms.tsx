import { FC } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-primary-800/30 py-16">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          SACKOBA QATAR MEMBERSHIP GENERAL TERMS AND CONDITIONS
        </h1>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8">
          <ol className="list-decimal pl-6 space-y-4">
            {terms.map((term, index) => (
              <motion.li 
                key={index}
                className="text-white/90"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {term}
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Bank Account Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-white/90">Bank: {bankDetails.bank}</p>
              <p className="text-white/90">Branch: {bankDetails.branch}</p>
              <p className="text-white/90">Account Name: {bankDetails.accountName}</p>
            </div>
            <div>
              <p className="text-white/90">Account Number: {bankDetails.accountNumber}</p>
              <p className="text-white/90">IBAN: {bankDetails.iban}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
