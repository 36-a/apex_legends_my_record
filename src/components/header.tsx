type Props = {
    children?: React.ReactNode;
};

export const Header = (props: Props) => {
    return (
        <>
            <header className="sticky top-0 z-10 mb-3 flex h-40 w-full flex-col items-center justify-center bg-black p-2 pt-3 text-center text-slate-100 shadow-bottom">
                {props.children}
            </header>
        </>
    );
};
