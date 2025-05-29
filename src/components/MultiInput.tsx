'use client'

import React, { useState } from 'react';
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";

const { Title, Text } = Typography;

type PreconditionInputProps = {
  title: string;
  items: string[];
  setItems: (items: string[]) => void;
};

function MultiInput({ title, items, setItems }:
  PreconditionInputProps
) {
  const [input, setInput] = useState<string>('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      setItems([...items, input.trim()]);
      setInput('');
    }
  };

  const handleRemove = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <Title level={5}>{title}</Title>
      <div className="flex gap-2 mb-2">
        <Input placeholder={title} allowClear value={input} onChange={(e) => setInput(e.target.value)} />
        <Button className="min-w-28" type="primary" icon={<PlusOutlined />} onClick={handleAdd}>Add</Button>
      </div>

      <ul>
        {items.map((item, index) =>
        (<li key={index} className='list-disc'>
          <div className="flex justify-between gap-2 mb-2 w-full">
            <Text>{item}</Text>
            <Button className="min-w-28" type="primary" icon={<MinusOutlined />} onClick={() => handleRemove(index)}>Remove</Button>
          </div>
        </li>
        ))}
      </ul>
    </div>)
}

export default MultiInput;
