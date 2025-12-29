'use client';

import Link from 'next/link';
import { useQuizStore } from '@/lib/store/useQuizStore';
import { translations } from '@/lib/i18n/translations';
import { ArrowLeft, Brain, Heart, FileText } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function Background() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    );
}

export default function AboutPage() {
    const { language } = useQuizStore();
    const t = translations[language].about;

    return (
        <div className="min-h-screen text-white p-6 md:p-12 relative overflow-hidden">
            <Background />

            <div className="max-w-3xl mx-auto relative z-10 fade-in">
                <header className="mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        <span>{t.backHome}</span>
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{t.title}</h1>
                    <p className="text-xl text-slate-400 font-light">{t.subtitle}</p>
                </header>

                <div className="space-y-12">
                    {/* Section 1: Big Five */}
                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-300">
                                <Brain size={32} />
                            </div>
                            <h2 className="text-2xl font-bold">{t.bigFiveTitle}</h2>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {t.bigFiveDesc}
                        </p>
                    </section>

                    {/* Section 2: Attachment */}
                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-rose-500/20 rounded-xl text-rose-300">
                                <Heart size={32} />
                            </div>
                            <h2 className="text-2xl font-bold">{t.attachmentTitle}</h2>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {t.attachmentDesc}
                        </p>
                    </section>

                    {/* Section 3: SLOAN */}
                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-300">
                                <FileText size={32} />
                            </div>
                            <h2 className="text-2xl font-bold">{t.sloanTitle}</h2>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {t.sloanDesc}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
