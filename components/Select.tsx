import React from 'react'

interface Props {
  disabled?: boolean
  className?: string
}

const styles = {
  default:
    'px-3 py-2 w-full text-inter border text-brand-slate shadow-form block appearance-none bg-white pr-10 rounded-none border-none',
  disabled: 'text-brand-gray bg-brand-offwhite cursor-not-allowed',
}

const Select: React.FC<Props> = ({ disabled, className, ...props }) => {
  return (
    <div className={`inline-block relative ${className ?? ''}`} {...props}>
      <select
        className={`${styles.default} ${
          disabled ? styles.disabled : styles.default
        }`}
        disabled={disabled}
      >
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-brand-slate mr-3">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export default Select
