import React, { useState } from 'react';
import Button from './Button';

type SignupModalProps = {
  open: boolean;
  onClose: () => void;
};

const SignupModal: React.FC<SignupModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');

  if (!open) return null;

  const handleSubmit = async () => {
    try {
      await fetch('https://formsubmit.co/ajax/jeff@thatsheaps.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ email })
      });
    } catch (error) {
      // ignore network errors and continue redirect
      console.error('Signup request failed', error);
    } finally {
      onClose();
      window.location.href = `${import.meta.env.BASE_URL}thankyou.html`;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <h2 className="text-lg font-medium text-slate-800 mb-4">Start your free trial</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full border border-slate-300 rounded-md p-2 mb-4 text-slate-700"
        />
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="md" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="md" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
