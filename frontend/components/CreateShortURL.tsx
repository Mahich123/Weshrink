"use client";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";
import { CreateSuccessPopup } from "./CreateSuccessPopup";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaLink } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CreateUrlDataType } from "../../weshrink-backend-server/src/lib/formschema";
import { isAbsoluteUrl } from "next/dist/shared/lib/utils";
import { client } from "@/utils/honoClient";

export default function CreateShortURL() {
  const user = {
    userId: "",
    userName: "",
    isSignedIn: true,
  };

  const [isWrong, setIsWrong] = useState(false);
  const form = useForm<CreateUrlDataType>({
    defaultValues: {
      longUrl: "",
      urlName: "",
      alias: "",
      userID: user.userId ?? "",
      expiresAt: new Date(
        new Date().setDate(new Date().getDate() + 7)
      ).toISOString(),
    },
  });

  const {
    data: shortUrl,
    mutateAsync,
    isPending: isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: async (data: CreateUrlDataType) => {
      console.log(data);

      if (!isAbsoluteUrl(data.longUrl)) {
        setIsWrong(true);
        form.resetField("longUrl");
        throw new Error("Wrong url");
      }

      const res = await client.urls.$post({
        json: data,
      });

      console.log(res);

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        return data;
      }
    },
    onSuccess: () => {
      form.reset();
    },
  });

  return (
    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(async (data) => await mutateAsync(data))}
        className="min-w-[86%]"
      >
        <FormField
          control={form.control}
          name="longUrl"
          render={({ field }) => (
            <FormItem className="flex flex-col items-center justify-center p-0">
              <FormControl>
                <div
                  className={`${
                    isWrong
                      ? "animate-shake bg-[rgb(255,40,40,0.2)] border-red-800 shadow-[0px_0px_15px_rgba(255,_78,_45,_0.7)]"
                      : ""
                  } h-18 flex w-[95%] items-center space-x-2 rounded-full border-4 border-[#1E293B] bg-gray-900 p-1`}
                  onAnimationEnd={() => setIsWrong(false)}
                >
                  <FaLink className="ml-5 h-10 w-10 text-white" />

                  <Input
                    placeholder="Enter The Link Here~"
                    className="h-10 text-white border-0 bg-transparent focus-visible:ring-0"
                    {...field}
                  />

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        className="h-14 w-60 gap-x-2 rounded-full text-lg text-white bg-[#3B82F6]   hover:bg-[#2e64b9] active:bg-gray-300 disabled:bg-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed"
                        disabled={isLoading}
                        type="submit"
                      >
                        Trim Now!
                      </Button>
                    </AlertDialogTrigger>
                    {isSuccess && (
                      <AlertDialogContent className={`gap-y-6 border-4 border-white border-dashed bg-gray-900 
                        ${shortUrl?.success ? '' : 'animate-shake border-red-500'}
                      `}>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex flex-col items-center justify-center text-center text-white">
                            {shortUrl?.message}
                          </AlertDialogTitle>

                          <CreateSuccessPopup short={shortUrl?.short ?? ""} />
                        </AlertDialogHeader>

                        <AlertDialogFooter className="flex items-center sm:justify-center">
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    )}
                  </AlertDialog>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        {user.isSignedIn && (
          <div className="flex flex-row items-center justify-center">
            <Accordion
              type="single"
              collapsible
              className="flex w-[90%] flex-row items-end justify-end"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="h-10 flex-row justify-end px-5">
                  Advance
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="urlName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Google"
                            className="w-full border-2 bg-gray-900"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="expiresAt"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date of Expiration</FormLabel>

                        <Popover>
                          <PopoverTrigger
                            className="border-2 bg-gray-900"
                            asChild
                          >
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal text-white",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto inline-block w-4 bg-clip-text p-0 text-blue-500 drop-shadow-[0px_0px_20px_rgba(80,_80,_255,_1)]" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={new Date(field.value)}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() ||
                                date > new Date(Date.now() + 2 * 365 * 86400000)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="alias"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Alias</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="google"
                            className="w-full border-2 bg-gray-900"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </form>
    </Form>
  );
}
