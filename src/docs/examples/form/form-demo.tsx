import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// 1. Describe the valid data. Error messages explain how to fix the problem.
const bookingSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 huruf."),
  email: z.email("Format email belum benar, contoh: nama@email.com."),
  unit: z.string().min(1, "Pilih unit yang ingin dikunjungi."),
  agree: z.boolean().refine((checked) => checked, {
    error: "Centang untuk menyetujui syarat & ketentuan.",
  }),
});

type BookingValues = z.infer<typeof bookingSchema>;

export default function FormDemo() {
  const [submitted, setSubmitted] = useState<BookingValues | null>(null);

  // 2. Create the form, connected to the schema.
  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", email: "", unit: "", agree: false },
  });

  // 3. Only called when every field is valid.
  function onSubmit(values: BookingValues) {
    setSubmitted(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-md flex-col gap-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Sesuai KTP" {...field} />
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
                <Input type="email" placeholder="nama@email.com" {...field} />
              </FormControl>
              <FormDescription>E-tiket akan dikirim ke email ini.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="unit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Pilih unit" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="popper">
                  <SelectItem value="gunung-mas">Gunung Mas Tea Hills</SelectItem>
                  <SelectItem value="rancabali">Rancabali Tea Valley</SelectItem>
                  <SelectItem value="malabar">Malabar Tea Village</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agree"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-3">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel>Saya setuju dengan syarat & ketentuan</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Pesan Tiket</Button>

        {submitted && (
          <p className="rounded-md bg-success-subtle p-3 typo-body-m text-fg-brand">
            Terima kasih, {submitted.name}! Tiket Anda sedang kami siapkan.
          </p>
        )}
      </form>
    </Form>
  );
}
