import { Field } from '../App';

const buildJSON = (fields: Field[]): any => {
  const result: any = {};

  fields.forEach((field) => {
    if (!field.key) return;
    if (field.type === 'String') {
      result[field.key] = 'default string';
    } else if (field.type === 'Number') {
      result[field.key] = 0;
    } else if (field.type === 'Nested') {
      result[field.key] = buildJSON(field.children || []);
    }
  });

  return result;
};

const JSONPreview = ({ fields }: { fields: Field[] }) => {
  return (
    <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
      {JSON.stringify(buildJSON(fields), null, 2)}
    </pre>
  );
};

export default JSONPreview;