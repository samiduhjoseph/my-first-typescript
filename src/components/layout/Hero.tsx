import Button from "../ui/Button";
import heroIllustration from "../../assets/illustrations/Illustration.svg"

export default function Hero() {
  return (
    <div className="flex justify-between gap-gap-lg">
      <div className="flex flex-col gap-gap-md ">
        <h1 className="text-3xl-desk max-w-head-length">Navigating the digital landscape for success</h1>
        <p className=" text-lg-desk max-w-text-length">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button>book a consultation</Button>
      </div>
      <img src={heroIllustration} alt="" />
    </div>
  );
}
