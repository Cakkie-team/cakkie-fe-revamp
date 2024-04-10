import Landing from "@/components/landing/Landing";
import { redirect } from 'next/navigation'

export default function Page({searchParams}) {
  if(searchParams?.referral){
   //redirect to referral page
   redirect(`https://play.google.com/store/apps/details?id=com.cakkie&referrer=utm_source%3Drefer%26utm_content%3D${searchParams.referral}`)
  }
  return ( 
    <div className="bg-[#FFF5D4] w-full h-full">
      <Landing/>
    </div>
  )
}