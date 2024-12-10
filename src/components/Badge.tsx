interface Props {
    text: string;
}

function Bagde({ text }: Props) {
    return ( 
        <span className="bg-secondary rounded-xl py-1 px-2 text-white text-sm font-semibold">
            {text}
        </span>
     );
}

export { Bagde };