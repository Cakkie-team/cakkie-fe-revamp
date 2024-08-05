import Landing from "@/components/landing/Landing";
import { redirect } from 'next/navigation'
import { NextPage } from 'next';


interface PageProps {
  searchParams?: {
    referral?: string;
    verify?:string;
  };
}

const Page: NextPage<PageProps> =({searchParams})=> {
  if(searchParams?.referral){
   //redirect to referral page
   redirect(`https://play.google.com/store/apps/details?id=com.cakkie&referrer=utm_source%3Drefer%26utm_content%3D${searchParams.referral}`)
  }
  if(searchParams?.verify){
       //redirect to referral page
   redirect(`https://app.cakkie.com/verify=true`)
  }
  return ( 
    <div className="bg-[#FFF5D4] w-full h-full">
      <Landing/>
    </div>
  )
}

export default Page;