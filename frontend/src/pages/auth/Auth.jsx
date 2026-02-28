import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Login from './Login'
import Register from './Register'

/**
 * Combined Login / Sign Up page — mount at the /auth route.
 * Reads a `createNew` query param to show a contextual heading on redirect.
 */
const Auth = () => {
  const [searchParams] = useSearchParams()
  return (
    <div className="mt-36 flex flex-col items-center gap-10">
      <h1 className="text-5xl font-extrabold">
        {searchParams.get("createNew") ? "Please login first" : "Login / Sign Up"}
      </h1>
      <Tabs defaultValue="Login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="Login">Login</TabsTrigger>
          <TabsTrigger value="Sign Up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="Login"><Login /></TabsContent>
        <TabsContent value="Sign Up"><Register /></TabsContent>
      </Tabs>
    </div>
  )
}

export default Auth
