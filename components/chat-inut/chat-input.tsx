"use client"
import React, { useState } from 'react';


export default function ChatbotInput() {

  return (
    <div>
      <input
        type="text"
        placeholder="Posez une question..."
      />
      <button>Envoyer</button>
    </div>
  )
}