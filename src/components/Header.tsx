'use client'

import React from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

function Header() {
  return <header className="shrink px-6 pt-3 bg-white shadow-sm border-gray-300 border-b-2">
    <Typography>
      <Title level={2}>Template</Title>
    </Typography>
  </header>
}

export default Header;
