import useSWR from "swr";
import { ErrorPage } from "./components/error";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Legend } from "./components/legend";
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
                <div className="grid h-[97vh] grid-rows-fit">
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
                <div className="grid h-[97vh] grid-rows-fit">
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
        level: data.global.level,
        rankImg: data.global.rank.rankImg,
        rankName: data.global.rank.rankName,
        total: data.total.kills.value,
    };
    const legendsName = Object.keys(legends);
    const legendsData = [];
    for (const name of legendsName) {
        legendsData.push({
            legendName: name,
            total: legends[name].data.map(
                (l: { name: string; value: string | number }) => {
                    if (l.name === "BR Kills") return l.value;
                },
            ),
            legendImg: legends[name].ImgAssets.icon,
        });
    }

    return (
        <>
            <div className="grid h-[97vh] grid-rows-fit">
                <Header>
                    <Rank {...rank} />
                </Header>
                <main className="mx-auto my-3 grid w-11/12 grid-cols-fill gap-x-3 gap-y-4">
                    {legendsData.map((l) => (
                        <Legend {...l} key={l.legendName} />
                    ))}
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
