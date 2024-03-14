import Image from "next/image";
import { Button } from "@/components";

export function HowtoOrder() {
  return (
    <div 
    id="order" 
    className="w-full sm:px-10 bg-[url('/svg/pinkbg.png')] relative flex flex-col gap-5 lg:flex-row justify-start items-start lg:items-center px-4 py-8 sm:py-12 bg-white">
      <Image
        src="/images/pic.png"
        alt="pic"
        className="h-[40%] w-[40%] object-contain"
        width={800}
        height={800}
      />
      <div className="w-full h-full relative max-w-[500px] flex flex-col items-start justify-start gap-y-6">
        <h1 className="font-semibold text-3xl text-cakkie">How to Order</h1>
        <p className="flex flex-wrap items-start justify-start leading-7">
          Lörem ipsum ditrende plas äl. Jinuren politotal ans. Prekin lapp såsom
          tiskade i homonade, spemåskap. Pas årär samt prer liksom orat fast
          antropomatisk. Pende tedöna. Dessa jilig pyda facebooka. Disa dida.
          Heterohuna plans. Fen modemkapare prera, bilsurfa revis. Ölig lyton
          antropotologi jil degraf. Räspebel virar och astronyd. Paral debas.
          Klimatmat muk, benyr blåstråle sugt. Fatins stereotropi kora. Pol song
          såsom åsk. Gesk mikroktigt diasm emedan kar även om bioterrorism.
          Engen kompetensväxling, fast or. Senade autospede ökyl. Nettokrati
          plabil ajåvis 5:2-diet nehosade. Sevinde dir men sudoku gemulig osade.
          Yliga jår fimpomat, att dess. Vodeheten köde.
        </p>
        <Button className="font-medium z-30 relative text-[#FFF5DC] bg-cakkie rounded-md h-12">
          Learn More
        </Button>
      </div>
      <Image
        src="/images/smallcake.png"
        alt="small-cake"
        width={300}
        height={300}
        className="w-fit h-fit absolute right-3 bottom-0"
      />
    </div>
  );
}
