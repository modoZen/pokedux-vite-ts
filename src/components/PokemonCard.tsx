import { FC } from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { StarButton } from "./StarButton";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../actions";

type Props = {
    name: string,
    image: string,
    types: any[],
    id: number,
    isFavorite: boolean
}

const PokemonCard:FC<Props> = ({name, image, types, id, isFavorite}) => {
    const dispath = useDispatch();
    return (
        <Card
            title={name}
            cover={<img src={image} alt={name} />}
            extra={<StarButton isFavorite={isFavorite} onClick={()=>{
                dispath(setFavorite({pokemonId: id}))
            }} />}
        >
            <Meta description={types.map(type=>type.type.name).join()} />
        </Card>
    )
}

export {
    PokemonCard
}