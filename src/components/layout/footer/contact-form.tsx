"use client";
import { useForm } from "react-hook-form";
import { FileUploadSchema } from "@/lib/z-schema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { XIcon, FileIcon, Trash2, EyeIcon } from "lucide-react";
import Image from "next/image";
import { contactFormAction } from "@/actions/action";
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
import Link from "next/link";
import { FormPreview } from "@/app/(services)/_components/modules/cad/preview";


export const FileForm = () => {
  const form = useForm<z.infer<typeof FileUploadSchema>>({
    resolver: zodResolver(FileUploadSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      files: [],
    },
  });
  const [pending, setPending] = useState(false);


  async function onSubmit(values: z.infer<typeof FileUploadSchema>) {
    setPending(true);
    console.log(values);
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    formData.append("files", JSON.stringify(values.files));

    try {
      const result = await contactFormAction(formData);

      if (result?.error) {


        toast.error(result.error);
      } else {

        toast.success("Message sent successfully!");
        console.log(values)
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
          name="files"
          render={({ field }) => (
            <FormItem>
              <FormLabel>File upload</FormLabel>
              <FormControl>
                <div>
                  <div className="relative border border-dashed muted-border rounded-[0.5rem]">
                    <UploadDropzone
                      className="ut-button:bg-accent ut-button:text-accent-foreground border-none"
                      endpoint="fileAttachment"
                      onClientUploadComplete={(res: any) => {
                        const newFile = `${res[0].serverData.fileUrl},${res[0].name}`;
                        field.onChange([...field.value, newFile]); // Update form value
                        toast.success("Upload Completed");
                      }}
                      onUploadError={(error: any) => {
                        toast.error("Something went wrong, check your internet connection or consider reducing the file size");
                      }}
                    />
                  </div>

                  {field.value.length > 0 && (
                    <div className="flex flex-col mt-4 gap-2">
                      {field.value.map((file: string, index: number) => (
                        <div
                          key={index}
                          className="w-full p-2 bg-accent flex flex-wrap justify-between rounded-[0.5em] gap-2 items-center"
                        >
                          {/* Left: File Icon & Name */}
                          <div className="flex items-center gap-2 min-w-0">
                            <FileIcon className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate max-w-[150px] sm:max-w-[200px] md:max-w-[250px] overflow-hidden whitespace-nowrap">
                              {file.split(",")[1]}
                            </span>
                          </div>

                          {/* Right: Action Buttons */}
                          <div className="flex gap-2 items-center">
                            <Link href={file.split(",")[0]} target="_blank" rel="noopener noreferrer">
                              <EyeIcon className="w-4 h-4 hover:stroke-muted-foreground transition duration-200 ease-in-out" />
                            </Link>
                            <button
                              type="button"
                              onClick={() => {
                                const newFiles = field.value.filter((_, i) => i !== index);
                                field.onChange(newFiles);
                              }}
                            >
                              <span className="sr-only">remove item {index}</span>
                              <Trash2 className="w-4 h-4 hover:stroke-destructive transition duration-200 ease-in-out" />
                            </button>
                          </div>
                        </div>

                      ))}
                    </div>
                  )}
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div className="mt-8">
          <Button
            className="min-w-[150px] text-secondary bg-black dark:bg-white hover:bg-black/95 mx-auto lg:mx-0 p-[14px] h-[42px] md:h-[48px] dark:hover:bg-white/85"
            variant={"secondary"} type="submit"
            aria-disabled={pending}
          >
            {pending ? (
              <>
                <LoaderCircle className="animate-spin" />
              </>
            ) : (
              <>Send message</>
            )}
          </Button>
        </div>
      </form>
    </Form >
  );
};
