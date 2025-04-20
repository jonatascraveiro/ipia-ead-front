import * as React from 'react'

import { cn } from '@/lib/utils'
import { Label } from './label'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value'
> & {
  error?: string
  label?: string
  value?: string | null | undefined | string[] | number
  icon?: React.ReactNode
  iconClick?: () => void
  nomeArquivo?: string
  extensoesPermitidas?: string
  resolucao?: string
}

const InputFile = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label,
      error,
      nomeArquivo,
      extensoesPermitidas,
      resolucao,
      ...props
    },
    ref,
  ) => {
    const [nome, setNome] = React.useState(nomeArquivo || '')
    console.log(nome)
    return (
      <>
        {label && (
          <Label htmlFor={label}>
            {label}
            {resolucao && <span className="text-xs"> - Tam.: {resolucao}</span>}
            {extensoesPermitidas && (
              <span className="text-xs"> - Formato: {extensoesPermitidas}</span>
            )}
          </Label>
        )}

        <div className="flex items-center  w-full">
          {/* {nome && (
            <div
              className=" h-12 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                error ? 'border-red-500' : 'border-slate-200',"
            >
              {nome}
            </div>
          )} */}

          <input
            type={nome ? 'text' : 'file'}
            readOnly
            onChange={(e) => setNome(e.target.value)}
            placeholder={nome}
            className={cn(
              'flex h-12 w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 -me-10',
              error ? 'border-red-500' : 'border-slate-200',
              className,
            )}
            ref={ref}
            {...props}
          />

          {nome && !props.disabled && (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              onClick={() => (props.disabled ? null : setNome(''))}
              className={cn(
                'w-15 text-2xl disabled:cursor-not-allowed',
                props.disabled && 'cursor-not-allowed opacity-50 ',
              )}
              style={{
                // position: 'absolute',
                textAlign: 'end',
                zIndex: 2,
                alignSelf: 'center',
              }}
            >
              X
            </div>
          )}
        </div>
      </>
    )
  },
)
InputFile.displayName = 'InputFile'

export { InputFile }
