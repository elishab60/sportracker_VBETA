import { VelocityScroll } from "./magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
    return (
        <VelocityScroll
            text="⚠️ Application en cours de développement"
            default_velocity={5}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
        />
    );
}
