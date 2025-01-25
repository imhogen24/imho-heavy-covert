"use client";

import { Action } from "@/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { TestSchema } from "@/lib/z-schema";

export const TestForm = () => {
  // get a response form the server action with the useActionState hook
  // useActionState hooks allows you to update state based on the result of a form action.

  const [lastResult, action] = useActionState(Action, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: TestSchema });
    },

    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <div className="p-20">
      <h1 className="text-xl mb-5">Test Form</h1>
      <form
        className="grid gap-4"
        id={form.id}
        onSubmit={form.onSubmit}
        action={action}
      >
        {/* first name */}
        <div>
          <label htmlFor="name">Firstname</label>
          <Input
            key={fields.firstName.key}
            name={fields.firstName.name}
            defaultValue={fields.firstName.initialValue}
            id="first-name"
            type="text"
            placeholder="Kennedy"
          />
          <p className="text-red-500 text-sm">{fields.firstName.errors}</p>
        </div>
        {/* last name */}
        <div>
          <label htmlFor="name">Surname</label>
          <Input
            key={fields.lastName.key}
            name={fields.lastName.name}
            defaultValue={fields.firstName.initialValue}
            id="last-name"
            type="text"
            placeholder="Anyidoho"
          />

          <p className="text-red-500 text-sm">{fields.lastName.errors}</p>
        </div>

        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <Input
            key={fields.email.key}
            name={fields.email.name}
            defaultValue={fields.email.initialValue}
            id="email"
            type="email"
            placeholder="kennyanyi9@gmail.com"
          />
          <p className="text-red-500 text-sm">{fields.email.errors}</p>
        </div>

        {/* password */}
        <div>
          <label htmlFor="password">Password</label>
          <Input
            key={fields.password.key}
            name={fields.password.name}
            defaultValue={fields.password.initialValue}
            id="password"
            type="password"
            placeholder="********"
          />
          <p className="text-red-500 text-sm">{fields.password.errors}</p>
        </div>

        <Button type="submit" variant={"default"} className="text-white w-40">
          Submit
        </Button>
      </form>
    </div>
  );
};
