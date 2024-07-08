import React from 'react';
import { cn } from "../lib/utils";
import { AnimatedList } from "./magicui/animated-list";

interface NutritionItem {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
    calories: {
        protein: number;
        carbs: number;
        fats: number;
    };
}

const nutritionItems: NutritionItem[] = [
    {
        name: "Blanc de poulet",
        description: "150g",
        time: "15m ago",
        icon: "🍗",
        color: "#00C9A7",
        calories: {
            protein: 30,
            carbs: 0,
            fats: 3,
        },
    },
    {
        name: "Saumon grillé",
        description: "200g",
        time: "20m ago",
        icon: "🐟",
        color: "#1E86FF",
        calories: {
            protein: 20,
            carbs: 5,
            fats: 8,
        },
    },
    {
        name: "Salade verte",
        description: "1 bol",
        time: "10m ago",
        icon: "🥗",
        color: "#34D399",
        calories: {
            protein: 2,
            carbs: 10,
            fats: 1,
        },
    },
    {
        name: "Yaourt nature",
        description: "125g",
        time: "5m ago",
        icon: "🍦",
        color: "#FBBF24",
        calories: {
            protein: 5,
            carbs: 8,
            fats: 3,
        },
    },
    {
        name: "Oeuf dur",
        description: "1 unité",
        time: "10m ago",
        icon: "🥚",
        color: "#F472B6",
        calories: {
            protein: 6,
            carbs: 1,
            fats: 5,
        },
    },
    {
        name: "Pâtes complètes",
        description: "100g",
        time: "12m ago",
        icon: "🍝",
        color: "#8B5CF6",
        calories: {
            protein: 12,
            carbs: 20,
            fats: 2,
        },
    },
    {
        name: "Avocat",
        description: "1 fruit",
        time: "18m ago",
        icon: "🥑",
        color: "#6EE7B7",
        calories: {
            protein: 4,
            carbs: 15,
            fats: 10,
        },
    },
    {
        name: "Morceau de fromage",
        description: "30g",
        time: "8m ago",
        icon: "🧀",
        color: "#FCD34D",
        calories: {
            protein: 7,
            carbs: 1,
            fats: 8,
        },
    },
];

const NutritionNotification = ({ name, description, icon, color, time, calories }: NutritionItem) => {
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
                    <div className="text-xs text-gray-500 flex gap-1 mt-1">
                        <span>Détail des calories : P {calories.protein} | G {calories.carbs} | F {calories.fats}</span>
                    </div>
                </div>
            </div>
        </figure>
    );
};

const AnimatedListNutritionDemo = () => {
    return (
        <div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
            <AnimatedList>
                {nutritionItems.map((item, idx) => (
                    <NutritionNotification {...item} key={idx} />
                ))}
            </AnimatedList>
        </div>
    );
};

export default AnimatedListNutritionDemo;
