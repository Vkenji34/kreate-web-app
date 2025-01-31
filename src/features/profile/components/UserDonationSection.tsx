import { useForm } from "react-hook-form";
import { Card, CardContent } from "~/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { EyeOff } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { toRupiah } from "~/utils/toRupiah";

export const UserDonationSection = () => {
  const form = useForm();

  return (
    <Card className="border-0 bg-primary/5 shadow-md">
      <CardContent className="pt-6">
        <Form {...form}>
          <form className="flex flex-col space-y-3">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel>Jumlah Dukungan</FormLabel>
                  <div className="flex flex-shrink-0 items-center gap-4">
                    <span className="h-full rounded-full bg-muted px-2 font-bold">
                      Rp
                    </span>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        className="flex-1 rounded-l-none"
                        placeholder="Masukkan jumlah dukungan"
                        inputSize="large"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nama Pengirim Dukungan</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Masukkan nama pengirim.." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isAnonymous"
              render={({ field }) => (
                <FormItem className="max-w-sm space-y-0 rounded-md border bg-muted px-4 py-2">
                  <div className="flex items-center justify-start gap-4">
                    <span>
                      <EyeOff />
                    </span>
                    <FormLabel className="flex flex-1 flex-col">
                      <span className="text-sm font-bold">
                        Kirim sebagai anonim
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Nama kamu bakal disembunyiin dari creator
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={(checked) => field.onChange(checked)}
                      />
                    </FormControl>
                  </div>
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
                    <Input
                      {...field}
                      type="email"
                      placeholder="Masukkan email"
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Email kamu akan digunakan untuk menerima balasan dari kreator.</FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pesan</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={3}
                      {...field}
                      placeholder="Masukkan pesan kamu"
                      className="font-medium"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-y-4 lg:flex-row lg:justify-between">
              <div className="flex flex-col">
                <span>Total Pembayaran:</span>
                <span className="text-lg font-semibold">
                  {toRupiah(form.watch("amount") ?? 0)}
                </span>
              </div>
              <Button className="self-end text-white">Kirim Dukungan</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
