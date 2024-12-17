import { FunctionComponent, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./header.css"
import { GoArrowLeft } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";
import { OptionHeader } from "../OptionHeader";

interface HeaderProps {
    name: string;
    isReturnable?: boolean;
    children?: any;
}

export const Header: FunctionComponent<HeaderProps> = ({ name, isReturnable, children }) => {
    const [isInOptions, setIsInOptions] = useState(false); 
    const navigate = useNavigate();

    
    const handleClickReturn = () => {
        navigate(-1);
    }

    const handleClickOptions = () => {
        setIsInOptions(!isInOptions);
    }
    
    return (
        <>
            <header className="header">
                <div className="header-text">
                    {(isReturnable ?? false) === true && 
                        <GoArrowLeft size={"24px"} onClick={handleClickReturn} cursor={"pointer"}></GoArrowLeft>
                    }
                    <h2>{name}</h2>
                </div>
                {children &&
                        <HiDotsVertical size={"48px"} cursor={"pointer"} onClick={handleClickOptions}></HiDotsVertical>
                }
                {isInOptions &&
                    <div className="options-header">
                        {children}
                    </div>
                }
            </header>
            <div className="space-header"></div>
        </>
    )
}