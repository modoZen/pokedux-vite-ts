import { FC } from "react";
import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { PokemonType } from "../api";

const PokemonCard:FC<PokemonType> = ({name, url}) => {
    return (
        <Card
            title={name}
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto" />}
            extra={<StarOutlined />}
        >
            <Meta description="fire, fairy" />
        </Card>
    )
}

export {
    PokemonCard
}