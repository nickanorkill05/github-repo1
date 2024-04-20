import { React } from 'react' 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input" 
import { Label } from "@/components/ui/label"

export default function CardWithForm({showCardHolder, handleBackButtonClick, setShowNextButton }) {

  return (
    <>
       {showCardHolder && (
      <div className="border bg-gray-800 p-1 mt-2">
      
          <Card className="w-[550px] bg-gradient-to-r from-teal-300 to-cyan-200 p-3">
              <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent className="">
              <form>
                <div className="grid w-full items-center gap-4">
      
                  <div className="flex flex-col space-y-1.5 ">
                    <Label htmlFor="name">Username:</Label>
                    <Input id="user" placeholder="Username"
                    className="w-full bg-white focus:bg-gray-200 focus:filter
                    focus:grayscale focus:opacity-100 transition-opacity duration-200" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Password: </Label>
                    <Input id="pass" placeholder="Password"
                    className="w-full bg-white focus:bg-gray-200 focus:filter
                    focus:grayscale focus:opacity-100 transition-opacity duration-200" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between ">
              
              <Button variant="outline" onClick={handleBackButtonClick}
              className="hover:bg-white">Cancel</Button>
              
              <Button variant="outline" className="hover:bg-white">Sign-in</Button>
            </CardFooter>
          </Card>
      </div>
       )}
       {!showCardHolder && (
         <div className="flex justify-center items-center">
           <button onClick={() => setShowNextButton(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
             Login
           </button>
         </div>
       )}
    </>
  )
}
