import { GetHotelById } from "@/actions/GetHotelById";
import AddHotelForm from "@/components/hotel/AddHotelForm";
import { auth } from "@clerk/nextjs/server";



interface HotelPageProps {

params: {

hotelId: string

}
}
const Hotel = async ({params}: HotelPageProps) => {
    const hotel = await GetHotelById(params.hotelId)
const {userId} = await auth ()
if (!userId) return <div>Not authenticated...</div>
if (hotel && hotel.userid !== userId) return <div>
    Access denied...</div>
return ( <div>
<AddHotelForm hotel={hotel}/>
</div> );

}
export default Hotel;