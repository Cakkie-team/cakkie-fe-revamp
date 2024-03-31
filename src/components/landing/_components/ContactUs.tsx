"use client";

import Image from "next/image";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormField,
  FormMessage,
  Input,
  FormItem,
  Textarea,
} from "@/components";
import { useForm } from "react-hook-form";

export function ContactUs() {
  const form = useForm({});
  return (
    <div
    id="contact-us"
    className="w-full sm:px-10  relative flex flex-col xl:flex-row items-center justify-center px-4 py-8 sm:py-12 bg-[#FFF5D4]">
      <div className="w-full h-full relative max-w-[500px] flex flex-col items-center justify-start gap-y-6">
        <h1 className="font-semibold text-3xl text-cakkie">Contact Us</h1>
        <Form {...form}>
          <form className="w-full flex flex-col items-start justify-start gap-y-3 sm:gap-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      type="text"
                      className="w-full h-12 2xl:h-14 bg-transparent px-4 rounded-lg "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      type="email"
                      className="w-full h-12 2xl:h-14 bg-transparent px-4 rounded-lg "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      {...field}
                      className="w-full h-48 2xl:h-52 resize-none rounded-lg p-4"
                    ></Textarea>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <Button className="font-medium w-[150px] self-end text-[#FFF5DC] bg-cakkie px-8 sm:px-12 rounded-md h-12 2xl:h-14">
          Submit
        </Button>
      </div>

      <Image
        src="/images/contact.png"
        alt="pic"
        className="w-fit h-fit object-contain"
        width={800}
        height={800}
      />
      <Image
        src="/images/ice-cream.png"
        alt="cream"
        width={80}
        height={80}
        className="w-fit h-fit absolute object-contain left-0 -bottom-4 z-20 "
      />
    </div>
  );
}
