"use client";

import React from "react";

export const OrangeCircle: React.FC<{ size?: number }> = ({ size = 64 }) => (
  <div
    className="rounded-full bg-orange-500 flex items-center justify-center"
    style={{ width: size, height: size }}
    aria-label="Orange circle"
    role="img"
  />
);

export default OrangeCircle;
