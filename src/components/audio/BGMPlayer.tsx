"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BGMPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);
    const [isMuted, setIsMuted] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume;
        }
    }, [volume, isMuted]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch((e) => {
                    console.error("Audio playback failed:", e);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <audio
                ref={audioRef}
                src="/bgm/relaxing.mp3"
                loop
                preload="auto"
            />

            <motion.div
                layout
                className={cn(
                    "flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full p-2 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-cyan-500/20",
                    isHovered ? "pr-4" : ""
                )}
            >
                <button
                    onClick={togglePlay}
                    className="relative group w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                    {isPlaying ? (
                        <Pause className="w-5 h-5 text-cyan-400" />
                    ) : (
                        <Play className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
                    )}

                    {/* Pulse effect when playing */}
                    {isPlaying && (
                        <span className="absolute inset-0 rounded-full animate-ping bg-cyan-500/20" />
                    )}
                </button>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            className="flex items-center gap-3 pl-1 overflow-hidden"
                        >
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[10px] uppercase tracking-wider text-white/50 font-medium">BGM</span>
                                <span className="text-xs text-white/90 whitespace-nowrap font-light">Relaxing Flow</span>
                            </div>

                            <div className="h-8 w-[1px] bg-white/10 mx-1" />

                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                {isMuted || volume === 0 ? (
                                    <VolumeX className="w-4 h-4" />
                                ) : (
                                    <Volume2 className="w-4 h-4" />
                                )}
                            </button>

                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={isMuted ? 0 : volume}
                                onChange={(e) => {
                                    setVolume(parseFloat(e.target.value));
                                    if (parseFloat(e.target.value) > 0) setIsMuted(false);
                                }}
                                className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
