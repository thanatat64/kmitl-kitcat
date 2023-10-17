import Image from 'next/image';
import DefaultProfile from "public/image/DefaultProfile.jpg"

interface PictureUploaderProps {
    picture: any
    setPicture: any
    size: number
    isCircle: boolean
}

const PictureUploader: React.FC<PictureUploaderProps> = ({picture, setPicture, size, isCircle}) => {
    const pictureClass = {width: `${size}rem`, height: `${size}rem`, borderRadius: `${isCircle ? size : 2}rem`}

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const files = event.target.files
        if (!files)
            return
        const file = files[0]

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setPicture(reader.result)
        }
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <div>
                {(picture !== "") ?
                    <img style={pictureClass}
                         src={picture}
                         alt="Uploaded Picture"/> :
                    <Image style={pictureClass}
                           src={DefaultProfile} alt="Default Picture"/>
                }
            </div>
            <label className="w-min text-nowrap cursor-pointer border-2 border-[var(--navy)] bg-slate-50 rounded-full py-1 px-3 mt-2 hover:scale-105 duration-300 ">
                <span className="text-[var(--navy)] font-medium">Choose a file</span>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileInputChange}
                />
            </label>
        </div>
    )
}
export default PictureUploader;
