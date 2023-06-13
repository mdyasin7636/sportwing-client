import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useBookedClass = () => {
  const { user } = useAuth();

  const { data: bookedClass = [], refetch } = useQuery({
    queryKey: ["bookedClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookedClass?email=${user.email}`
      );
      return res.json();
    },
  });

  return [bookedClass, refetch];
};

export default useBookedClass;
