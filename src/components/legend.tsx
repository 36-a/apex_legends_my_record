import { motion } from "framer-motion";
import { useState } from "react";

type Front = {
    legendImg: string;
    legendName: string;
};

type Back = {
    kills: number | undefined;
    damage: number | undefined;
    play: number | undefined;
};

export type LegendType = {
    front: Front;
    back: Back;
};

export const Legend = ({ front, back }: { front: Front; back: Back }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <>
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
                className="col-span-1 m-auto h-[440px] w-72 cursor-pointer rounded-lg border border-slate-700 pt-1 pb-2 shadow-right"
                onClick={() => setIsFlipped(!isFlipped)}
                style={{ perspective: "1000px" }}
            >
                <motion.div
                    className="relative h-full w-full"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div
                        className="absolute"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <div className="absolute top-2 left-4 font-macondo text-3xl">
                            &#8640;
                        </div>
                        <img
                            src={front.legendImg}
                            alt={front.legendName}
                            onError={(e) => {
                                (e.target as HTMLImageElement).onerror = null;
                                (e.target as HTMLImageElement).src = "/404.png";
                            }}
                            className="h-[440px] w-auto rounded-lg object-cover object-center"
                        />
                    </div>
                    <div
                        className="absolute flex h-full w-full flex-col justify-center gap-1 p-5 text-left font-macondo text-2xl"
                        style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)",
                        }}
                    >
                        <span>Kills: {back.kills}</span>
                        <span>Damage: {back.damage}</span>
                        <span>Play: {back.play}</span>
                    </div>
                </motion.div>
            </div>
        </>
    );
};
