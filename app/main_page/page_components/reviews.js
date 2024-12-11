import Image from "next/image";
import Link from "next/link";
import reviews from "@/app/public/img/img_block5.png";

export default function Reviews () {
    return (
        <div className="section5">
            <Image src={reviews} alt="" className="section5_img"></Image>
            <div className="section2_text">Вы можете ознакомиться с различными отзывами от наших клиентов</div>
            <Link href="" className="review_link">
                <text>Подробнее {'>>'}</text>
            </Link>
        </div>
    );
}
