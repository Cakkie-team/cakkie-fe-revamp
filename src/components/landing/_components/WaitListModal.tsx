"use client";

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
import Image from "next/image";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";

export function WaitListModal({ close }: { close: () => void }) {
  const form = useForm({});

  const job = [
    { id: 1, title: "I Sell Cakes" },
    { id: 2, title: "I Buy Cakes" },
    { id: 3, title: "I Sell/Buy Confectionaries" },
    { id: 4, title: "Not Really related to cake, I was just passing buy" },
  ];
  return (
    <div
      onClick={close}
      role="button"
      className="w-full h-full fixed inset-0 bg-black/50 z-[200]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute inset-0 bg-white rounded-lg max-h-[85%] h-[600px] m-auto w-[95%] sm:w-[80%] overflow-y-auto py-4 sm:py-8 px-3 sm:px-6 "
      >
        <div className="w-full mb-2 sm:mb-4 flex items-start justify-between">
          <p className="w-1 h-1"></p>
          <div className="flex flex-col items-center gap-y-1 justify-center">
            <Image
              src="./svg/logo.svg"
              alt="logo"
              width={200}
              height={200}
              className="w-fit h-fit"
            />
            <h1 className="text-xl playfair text-cakkie font-semibold sm:text-3xl">
              Join Our Waitlist
            </h1>
            <p className="font-semibold">
              Get noticed when we launch our project
            </p>
          </div>
          <Button onClick={close} className="rounded-none px-o w-fit h-fit">
            <MdClose className="text-[22px] sm:text-2xl text-cakkie" />
          </Button>
        </div>
        <Form {...form}>
          <form className="w-full grid grid-cols-1 sm:w-[85%] mx-auto sm:grid-cols-2 gap-6 items-start">
            <div className="w-full space-y-3">
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
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email Address"
                        type="email"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
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
                    <FormLabel>State/Region</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="state"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Male"
                        type="text"
                        className="w-full h-12 bg-transparent px-4 rounded-lg "
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full space-y-3">
              <div className="w-full flex flex-col">
                <div className="flex flex-col items-start justify-start">
                  <p className="font-semibold text-base sm:text-xl">
                    What do you do?
                  </p>
                  <p>Tell us what you do in the cake industry</p>
                </div>

                <div className="w-full pl-6 flex flex-col items-start justify-start gap-y-2">
                  {job.map((value) => (
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <label className="flex items-center gap-x-2">
                          <input
                            type="checkbox"
                            {...field}
                            className=" h-5 w-5 accent-cakkie"
                          />
                          <span className="">{value?.title}</span>
                        </label>
                      )}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col">
                <div className="flex flex-col items-start justify-start">
                  <p className="font-semibold text-base sm:text-xl">
                    Are you interested in joining our beta version?
                  </p>
                  <p>Beta version is a test version before launch</p>
                </div>

                <div className="w-full pl-6 flex flex-col items-start justify-start gap-y-2">
                  {["Yes", "No"].map((value) => (
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <label className="flex items-center gap-x-2">
                          <input
                            type="radio"
                            {...field}
                            value={value}
                            className="accent-cakkie h-6 w-6"
                          />
                          <span className="">{value}</span>
                        </label>
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-span-full w-full mt-3 flex items-center justify-center">
              <Button className="font-medium w-[150px] rounded-lg text-[#FFF5DC] bg-cakkie h-12">
                {" "}
                Done!
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
