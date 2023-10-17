import Image from 'next/image';
import DefaultProfile from "public/image/DefaultProfile.jpg"

interface PictureDisplayProps {
    picture: any
    size: number
    isCircle: boolean
}

const PictureDisplay: React.FC<PictureDisplayProps> = ({picture, size, isCircle}) => {
    const pictureClass = {width: `${size}rem`, height: `${size}rem`, borderRadius: `${isCircle ? size : 2}rem`}

    return (
        <div>
            {(picture !== "" && typeof picture !== "object") ?
                <img style={pictureClass}
                     src={picture}
                     alt="Picture"/> :
                (typeof picture == "object") ?
                    <Image style={pictureClass}
                           src={picture} alt="Picture"/> :
                    <Image style={pictureClass}
                           src={DefaultProfile} alt="Default Picture"/>
            }
        </div>
    )
}
export default PictureDisplay;