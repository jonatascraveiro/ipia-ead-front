export const SkeletonForm = () => {
  return (
    <div
      className="mx-2 mb-2 grid grid-cols-12 gap-4 md:gap-6 animate-pulse
"
    >
      <div className="col-span-12">
        <div className="h-12 w-full rounded bg-gray-200" />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 ">
        <div className="h-12 w-full rounded bg-gray-200" />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 ">
        <div className="h-12 w-full rounded bg-gray-200" />
      </div>
      <div className="col-span-12 sm:col-span-6 md:col-span-4 ">
        <div className="h-12 w-full rounded bg-gray-200" />
      </div>
      <div className=" col-span-12  flex  items-end gap-6">
        <div className="h-12 w-[300px] rounded bg-gray-200" />
        <div className="h-12 w-[300px] rounded bg-gray-200" />
      </div>
    </div>
  )
}
