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
            <div className="section2_text">Популярные обменные пары</div>
            <div className="section2_block">
                <div className="section2_text">Криптовалюта</div>
                <div className="section2_text">Валюта</div>
                <div className="currency_list">
                    <div className="section2_example_block">
                        <div className="section2_text">1</div>
                        <div className="icon_container">
                            <Image src={Bit} alt=""/>
                            <div className="section2_text">BTC</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Usdt} alt=""/>
                            <div className="section2_text">USDT</div>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <div className="section2_text">2</div>
                        <div className="icon_container">
                            <Image src={Eth} alt=""/>
                            <div className="section2_text">ETH</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Usdt} alt=""/>
                            <div className="section2_text">USDT</div>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <div className="section2_text">3</div>
                        <div className="icon_container">
                            <Image src={Sol} alt=""/>
                            <div className="section2_text">SOL</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Ton} alt=""/>
                            <div className="section2_text">TON</div>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <div className="section2_text">4</div>
                        <div className="icon_container">
                            <Image src={Dot} alt=""/>
                            <div className="section2_text">DOT</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Matic} alt=""/>
                            <div className="section2_text">MATIC</div>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <div className="section2_text">5</div>
                        <div className="icon_container">
                            <Image src={Bit} alt=""/>
                            <div className="section2_text">BTC</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Eth} alt=""/>
                            <div className="section2_text">ETH</div>
                        </div>
                    </div>
                </div>
                <div className="currency_list2">
                    <div className="section2_example_block">
                        <div className="section2_text">1</div>
                        <div className="icon_container">
                            <Image src={Usd} alt=""/>
                            <div className="section2_text">USD</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Rub} alt=""/>
                            <div className="section2_text">RUB</div>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <div className="section2_text">2</div>
                        <div className="icon_container">
                            <Image src={Euro} alt=""/>
                            <div className="section2_text">EUR</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Rub} alt=""/>
                            <div className="section2_text">RUB</div>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <div className="section2_text">3</div>
                        <div className="icon_container">
                            <Image src={Usd} alt=""/>
                            <div className="section2_text">USD</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Euro} alt=""/>
                            <div className="section2_text">EUR</div>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <div className="section2_text">4</div>
                        <div className="icon_container">
                            <Image src={Rub} alt=""/>
                            <div className="section2_text">RUB</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Cny} alt=""/>
                            <div className="section2_text">CNY</div>
                        </div>
                    </div>
                    <div className="section2_example_block">
                        <div className="section2_text">5</div>
                        <div className="icon_container">
                            <Image src={Rub} alt=""/>
                            <div className="section2_text">RUB</div>
                        </div>
                        <Image src={Image1} alt="" className="vector"/>
                        <div className="icon_container">
                            <Image src={Jpy} alt=""/>
                            <div className="section2_text">JPY</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
