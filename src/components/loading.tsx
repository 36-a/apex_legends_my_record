import { motion } from "framer-motion";

export const Loading = () => {
    return (
        <div className="relative">
            <motion.div
                animate={{
                    rotate: [0, 90, 180, 279, 360],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    // biome-ignore lint/style/useNumberNamespace:
                    repeat: Infinity,
                }}
                className="absolute top-0 size-32 border-4 border-orange-600"
            />
            <motion.div
                initial={{ rotate: 45 }}
                animate={{
                    rotate: [45, -45, -135, -225, -315],
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    // biome-ignore lint/style/useNumberNamespace:
                    repeat: Infinity,
                }}
                className="size-32 border-4 border-teal-400"
            />
        </div>
    );
};
