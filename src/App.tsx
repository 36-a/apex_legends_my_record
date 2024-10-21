import useSWR from "swr";
import { ErrorPage } from "./components/error";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Legend, type LegendType } from "./components/legend";
import { Loading } from "./components/loading";
import { Rank, type RankInterface } from "./components/rank";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
    const url =
        "https://api.mozambiquehe.re/bridge?auth=dfdf5db72ef7a970d2ea8068ee9565c8&player=ap36a&platform=PC";
    const { data, error, isLoading } = useSWR(url, fetcher);

    if (error)
        return (
            <>
                <div className="grid h-screen grid-rows-fit">
                    <Header />
                    <main className="flex items-center justify-center">
                        <ErrorPage />
                    </main>
                    <Footer />
                </div>
            </>
        );
    if (isLoading)
        return (
            <>
                <div className="grid h-screen grid-rows-fit">
                    <Header />
                    <main className="flex items-center justify-center">
                        <Loading />
                    </main>
                    <Footer />
                </div>
            </>
        );

    const { Global, ...legends } = data.legends.all;
    const rank: RankInterface = {
        rankImg: data.global.rank.rankImg,
        rankName: data.global.rank.rankName,
    };
    const legendsName = Object.keys(legends);
    const legendsData = [];
    for (const name of legendsName) {
        const kills = legends[name].data.find(
            (l: { key: string }) => l.key === "kills",
        );
        const damage = legends[name].data.find(
            (l: { key: string }) => l.key === "damage",
        );
        const play = legends[name].data.find(
            (l: { key: string }) => l.key === "games_played",
        );
        const legend: LegendType = {
            front: {
                legendName: name,
                legendImg: legends[name].ImgAssets.icon,
            },
            back: {
                kills: kills?.value,
                damage: damage?.value,
                play: play?.value,
            },
        };
        legendsData.push(legend);
    }
    return (
        <>
            <div className="grid h-screen grid-rows-fit">
                <Header>
                    <Rank {...rank} />
                </Header>
                <main className="mx-auto my-3 grid w-11/12 grid-cols-fill gap-x-3 gap-y-4">
                    {legendsData.map((l) => (
                        <Legend
                            front={{ ...l.front }}
                            back={{ ...l.back }}
                            key={l.front.legendName}
                        />
                    ))}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
