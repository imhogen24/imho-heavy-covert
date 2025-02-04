// "use client";

// import { useState, useRef } from "react";
// import { useActionState } from "react";
// import { useForm } from "@conform-to/react";
// import { parseWithZod } from "@conform-to/zod";
// import { ContactFormSchema } from "@/lib/z-schema";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { contactFormAction } from "@/action";
// import { Submit } from "@/app/(services)/_components/submit";

// export const ContactForm = () => {
//   const ref = useRef<HTMLFormElement>(null);
//   const [lastResult, action] = useActionState(contactFormAction, undefined);

//   const [form, fields] = useForm({
//     lastResult,
//     onValidate({ formData }) {
//       return parseWithZod(formData, { schema: ContactFormSchema });
//     },
//     shouldValidate: "onBlur",
//     shouldRevalidate: "onInput",
//   });

//   return (
//     <div className="w-full mx-auto py-10">
//       <form
//         ref={ref}
//         id={form.id}
//         onSubmit={form.onSubmit}
//         action={action}
//         className="space-y-8"
//       >
//         <div className="space-y-4">
//           <label htmlFor="name">Name</label>
//           <Input
//             key={fields.name.key}
//             name={fields.name.name}
//             defaultValue={fields.name.initialValue}
//             id="name"
//             placeholder="Jane Doe"
//             type="text"
//           />
//           {fields.name.errors && (
//             <p className="text-red-500 text-sm">{fields.name.errors}</p>
//           )}
//         </div>

//         <div className="space-y-4">
//           <label htmlFor="email">Email</label>
//           <Input
//             key={fields.email.key}
//             name={fields.email.name}
//             defaultValue={fields.email.initialValue}
//             id="email"
//             type="email"
//             placeholder="jane.doe@example.com"
//           />
//           {fields.email.errors && (
//             <p className="text-red-500 text-sm">{fields.email.errors}</p>
//           )}
//         </div>

//         <div className="space-y-4">
//           <label htmlFor="message">Message</label>
//           <Textarea
//             key={fields.message.key}
//             name={fields.message.name}
//             defaultValue={fields.message.initialValue}
//             id="message"
//             placeholder="eg. Hello team..."
//             className="resize-none"
//             typeof="text"
//           />
//           <p className="text-sm text-muted-foreground">
//             Please provide a detailed message.
//           </p>
//           {fields.message.errors && (
//             <p className="text-red-500 text-sm">{fields.message.errors}</p>
//           )}
//         </div>

//         <div className="mt-8">
//           <Submit label="Send message" />
//         </div>
//       </form>
//     </div>
//   );
// };
