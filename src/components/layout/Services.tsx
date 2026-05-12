import type { ReactNode } from "react";
import SectionDesc from "../ui/SectionDesc";
import search_ServiceImg from '../../assets/illustrations/tokyo-magnifier-web-search-with-elements 2.svg';
import payPerClick_ServiceImg from '../../assets/illustrations/Illustration (1).svg';
import socialMedia_ServiceImg from '../../assets/illustrations/Illustration (2).svg';
import email_serviceImg from '../../assets/illustrations/tokyo-sending-messages-from-one-place-to-another 1.svg';
import content_serviceImg from '../../assets/illustrations/Illustration (3).svg';
import analytics_ServiceImg from '../../assets/illustrations/Illustration (4).svg'
import buttonArrow from '../../assets/icons/Arrow 1.svg'
import buttonArrowDark from '../../assets/icons/Arrow dark.svg'
import Button from "../ui/Button";
import proposalImg from "../../assets/illustrations/Frame 19.svg";

interface propType{
    children: ReactNode;
    serviceImg: string;
    // bgType: string;
    stressfulText: string;
}

export default function Services(){
    return(
        <div className="">
            <SectionDesc section="services">
                At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </SectionDesc>
            <div className="grid grid-cols-2 grid-rows-3 gap-gap-lg mb-3xl ">
                <CardLight serviceImg={search_ServiceImg} stressfulText="optimization">search engine</CardLight>
                <CardGreen serviceImg={payPerClick_ServiceImg} stressfulText="advertising">pay-per-click</CardGreen>
                <CardDark serviceImg={socialMedia_ServiceImg} stressfulText="marketing">social media</CardDark>
                <CardLight serviceImg={email_serviceImg} stressfulText="marketing">email</CardLight>
                <CardGreen serviceImg={content_serviceImg} stressfulText="creation" >content</CardGreen>
                <CardDark serviceImg={analytics_ServiceImg} stressfulText="tracking">analytics and</CardDark>

            </div>
            <ProposalCard></ProposalCard>
        </div>
    )
}
 function CardLight({children, serviceImg, stressfulText}: propType){
    return(
        <div className={`flex p-12.5 border rounded-card shadow-[0_5px_0_rgba(25,26,35,1)] bg-bg-cardlight justify-between`}>
            <div className=" flex flex-col justify-between">
                <h2 className="capitalize text-xl-desk/tight flex flex-col font-medium">
                    <span className=" bg-primary w-max rounded-[7px] px-2 ">{children}</span>
                    <span className=" bg-primary w-max rounded-[7px] px-2">{stressfulText}</span>
                </h2>
                <div className="flex gap-1.5 content-center items-center">
                    <img src={buttonArrow} alt="" className="rounded-full bg-bg-cardDark p-2" />
                    <p className="capitalize text-lg-desk">learn more</p>
                </div>
            </div>
            <img src={serviceImg} alt="" />
        </div>
    )
 }
 function CardDark({children, serviceImg, stressfulText}: propType){
    return(
        <div className={`flex p-12.5 border rounded-card shadow-[0_5px_0_rgba(25,26,35,1)] bg-bg-cardDark justify-between`}>
            <div className=" flex flex-col justify-between text-text-light">
                <h2 className="capitalize text-xl-desk/tight text-text-main flex flex-col font-medium">
                    <span className=" bg-bg-cardlight w-max rounded-[7px] px-2 ">{children}</span>
                    <span className=" bg-bg-cardlight w-max rounded-[7px] px-2">{stressfulText}</span>
                </h2>
                <div className="flex gap-1.5 items-center">
                    <img src={buttonArrowDark} alt="" className="rounded-full bg-bg-cardlight p-2" />
                    <p className="capitalize text-lg-desk">learn more</p>
                </div>
            </div>
            <img src={serviceImg} alt="" />
        </div>
    )
 }
 function CardGreen({children, serviceImg, stressfulText}: propType){
    return(
        <div className={`flex p-12.5 border rounded-card shadow-[0_5px_0_rgba(25,26,35,1)] bg-primary justify-between `}>
            <div className="flex flex-col justify-between">
                <h2 className="capitalize text-xl-desk/tight text-text-main flex flex-col font-medium">
                    <span className=" bg-bg-cardlight w-max rounded-[7px] px-2 ">{children}</span>
                    <span className=" bg-bg-cardlight w-max rounded-[7px] px-2">{stressfulText}</span>
                </h2>
                <div className="flex gap-1.5 content-center items-center">
                    <img src={buttonArrow} alt="" className="rounded-full bg-bg-cardDark p-2" />
                    <p className="capitalize text-lg-desk">learn more</p>
                </div>
            </div>
            <img src={serviceImg} alt="" />
        </div>
    )
 }

 function ProposalCard(){
    return(
        <div className="flex">
        <div className="flex justify-between bg-bg-cardlight rounded-card my-[23.5px] relative w-max-width">
            <div className="flex flex-col gap-6.5 p-14">
                <h2 className="font-medium text-xl-desk">Let’s make things happen</h2>
                <p className="text-md-desk w-[45ch]">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                <Button  bgType="bg-bg-cardDark" textType="text-text-light">Get your free proposal</Button>
            </div>
            <img src={proposalImg} alt="" className="absolute right-0 -top-4"  />
        </div>
         {/* <img src={proposalImg} alt="" /> */}
        </div>
    )
 }

 