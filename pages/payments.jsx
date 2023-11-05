import React, { useState } from 'react';

const qrCodeImageUrl = 'YOUR_QR_CODE_IMAGE_URL';

function Payment() {
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');

  const handleTonTransfer = () => {
    // Implement TON transfer logic here
    // For example:
    // Call an API to transfer TON from sender to receiver

    // Open TonKeeper extension link
    window.open('https://wallet.tonkeeper.com/', '_blank');
  };

  return (
    <div>
      <h2>TON Cryptocurrency Transfer</h2>
      <div>
        <label>Receiver Address:</label>
        <input
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
      </div>
      <div>
        <label>Amount (TON):</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleTonTransfer}>Submit</button>

      <div style={{ marginTop: '20px' }}>
        <h3>OR</h3>
        <h4>Make Payment using QR Code:</h4>
        <img src={qrCodeImageUrl} alt="QR Code" />
      </div>
    </div>
  );
}

export default Payment;