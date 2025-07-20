import { v4 as uuidv4 } from 'uuid';
import FieldRow from './FieldRow';
import { Field } from '../App';

interface FieldListProps {
  fields: Field[];
  onChange: (fields: Field[]) => void;
}

const FieldList = ({ fields, onChange }: FieldListProps) => {
  const addField = () => {
    const newField: Field = {
      id: uuidv4(),
      key: '',
      type: 'String',
    };
    onChange([...fields, newField]);
  };

  const updateField = (index: number, field: Field) => {
    const updated = [...fields];
    updated[index] = field;
    onChange(updated);
  };

  const deleteField = (index: number) => {
    const updated = fields.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <FieldRow
          key={field.id}
          field={field}
          onChange={(updated) => updateField(index, updated)}
          onDelete={() => deleteField(index)}
        />
      ))}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={addField}
      >
        + Add Field
      </button>
    </div>
  );
};

export default FieldList;