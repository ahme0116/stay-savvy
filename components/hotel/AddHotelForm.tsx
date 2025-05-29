'use client';

import { z } from "zod";
import { Hotel, Room } from "@prisma/client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

interface AddHotelFormProps {
  hotel: HotelWithRooms | null;
}

export type HotelWithRooms = Hotel & {
  rooms: Room[];
};

// ✅ Schema validation
const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters long",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters long",
  }),
  image: z.string().min(1, {
    message: "Image is required",
  }),
  country: z.string().min(1, {
    message: "Country is required",
  }),
  state: z.string().optional(),
  city: z.string().optional(),
  locationDescription: z.string().min(10, {
    message: "Location description must be at least 10 characters long",
  }),
 gym: z.boolean().optional(),
  spa: z.boolean().optional(),
  bar: z.boolean().optional(),
  laundry: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  freeWifi: z.boolean().optional(),
  movieNights: z.boolean().optional(),
  swimmingPool: z.boolean().optional(),
  coffeeShop: z.boolean().optional(),
});

const AddHotelForm = ({ hotel }: AddHotelFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      country: "",
      state: "",
      city: "",
      locationDescription: "",
      gym: false,
  spa: false,
  bar: false,
  laundry: false,
  restaurant: false,
  shopping: false,
  freeParking: false,
  bikeRental: false,
  freeWifi: false,
  movieNights: false,
  swimmingPool: false,
  coffeeShop: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Submitted:", values);
  };

  return (
    <FormProvider {...form}>
      <div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-lg font-semibold">
            {hotel ? 'Update your hotel!' : 'Describe your hotel!'}
          </h3>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Title Field */}
            <div className="flex-1 flex flex-col gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hotel Title</FormLabel>
                    <FormDescription>Provide your hotel name</FormDescription>
                    <FormControl>
                      <Input placeholder="Beach Hotel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* You can add another field here if needed */}
            <div className="flex-1 flex flex-col gap-6"></div>
          </div>

          {/* Description Field */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hotel Description</FormLabel>
                <FormDescription>Provide a detailed description of your hotel</FormDescription>
                <FormControl>
                  <Textarea
                    placeholder="Beach Hotel is packed with many awesome amenities!"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
           <FormLabel>Choose Amenities</FormLabel>
<FormDescription>Choose amenities popular in your hotel</FormDescription>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
  <FormField
    control={form.control}
    name="gym"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Gym</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="spa"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Spa</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="bar"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Bar</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="laundry"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Laundry</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="restaurant"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Restaurant</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="shopping"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Shopping</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="freeParking"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Free Parking</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="bikeRental"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Bike Rental</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="freeWifi"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Free Wifi</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="movieNights"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Movie Nights</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="swimmingPool"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Swimming Pool</FormLabel>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="coffeeShop"
    render={({ field }) => (
      <FormItem className="flex items-start space-x-3 rounded-md border p-4">
        <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <FormLabel>Coffee Shop</FormLabel>
      </FormItem>
    )}
  />
</div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default AddHotelForm;
