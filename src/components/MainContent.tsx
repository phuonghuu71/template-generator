'use client'

import React, { useState } from 'react';
import { Input, Typography, Radio, RadioChangeEvent } from "antd";
import MultiInput from "./MultiInput";
import '@ant-design/v5-patch-for-react-19';

const { Title } = Typography;
const { TextArea } = Input;

function MainContent() {
  const [title, setTitle] = useState<string>('');
  const [status, setStatus] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');
  const [precondition, setPrecondition] = useState<string[]>([]);
  const [testData, setTestData] = useState<string[]>([]);
  const [expectedResult, setExpectedResult] = useState<string[]>([]);
  const [actualResult, setActualResult] = useState<string[]>([]);
  const [testStep, setTestStep] = useState<string[]>([]);

  // Join lines to look like the template expects
  const formatLines = (lines: string[]) => lines.map(line => `- ${line}`).join('\n');

  const template = `
/*********** TEST CASE START ***********/

Title               : ${title || '<Short descriptive name of the test case>'}

Preconditions       :
${formatLines(precondition)}

Test Data           :
${formatLines(testData)}

Test Steps          :
${testStep.map((step, i) => `${i + 1}. ${step}`).join('\n')}

Expected Result     :
${formatLines(expectedResult)}

Actual Result       :
${formatLines(actualResult)}

Status              : [${status === 1 ? 'x' : ' '}] Pass   [${status === 2 ? 'x' : ' '}] Fail   [${status === 3 ? 'x' : ' '}] Blocked

Notes               :
- ${notes || '<Additional info, such as logs, observations, screenshots, etc.>'}

/*********** TEST CASE END ***********/
  `.trim();

  return (
    <div className='grid grid-cols-2 grid-rows-1 gap-4 h-full'>
      <div className='bg-white p-4 rounded-lg shadow-md overflow-y-auto'>
        <Typography className='flex flex-col gap-4 justify-evenly h-full'>
          <Title level={3}>Test Case Input</Title>

          <div>
            <Title level={5}>Title</Title>
            <Input placeholder="Title" allowClear value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <Title level={5}>Status</Title>
            <Radio.Group value={status} onChange={(e: RadioChangeEvent) => {
              setStatus(e.target.value)
            }} options={
              [{
                value: 1,
                label: 'Pass'
              }, {
                value: 2,
                label: 'Fail'
              }, {
                value: 3,
                label: 'Blocked'
              }]
            } />
          </div>

          <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
            <MultiInput title="Precondition" items={precondition} setItems={setPrecondition} />
            <MultiInput title="Test Data" items={testData} setItems={setTestData} />
          </div>

          <div className='grid xl:grid-cols-2 grid-cols-1 gap-4'>
            <MultiInput title="Expected Result" items={expectedResult} setItems={setExpectedResult} />
            <MultiInput title="Actual Result" items={actualResult} setItems={setActualResult} />
          </div>

          <MultiInput title="Test Step" items={testStep} setItems={setTestStep} />

          <div>
            <Title level={5}>Notes</Title>
            <TextArea placeholder="Notes" style={{ height: 120 }} value={notes} onChange={(e) => setNotes(e.target.value)} />
          </div>
        </Typography>
      </div>

      <div className='flex'>
        <TextArea value={template} className='h-full' style={{
          resize: 'none'
        }} />
      </div>
    </div>
  )
}

export default MainContent;
