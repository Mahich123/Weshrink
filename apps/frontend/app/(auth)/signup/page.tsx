"use client"

import Image from "next/image"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from 'zod'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"



const formSchema = z.object({
    username: z.string().min(3, {
        message: "Username must be 3 characters long"
    }),
    email: z.string().email(),
    password: z.string().min(5, {
        message: "Password should not be less than 5 characters"
    }),
    confirmPassword: z.string().min(5, {
        message: "Password should not be less than 5 characters"
    })

})

const handleGithubSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
        await authClient.signIn.social({
            provider: 'github',
            callbackURL: 'http://localhost:3000/dashboard'
        });


    } catch (error) {
        console.error('GitHub sign-in error:', error);
    }
}

const handleGoogleSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
        await authClient.signIn.social({
            provider: 'google',
            callbackURL: 'http://localhost:3000/dashboard'
        });


    } catch (error) {
        console.error('GitHub sign-in error:', error);
    }
}

const SignInPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="bg-[#191933]  h-screen flex flex-col items-center justify-center">
            <div className="text-white">
                <div className="flex justify-center mb-4 md:mb-0 2xl:mb-2">
                    <Link href="/">
                        <Image src="./Logo.svg" alt="logo" width={100} height={100} />
                    </Link>
                </div>
                <h1 className="text-[#BDBDBD] font-Nunito font-medium md:text-xs md:mb-2 2xl:text-lg 2xl:font-bold flex justify-center items-center">Get Started by Creating an Account</h1>
            </div>

            <div className="my-8 md:my-0 2xl:my-2 2xl:w-96">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-2 text-white">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>passowrd</FormLabel>
                                    <FormControl>
                                        <Input placeholder="password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>confirm password</FormLabel>
                                    <FormControl>
                                        <Input placeholder="confirm password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex flex-row  gap-x-2">
                            <Button variant="signup" type="submit">Sign up</Button>
                            <Link href="/sign-in" className="w-full">
                                <Button variant="signin">
                                    Sign in
                                </Button>
                            </Link>
                        </div>

                    </form>
                </Form>


                <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px md:my-4 my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-Nunito text-white -translate-x-1/2 bg-[#191933]  left-1/2 dark:text-white dark:bg-gray-900">Or continue with</span>
                </div>

                <div className="grid items-center justify-center gap-x-2 gap-y-4 grid-cols-4 w-full">
                    <Link className="col-span-2" href="/api/auth/signin">
                        <Button variant="signin" type="submit" onClick={handleGithubSignIn}>Github</Button>
                    </Link>

                    <Link className="col-span-2" href="/api/auth/signin">
                        <Button variant="signin" type="submit" onClick={handleGoogleSignIn}>Google</Button>
                    </Link>


                </div>
            </div>
        </div>
    )
}

export default SignInPage