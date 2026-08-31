import axios from "axios";
import { useUser } from "../context/userContext";
import { BASE_URL } from "../service/services";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Card from "./Card";
import Main from "./Main";

function MyBookings() {
  const { token } = useUser();

  async function getMyBooking(bearerToken) {
    const { data } = await axios.get(`${BASE_URL}/booking/my-bookings`, {
      headers: { Authorization: `Bearer ${bearerToken}` },
    });

    return data;
  }

  const { isPending, isError, data } = useQuery({
    queryKey: ["my-bookings", token],
    queryFn: () => getMyBooking(token),
  });

  if (isPending) return <Loading />;

  if (isError) return <Error />;

  const { data: myBookings } = data;

  return (
    <Main>
      {myBookings.map((booking) => (
        <Card key={booking._id} tour={booking} />
      ))}
    </Main>
  );
}

export default MyBookings;
