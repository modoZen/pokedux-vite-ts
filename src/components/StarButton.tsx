import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FC } from "react";

type Props = {
    isFavorite: boolean,
    onClick : ()=>void
}

const StarButton:FC<Props> = ({ isFavorite, onClick}) =>{
    const Icon = isFavorite?< StarFilled />:<StarOutlined />
    return <Button icon={Icon} onClick={onClick}></Button>
}

export {
    StarButton
}