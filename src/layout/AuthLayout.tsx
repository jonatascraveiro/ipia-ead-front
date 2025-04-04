import { Outlet } from "react-router"

export default function AuthLayout() {
  return (
    <div className="w-full">
      <Outlet />
    </div>
  )
}
