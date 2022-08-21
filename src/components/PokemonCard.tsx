import { FC } from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

type Props = {
    name: string,
    image: string,
    types: any[]
}

const PokemonCard:FC<Props> = ({name, image, types}) => {
    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarOutlined />}
        >
            <Meta description={types.map(type=>type.type.name).join()} />
        </Card>
    )
}

export {
    PokemonCard
}