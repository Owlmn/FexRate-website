import Image from "next/image";
import Bit from "@/app/public/icons/bitcoin.svg";
import Image1 from "@/app/public/icons/Vector.svg";
import Usdt from "@/app/public/icons/usdt.svg";
import Eth from "@/app/public/icons/eth.svg";
import Sol from "@/app/public/icons/sol.svg";
import Ton from "@/app/public/icons/ton.svg";
import Dot from "@/app/public/icons/dot.svg";
import Matic from "@/app/public/icons/matic.svg";
import Usd from "@/app/public/icons/usd.svg";
import Rub from "@/app/public/icons/rub.svg";
import Euro from "@/app/public/icons/euru.svg";
import Cny from "@/app/public/icons/cny.svg";
import Jpy from "@/app/public/icons/jpy.svg";


export default function Popular_exchange_pairs() {
    return (
        <div className="section2">
            <text className="section2_text">Популярные обменные пары</text>
            <div className="section2_block">
                <text className="section2_text">Криптовалюта</text>
                <text className="section2_text">Валюта</text>
                <div className="currency_list">
                    <div className="section2_example_block">
                        <text className="section2_text">1</text>
                        <div className="icon_container">
                            <Image src={Bit} alt=""/>
                            <text className="section2_text">BTC</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Usdt} alt=""/>
                            <text className="section2_text">USDT</text>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <text className="section2_text">2</text>
                        <div className="icon_container">
                            <Image src={Eth} alt=""/>
                            <text className="section2_text">ETH</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Usdt} alt=""/>
                            <text className="section2_text">USDT</text>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <text className="section2_text">3</text>
                        <div className="icon_container">
                            <Image src={Sol} alt=""/>
                            <text className="section2_text">SOL</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Ton} alt=""/>
                            <text className="section2_text">TON</text>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <text className="section2_text">4</text>
                        <div className="icon_container">
                            <Image src={Dot} alt=""/>
                            <text className="section2_text">DOT</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Matic} alt=""/>
                            <text className="section2_text">MATIC</text>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <text className="section2_text">5</text>
                        <div className="icon_container">
                            <Image src={Bit} alt=""/>
                            <text className="section2_text">BTC</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Eth} alt=""/>
                            <text className="section2_text">ETH</text>
                        </div>
                    </div>
                </div>
                <div className="currency_list2">
                    <div className="section2_example_block">
                        <text className="section2_text">1</text>
                        <div className="icon_container">
                            <Image src={Usd} alt=""/>
                            <text className="section2_text">USD</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Rub} alt=""/>
                            <text className="section2_text">RUB</text>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <text className="section2_text">2</text>
                        <div className="icon_container">
                            <Image src={Euro} alt=""/>
                            <text className="section2_text">EUR</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Rub} alt=""/>
                            <text className="section2_text">RUB</text>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <text className="section2_text">3</text>
                        <div className="icon_container">
                            <Image src={Usd} alt=""/>
                            <text className="section2_text">USD</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Euro} alt=""/>
                            <text className="section2_text">EUR</text>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <text className="section2_text">4</text>
                        <div className="icon_container">
                            <Image src={Rub} alt=""/>
                            <text className="section2_text">RUB</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Cny} alt=""/>
                            <text className="section2_text">CNY</text>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <text className="section2_text">5</text>
                        <div className="icon_container">
                            <Image src={Rub} alt=""/>
                            <text className="section2_text">RUB</text>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Jpy} alt=""/>
                            <text className="section2_text">JPY</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
