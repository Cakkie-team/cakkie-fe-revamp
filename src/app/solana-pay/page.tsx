'use client';

import React, { useEffect, useState } from 'react';
import { createQR } from '@solana/pay'; // Import Solana Pay QR generation
import { NextPage } from 'next';
import { Button } from "@/components";
import { useSearchParams } from 'next/navigation'; // For Next.js 13 app router



interface PaymentRequest {
  url: string;
  amount: string;
  label: string;
  message: string;
  reference: string;
}


const SolanaPay =()=> {
  const [qrCode, setQrCode] = useState<any | null>(null);
  const [loading, setLoading] = useState(true); // State to track loading
  const [payment, setPayment] = useState<PaymentRequest | null>(null);
  const [isConfirmed, setIsConfirmed] = useState(false); // State to track if the transaction is confirmed
  const searchParam = useSearchParams(); // Fetch query parameters


  // Function to fetch the payment request
  const fetchPaymentRequest = async (): Promise<PaymentRequest | null> => {
    try {
      const response = await fetch(
        `https://dev.api.cakkie.com/solana/request?currencySymbol=${searchParam.get('currencySymbol')}&userId=${searchParam.get('userId')}&desc=${searchParam.get('desc')}&price=${searchParam.get('price')}`
      );
      const data: PaymentRequest = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching payment request:', error);
      return null;
    }
  };

  useEffect(() => {
    const generateQrCode = async () => {
      setLoading(true); // Start loading
      const paymentRequest = await fetchPaymentRequest();

      if (paymentRequest && paymentRequest.url) {
        setPayment(paymentRequest);
        const qr = createQR(paymentRequest.url, 256, 'transparent'); // Create the QR code, smaller for mobile
        setQrCode(qr); // Set the QR code in the state
      }
      setLoading(false); // Stop loading after the QR is generated
    };

    // Call the function to generate the QR code on component mount
    if (searchParam.get('userId')) {
      generateQrCode();
    }
  }, [searchParam.get('userId')]);

  // Append the QR code to the div after it's created
  useEffect(() => {
    if (qrCode) {
      const qrElement = document.getElementById('qr-code');
      if (qrElement) {
        // Clear any existing QR code before appending a new one
        qrElement.innerHTML = '';

        // Append the QR code to the div
        qrCode.append(qrElement);
      }
    }
  }, [qrCode]);

  // Function to open the wallet app (only for mobile)
  const openWallet = () => {
    if (payment) {
      window.open(payment.url, '_blank');
    }
  };

  useEffect(() => {
    const verify = async (): Promise<boolean> => {
      try {
        const response = await fetch(
          `https://dev.api.cakkie.com/solana/confirm?reference=${payment?.reference}&amount=${payment?.amount}`
        );
        const data = await response.json();

        if (data?.signature) {
          setIsConfirmed(true); // Set the transaction as confirmed
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Error fetching payment confirmation:', error);
        return false;
      }
    };

    let interval: NodeJS.Timeout;
    if (payment && !isConfirmed) {
      interval = setInterval(async () => {
        const isVerified = await verify();
        if (isVerified) {
          clearInterval(interval); // Stop checking if the transaction is successful
          // Redirect to home page or success page
          window.location.href = '/success';
        }
      }, 2000); // Retry every 2 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [payment, isConfirmed]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center relative">
      {/* Cakkie Logo at top-right */}
      <img
        src="../svg/logo.svg" /* Replace with your actual logo path */
        alt="Cakkie Logo"
        className="absolute top-4 right-8 w-18 h-18 md:w-16 md:h-16"
      />

      {!isConfirmed ? (
        <>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Scan to Pay</h1>

          {/* QR Code and Placeholder */}
          <div className="relative">
            <div id="qr-code">
              {loading && (
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/256x256.png?text=QR+Placeholder"
                    alt="QR Code Placeholder"
                    className="opacity-30 w-64 h-64 md:w-72 md:h-72"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="loader border-t-transparent border-4 border-blue-500 rounded-full w-10 h-10 md:w-12 md:h-12 animate-spin"></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {payment && (
            <div className="mt-4">
              <p className="text-lg md:text-xl font-medium">Amount: {payment.amount} SOL</p>
              <p className="text-lg md:text-xl font-medium">Info: {payment.message}</p>
              <p className="text-lg md:text-xl font-bold">Please do not refresh the page</p>
            </div>
          )}

          {/* Mobile Button to Open Wallet */}
          <Button
            className="px-4 py-2 mt-4 rounded-lg md:hidden block text-[#FFF5DC] bg-cakkie"
            onClick={openWallet}
          >
            Open Wallet to Pay
          </Button>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          {/* Success UI */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-lg md:text-xl">Thank you for your payment.</p>
        </div>
      )}
    </div>
  );
};

export default SolanaPay;
