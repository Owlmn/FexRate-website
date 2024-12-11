import Image from "next/image";
import Bit from "@/app/public/icons/bitcoin.svg";
import Eth from "@/app/public/icons/eth.svg";
import Usdt from "@/app/public/icons/usdt.svg";
import Usd from "@/app/public/icons/usd.svg";
import Rub from "@/app/public/icons/rub.svg";
import Euro from "@/app/public/icons/euru.svg";

export default function Banner () {
    return (
        <div className="section6">
            <text className="section6_text">Давайте конвертировать</text>
            <text className="section6_text1">Это слишком просто и удобно, чтобы даже не попробовать</text>
            <button className="btn_link_to_convers" onClick={() => window.scrollTo(0, 0)}>
                <text className="description">Перейти к конвертации</text>
            </button>
            <Image src={Bit} alt="" className="icon1"></Image>
            <Image src={Eth} alt="" className="icon2"></Image>
            <Image src={Usdt} alt="" className="icon3"></Image>
            <Image src={Usd} alt="" className="icon4"></Image>
            <Image src={Rub} alt="" className="icon5"></Image>
            <Image src={Euro} alt="" className="icon6"></Image>
        </div>
    );
}
