import special_offer from "../../assets/images/special_offers.jpg";
export default function SpecialOffer() {
  return (
    <div className=" font-manrope xl:max-w-[60%]  w-[95%] mx-auto pb-10">
      <div className="">
        <h2 className="text-[22px] md:text-[34px] py-10 text-center 3xl:text-[42px]  font-manrope font-semibold leading-tight text-black">
          We Welcome all the patients to utilize this offer {" "}
        </h2>
        <img src={special_offer} alt="" className="rounded-3xl" />
      </div>
    </div>
  );
}
