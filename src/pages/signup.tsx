import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/core/input";
import Button from "@/components/core/Button";
import "@/styles/globals.css";


const Signup = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
  });

  const onSubmit = handleSubmit((data) => {console.log(data)});
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              href="/signin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login if you already have an account ?
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={onSubmit}>
              <Input
                isRequired={true}
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  pattern: {
                    value: /^[a-zA-Z ]{2,30}$/,
                    message: "Please enter a valid name",
                  },
                })}
                label="Name"
                error={errors.name?.message}
              />
              <Input
                isRequired={true}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter your email address",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                label="Email"
                error={errors.email?.message}
              />
              <Input
                isRequired={true}
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please enter your password",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters long",
                  },
                })}
                label="Password"
                error={errors.password?.message}
              />
              <Input
                isRequired={true}
                type="password"
                {...register("cpassword", {
                  required: {
                    value: true,
                    message: "Please enter your password",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must be at most 20 characters long",
                  },
                })}
                label="Confirm Password"
                error={errors.cpassword?.message}
              />
              <div className="flex items-center justify-center ">
                <Button
                  type="submit"
                  className="text-white bg-indigo-600 hover:ring-indigo-500 indigo-600 font-medium rounded-lg text-base px-5 py-3 !w-full sm:w-auto text-center"
                >
                  Create your account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
