import WordPullUp from "./magicui/word-pull-up";

export default function WordPullUpDemo() {
    return (
        <WordPullUp
            className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
            words="Disponible à partir de Septembre."
        />
    );
}
