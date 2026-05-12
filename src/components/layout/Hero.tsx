import Button from "../ui/Button";
import heroIllustration from "../../assets/illustrations/Illustration.svg";
import companyLogos from '../../assets/images/Logotypes.svg';

export default function Hero() {
  return (
    <div className="flex flex-col justify-between gap-gap-lg mb-4xl">
      <div className="flex gap-gap-lg ">
      <div className="flex flex-col gap-gap-md ">
        <h1 className="text-3xl-desk/snug max-w-head-length font-medium">Navigating the digital landscape for success</h1>
        <p className=" text-lg-desk max-w-text-length">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button bgType="bg-bg-cardDark" textType="text-text-light">book a consultation</Button>
      </div>
      <img src={heroIllustration} alt="" />
      </div>
      <Cpmpanies/>
    </div>
  );
}


function Cpmpanies(){
  return(
    <img src={companyLogos} alt=""  className="mt-xl saturate-0"/>
  )
}