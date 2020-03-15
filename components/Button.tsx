import React from 'react'

interface Props {
  variant?: 'primary' | 'secondary'
  className?: string
}

const styles = {
  default: 'px-3 py-2 text-center text-inter',
  primary: 'bg-brand-purple text-white hover:opacity-75',
  secondary: 'text-brand-slate shadow-button hover:opacity-50',
}

const Button: React.FC<Props> = ({
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button
      className={`${styles.default} ${styles[variant]} ${className ?? ''}`}
      {...props}
    >
      Button
    </button>
  )
}

export default Button
