
import './App.css';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import JSONPreview from './components/JSONPreview';
import FieldList from './components/FieldList';

export type FieldType = 'String' | 'Number' | 'Nested' | 'boolean';

export interface Field {
  id: string;
  key: string;
  type: FieldType;
  children?: Field[];
}

function App() {
  const [fields, setFields] = useState<Field[]>([]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">JSON Schema Builder</h1>

      <Tabs defaultValue="builder">
        <TabsList className="flex gap-4 justify-center mb-8">
          <TabsTrigger
            value="builder"
            className="px-5 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Builder
          </TabsTrigger>
          <TabsTrigger
            value="json"
            className="px-5 py-2 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition data-[state=active]:bg-green-600 data-[state=active]:text-white"
          >
            JSON Preview
          </TabsTrigger>
        </TabsList>

        <TabsContent value="builder">
          <FieldList fields={fields} onChange={setFields} />
        </TabsContent>
        <TabsContent value="json">
          <JSONPreview fields={fields} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
