import { FC } from 'react';
import MembershipForm from '../../components/exco/MembershipForm';
import { Navbar } from '../../components/layout/Navbar';

const MembershipPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
            Join SACKOBA Qatar
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below to submit your membership application
          </p>
          <MembershipForm />
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
