import React from 'react'

interface Props {
  disabled?: boolean
  className?: string
  [prop: string]: any
}

const styles = {
  default: 'px-3 py-2 shadow-form text-brand-slate text-inter',
  disabled: 'text-brand-gray bg-brand-offwhite cursor-not-allowed',
}

const Input: React.FC<Props> = ({ disabled, className, ...props }) => {
  return (
    <input
      className={`${styles.default} ${disabled &&
        styles.disabled} ${className ?? ''}`}
      disabled={disabled}
      {...props}
    />
  )
}

export default Input
