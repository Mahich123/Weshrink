"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form"
import { CreateUrlDataType } from "../../weshrink-backend-server/src/lib/formschema"


export default function CreateUrlForm() {

  const form = useForm<CreateUrlDataType>({
    defaultValues: {
      longUrl: "",
      urlName: "",
      alias: ""
    },
  })
  
  const [enableExpiry, setEnableExpiry] = useState(false)


  return (
    <Card className="w-full max-w-[20rem] md:max-w-md mx-auto bg-[#605678]/40 border-[#D9D9D9]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold"></CardTitle>
      </CardHeader>
      <CardContent className="text-white">
        <Form {...form}>
          <form  className="space-y-4">
            <FormField
              control={form.control}
              name="longUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Original URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-[#4D495E]"
                      placeholder=""
                      type="url"
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="urlName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name of the URL</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-[#4D495E]"
                      placeholder=""
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alias"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Custom Alias (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-[#4D495E]"
                      placeholder=""
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex items-center space-x-2">
              <Switch
                id="enable-expiry"
                checked={enableExpiry}
                onCheckedChange={setEnableExpiry}
              />
              <FormLabel htmlFor="enable-expiry" className="text-white">
                Enable Expiry
              </FormLabel>
            </div>

            <CardFooter className="px-0">
              <Button
                type="submit"
                className="w-full bg-[#D9D9D9] hover:bg-[#605678] hover:border border-white-500 hover:text-white text-black"
              >
                Create Link
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

