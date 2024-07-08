import React from 'react';
import { cn } from "../lib/utils";
import { AnimatedList } from "./magicui/animated-list";

interface SportItem {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
    details: string;
}

const sportItems: SportItem[] = [
    {
        name: "Course",
        description: "4km",
        time: "10m ago",
        icon: "🏃‍♂️",
        color: "#FFB800",
        details: "Allure: 5:30 min/km",
    },
    {
        name: "Pompes",
        description: "30 séries",
        time: "5m ago",
        icon: "💪",
        color: "#FF3D71",
        details: "Repos entre séries: 1 min",
    },
];

const SportNotification = ({ name, description, icon, color, time, details }: SportItem) => {
    return (
        <figure
            className={cn(
                "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal dark:text-white/60">
                        {description}
                    </p>
                    <p className="text-xs text-gray-500">{details}</p>
                </div>
            </div>
        </figure>
    );
};

export default function AnimatedListSportDemo() {
    return (
        <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
            <AnimatedList>
                {sportItems.map((item, idx) => (
                    <SportNotification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
}
