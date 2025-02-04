"use client";
import { useForm } from "react-hook-form";
import { ContactFormSchema, FileUploadSchema } from "@/lib/z-schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { Submit } from "@/app/(services)/_components/submit";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { XIcon, FileIcon } from "lucide-react";
import Image from "next/image";
import { contactFormAction } from "@/action";
import { LoaderCircle, CloudUpload } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UploadDropzone } from "@/lib/uploadthing";

export const FileForm = () => {
  const form = useForm<z.infer<typeof FileUploadSchema>>({
    resolver: zodResolver(FileUploadSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      file: undefined, //{ url: "", name: "" },
    },
  });
  const [pending, setPending] = useState(false);

  async function onSubmit(values: z.infer<typeof FileUploadSchema>) {
    setPending(true);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    if (values.file) {
      const fileValue =
        typeof values.file === "string"
          ? values.file
          : (values.file as { url: string }).url;

      if (fileValue) {
        formData.append("file", fileValue);
      }
    }

    try {
      const result = await contactFormAction(formData);

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Message sent successfully!");
        form.reset();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setPending(false);
    }
  }
  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
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
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="eg. Dear IMHO team..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>File upload</FormLabel>
              <FormControl>
                <div>
                  {field.value &&
                  typeof field.value === "object" &&
                  field.value.url ? (
                    <div className="relative w-fit">
                      <div className="border rounded-[1rem] p-2  muted-border">
                        <CloudUpload
                          size={48}
                          strokeWidth={0.75}
                          className="mx-auto"
                        />
                        {/* {`${field.value.name.split(" ")[0]}...${field.value.name.split(".")[1]}`} */}
                        1 File
                      </div>

                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute -top-2 -right-2 "
                        onClick={() => field.onChange("")}
                      >
                        <XIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <UploadDropzone
                      endpoint="fileUploader"
                      onClientUploadComplete={(res) => {
                        field.onChange({
                          url: res[0].url,
                          name: res[0].name,
                        });
                        toast.success("File uploaded successfully!");
                      }}
                      onUploadError={() => {
                        toast.error(
                          "Something went wrong. Consider uploading a file with smaller size.",
                        );
                      }}
                      className="rounded-[1rem] ut-button:bg-secondary ut-button:text-black dark:ut-button:text-white ut-button:hover:bg-secondary/90 ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground muted-border"
                    />
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="mt-8">
          <Button
            className="w-fit text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
            variant={"secondary"}
            type="submit"
            aria-disabled={pending}
          >
            {pending ? (
              <>
                <LoaderCircle className="animate-spin" /> submitting...
              </>
            ) : (
              <>Send message</>
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};
