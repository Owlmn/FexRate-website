import Image from "next/image";
import Simple from "@/app/public/img/img_block1.png";
import Time from "@/app/public/img/img_block2.png";
import Secure from "@/app/public/img/img_block3.png";
import NoReg from "@/app/public/img/img_block4.png";

export default function Benefit() {
    return (
        <div className="section3">
            <text className="section2_text">Почему мы?</text>
            <div className="wrapper">
                <div className="section3_block1">
                    <div className="section2_text">Простота</div>
                    <Image src={Simple} alt="" className="section3_img_1"></Image>
                    <text className="description">
                        Мы ценим ваше время, поэтому создали самый простой конвертор
                        валют во всем интернете
                    </text>
                </div>
                <div className="section3_block1">
                    <div className="section2_text">Время работы</div>
                    <Image src={Time} alt="" className="section3_img_2"></Image>
                    <text className="description">
                        Наш сервис работает 24/7 без выходных и праздников.
                        Конвертируйте валюту когда вам удобно
                    </text>
                </div>
                <div className="section3_block1">
                    <div className="section2_text">Приватность</div>
                    <Image src={Secure} alt="" className="section3_img_3"></Image>
                    <text className="description">
                        Все ваши действия полность приватны, никто не видит ваши ковертации, кроме вас
                    </text>
                </div>
                <div className="section3_block1">
                    <div className="section2_text">Без регистрации</div>
                    <Image src={NoReg} alt="" className="section3_img_4"></Image>
                    <text className="description">
                        Наш сервис работает как с регистрацией, так и без неё.
                        Выбор всегда за вами
                    </text>
                </div>
            </div>
        </div>
    );
}
