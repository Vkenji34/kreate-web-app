import React, { useEffect, useState } from 'react';
import { PageContainer } from '~/components/layout/PageContainer';
import { SectionContainer } from '~/components/layout/SectionContainer';
import PaymentCode from '../components/PaymentCode';
import { Button } from '~/components/ui/button';
import { TypeOutline } from 'lucide-react';

const PaymentPage = () => {
  const [timeLeft, setTimeLeft] = useState(600); // Set initial time to 10 minutes (600 seconds)

  // Define constants for payment details
  const paymentDetails = {
    status: 'Menunggu Pembayaran',
    transactionId: 'ABCD12314',
    price: 'Rp 100.000',
  };

  // Function to format time (e.g., 10:00)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
  };

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <PageContainer>
      <SectionContainer className="relative" minFullscreen padded>
        <div className="flex flex-col items-center">
          <h1 className="text-center text-2xl font-bold mb-10">Payment</h1>

          <PaymentCode />

          <div className="mt-6 text-xl font-semibold text-primary">
            {formatTime(timeLeft)}
          </div>
          {/* Status */}
          <div className="mt-8 flex justify-between items-center w-full px-0">
            <span className="font-semibold">Status</span>
            <span className="font-normal">{paymentDetails.status}</span>
          </div>
          {/* Transaction ID */}
          <div className="mt-3 flex justify-between items-center w-full px-0">
            <span className="font-semibold">Transaction ID</span>
            <span className="font-normal">{paymentDetails.transactionId}</span>
          </div>
          {/* Nominal */}
          <div className="mt-3 flex justify-between items-center w-full px-0">
            <span className="font-semibold">Nominal</span>
            <span className="font-normal">{paymentDetails.price}</span>
          </div>
          {/* Instructions to scan */}
          <div className="mt-5 flex justify-center items-center w-full px-4 text-center">
            <span className="text-xs text-muted">
              Scan menggunakan aplikasi bank / e-wallet untuk menyelesaikan transaksi.
            </span>
          </div>

        
        </div>
        <Button size="lg" variant="outline" className='mt-10'>
            Refresh Payment
          </Button>
      </SectionContainer>
    </PageContainer>
  );
};

export default PaymentPage;
