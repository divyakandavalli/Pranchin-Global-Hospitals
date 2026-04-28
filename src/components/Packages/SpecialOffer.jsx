import special_offer from "../../assets/images/special_offers.jpg"
export default function SpecialOffer() {

  return (
    <div className=" font-manrope xl:max-w-[60%] py-10 w-[95%] mx-auto">
      <div className="">
      <img src={special_offer} alt="" className="rounded-3xl"/>
      </div>
    </div>
  );
}
