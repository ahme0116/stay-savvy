import AddHotelForm from "@/components/hotel/AddHotelForm";

const NewHotelPage = () => {
  return (
    <div className="p-8">
      <h1>🛎️ Add a new hotel</h1>
      <AddHotelForm hotel={null} />
    </div>
  );
};

export default NewHotelPage;
