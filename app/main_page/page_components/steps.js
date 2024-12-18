import Image from "next/image";
import Line from "@/app/public/icons/punct_line.svg";
import Arrow from "@/app/public/icons/arrow.svg";

export default function Steps() {
    return (
        <div className="section4">
            <div className="section2_text">Как это работает</div>
            <div className="section4_block">
                <div className="steps">
                    <div className="step_item">
                        <div className="number">1</div>
                    </div>
                    <Image src={Line} alt=""></Image>
                    <div className="step_item">
                        <text className="number">2</text>
                    </div>
                    <Image src={Line} alt=""></Image>
                    <div className="step_item">
                        <div className="number">3</div>
                    </div>
                    <Image src={Arrow} alt=""></Image>
                    <div className="step_item">
                        <div className="number_special">4</div>
                    </div>
                </div>
                <div className="step_description">
                    <div className="description">Выбираете то, что хотите менять</div>
                    <div className="description">Выбираете то, на что хотите менять</div>
                    <div className="description">Нажимаете на кнопу “Обменять”</div>
                    <div className="description">Обмен готов!</div>
                </div>
            </div>
        </div>
    );
}
