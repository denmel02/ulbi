import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { RouteConfig } from "../model"

export const AppRouter = () => {
  return (
    <Suspense fallback={ <h1>Loading...</h1> }>
        <Routes>
          { Object.values(RouteConfig).map((routeProps) => (
            <Route key={ routeProps.path } {...routeProps} />
          ))}
        </Routes>
      </Suspense>
  )
}