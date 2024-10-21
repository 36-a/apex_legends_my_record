export interface RankInterface {
    rankImg: string;
    rankName: string;
}

export const Rank = (props: RankInterface) => {
    return (
        <>
            <img
                className="h-[120px] w-[120px]"
                src={props.rankImg}
                alt={props.rankName}
            />
        </>
    );
};
