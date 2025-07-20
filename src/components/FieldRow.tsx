import { Field } from '../App';
import FieldList from './FieldList';

interface FieldRowProps {
  field: Field;
  onChange: (field: Field) => void;
  onDelete: () => void;
}

const FieldRow = ({ field, onChange, onDelete }: FieldRowProps) => {
  const updateKey = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...field, key: e.target.value });
  };

  const updateType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value as Field['type'];
    onChange({
      ...field,
      type: newType,
      children: newType === 'Nested' ? field.children || [] : undefined,
    });
  };

  const updateChildren = (children: Field[]) => {
    onChange({ ...field, children });
  };

  return (
    <div className="border p-4 rounded space-y-2">
      <div className="flex gap-4 items-center">
        <input
          type="text"
          className="border px-2 py-1 rounded w-1/2"
          placeholder="Field key"
          value={field.key}
          onChange={updateKey}
        />
        <select
          className="border px-2 py-1 rounded"
          value={field.type}
          onChange={updateType}
        >
          <option value="String">String</option>
          <option value="Number">Number</option>
          <option value="Nested">Nested</option>
          <option value="boolean">boolean</option>
        </select>
        <button className="text-red-500" onClick={onDelete}>
          Delete
        </button>
      </div>

      {field.type === 'Nested' && (
        <div className="ml-4">
          <FieldList fields={field.children || []} onChange={updateChildren} />
        </div>
      )}
    </div>
  );
};

export default FieldRow;
