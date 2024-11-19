import Image from "next/image";
import Line from "@/app/public/icons/punct_line.svg";
import Arrow from "@/app/public/icons/arrow.svg";

export default function Steps() {
    return (
        <div className="section4">
            <text className="section2_text">Как это работает</text>
            <div className="section4_block">
                <div className="steps">
                    <div className="step_item">
                        <text className="number">1</text>
                    </div>
                    <Image src={Line} alt=""></Image>
                    <div className="step_item">
                        <text className="number">2</text>
                    </div>
                    <Image src={Line} alt=""></Image>
                    <div className="step_item">
                        <text className="number">3</text>
                    </div>
                    <Image src={Arrow} alt=""></Image>
                    <div className="step_item">
                        <text className="number_special">4</text>
                    </div>
                </div>
                <div className="step_description">
                    <text className="description">Выбираете то, что хотите менять</text>
                    <text className="description">Выбираете то, на что хотите менять</text>
                    <text className="description">Нажимаете на кнопу “Обменять”</text>
                    <text className="description">Обмен готов!</text>
                </div>
            </div>
        </div>
    );
}
