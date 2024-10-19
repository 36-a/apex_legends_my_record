export interface RankInterface {
    level: number;
    rankImg: string;
    rankName: string;
    total: number;
}

export const Rank = (props: RankInterface) => {
    return (
        <>
            <div>
                <img src={props.rankImg} alt={props.rankName} />
            </div>
            <div className="font-macondo text-2xl">
                <span>{props.total}</span>
                <span>kills</span>
            </div>
        </>
    );
};
