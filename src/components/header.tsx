type Props = {
    children?: React.ReactNode;
};

export const Header = (props: Props) => {
    return (
        <>
            <header className="sticky top-0 z-10 mb-3 flex h-32 w-full items-center justify-center bg-black px-2 pt-2 text-center text-slate-100 shadow-bottom">
                <div className="xs:absolute xs:left-0">{props.children}</div>
                <h1 className="xs:block hidden bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text font-bold text-transparent xs:text-3xl xs:tracking-normal md:text-4xl md:tracking-wide">
                    Apex Legends
                    <br className="sm:hidden" /> My Record
                </h1>
            </header>
        </>
    );
};
