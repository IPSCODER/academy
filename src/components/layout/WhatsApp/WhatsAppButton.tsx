// components/WhatsAppButton.tsx
'use client';

import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="917030005100"  // 👈 Replace with your number
      accountName="Code Academy Support"
      avatar="/whatsapp-avatar.png"  // Optional: Add a custom avatar
      statusMessage="Typically replies within 1 hour"
      chatMessage="Hi there! How can we help you?"
      placeholder="Type your message"
      darkMode={false}
      notification
    />
  );
}
