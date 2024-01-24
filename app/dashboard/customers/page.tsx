'use client';
import React, { useEffect, useState } from 'react';

const DelayedHeading: React.FC = () => {
  const [showHeading, setShowHeading] = useState(true);
  const hh = "Delayed Heading";

  return (
    <div>
      {showHeading && <h1>{hh}</h1>}
    </div>
  );
};

export default DelayedHeading;
