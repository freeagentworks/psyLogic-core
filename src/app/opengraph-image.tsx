import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'PsyLogic Core | 深層心理への旅';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: '#050505',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Background Gradient */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #1e1b4b 0%, #050505 70%)',
                    }}
                />

                {/* Abstract Geometric Logo Representation */}
                <div
                    style={{
                        display: 'flex',
                        position: 'relative',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 240,
                        height: 240,
                        marginBottom: 40,
                    }}
                >
                    {/* Outer Ring */}
                    <div style={{
                        position: 'absolute',
                        width: 240,
                        height: 240,
                        borderRadius: '50%',
                        border: '2px solid rgba(139, 92, 246, 0.3)',
                    }} />

                    {/* Inner Rotated Square (Diamond) */}
                    <div style={{
                        position: 'absolute',
                        width: 160,
                        height: 160,
                        border: '4px solid rgba(6, 182, 212, 0.6)',
                        transform: 'rotate(45deg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(6, 182, 212, 0.1)',
                    }} />

                    {/* Core */}
                    <div style={{
                        width: 40,
                        height: 40,
                        background: 'white',
                        borderRadius: '50%',
                        boxShadow: '0 0 40px 10px rgba(255, 255, 255, 0.8)',
                    }} />
                </div>

                {/* Title Text */}
                <div style={{
                    display: 'flex',
                    fontSize: 72,
                    fontWeight: 900,
                    background: 'linear-gradient(to right, #22d3ee, #8b5cf6, #f43f5e)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    letterSpacing: '-0.02em',
                    zIndex: 10
                }}>
                    PsyLogic Core
                </div>

                {/* Subtitle */}
                <div style={{
                    display: 'flex',
                    fontSize: 28,
                    marginTop: 20,
                    color: '#94a3b8',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    zIndex: 10
                }}>
                    Deep Psyche Analysis
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
