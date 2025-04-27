type Props = {
  children: React.ReactNode
}

const CardForm = (props: Props) => {
  return (
    <div className="p-5 mb-6 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
      {props.children}
    </div>
  )
}

const Titulo = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children && (
        <h3 className="pb-4 text-2xl  text-gray-800 dark:text-white/90">
          {children}
        </h3>
      )}
    </>
  )
}

CardForm.Titulo = Titulo
export { CardForm, Titulo }
