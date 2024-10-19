type Props = {
    legendImg: string;
    legendName: string;
    total: number;
};

export const Legend = (props: Props) => {
    return (
        <>
            <div className="col-span-1 w-72 rounded-lg pt-1 pb-2 shadow-blue">
                <div>
                    <img
                        src={props.legendImg}
                        alt={props.legendName}
                        onError={(e) => {
                            (e.target as HTMLImageElement).onerror = null;
                            (e.target as HTMLImageElement).src = "/404.png";
                        }}
                        className="h-[440px] w-auto rounded-lg object-cover object-center"
                    />
                </div>
                <div className="-mt-2 text-center font-macondo text-xl">
                    <span>{props.total}</span>
                    <span>kills</span>
                </div>
            </div>
        </>
    );
};
