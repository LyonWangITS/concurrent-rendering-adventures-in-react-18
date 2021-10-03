import { TextareaHTMLAttributes, unstable_useOpaqueIdentifier } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  value: string;
}

export function LabelTextarea({ label, value, ...rest }: Props) {
  const id = unstable_useOpaqueIdentifier();

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <textarea id={id} className="form-control" value={value} {...rest} />
    </div>
  );
}
