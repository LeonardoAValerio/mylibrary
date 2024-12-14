import { FunctionComponent, useEffect, useState } from "react";

interface ImgProps {
    imgUrl: string | undefined
}

export const Img: FunctionComponent<ImgProps> = ({imgUrl}) => {
    const [imgSrc, setImgSrc] = useState(
        imgUrl ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnqhY9ewrVbulv7R_5D0U8YOx8PN9tv-bZQ&s"
    );

    const reloadSrc = (e: any) => {
        e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnqhY9ewrVbulv7R_5D0U8YOx8PN9tv-bZQ&s"
    }

    useEffect(() => {
        setTimeout(() => {
            setImgSrc(
                imgUrl ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnqhY9ewrVbulv7R_5D0U8YOx8PN9tv-bZQ&s"
            );
        }, 2000)
    }, [imgUrl]);

    return <img src={imgSrc} onError={reloadSrc}></img>
}
