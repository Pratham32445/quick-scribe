import PaymentCard from "@/components/layout/Payment/PaymentCard";

const Payment = () => {
  return (
    <div className="h-screen grid grid-cols-[2fr_1fr]">
      <div className="bg-gray-100 flex justify-center items-center text-white">
        <div className="h-screen grid grid-cols-[1fr_1fr_1fr] gap-4 items-center ">
          <div className="h-[90%] w-[350px] bg-white rounded-2xl shadow-lg "></div>
          <div className="h-[90%] w-[350px] bg-white rounded-2xl shadow-lg ">
            {" "}
            ahdba
          </div>
          <div className="h-[90%] w-[350px] bg-white rounded-2xl shadow-lg ">
            {" "}
            asbdjab
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center  text-white">
        <PaymentCard />
      </div>
    </div>
  );
};

export default Payment;
