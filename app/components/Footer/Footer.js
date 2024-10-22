import Link from "next/link";
import "./Footer.css"
import Image from "next/image";
import Image1 from "./telegram.svg"
import Image2 from "./github.svg"

export function Footer({children}){

    return(
        <div className="footer-box">
            <div className="block_1">
                <div className="list">
                    <div className="f-title">
                        FexRate
                    </div>
                    <div className="text1">Создано FexRate Team</div>
                    <div className="logo">
                        <Image src={Image1} alt=""/>
                        <Image src={Image2} alt=""/>
                    </div>
                    <div className="text2">Copyright © 2024 FexRate Team. All Rights Reserved</div>
                </div>
            </div>

        </div>
    );

}