import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, Camera, X, Zap, CheckCircle } from 'lucide-react';

const Scanner = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [scanProgress, setScanProgress] = useState(0);
    const [scanComplete, setScanComplete] = useState(false);

    useEffect(() => {
        let interval;
        if (isScanning && scanProgress < 100) {
            interval = setInterval(() => {
                setScanProgress(prev => prev + 1);
            }, 50);
        } else if (scanProgress >= 100) {
            setIsScanning(false);
            setScanComplete(true);
        }
        return () => clearInterval(interval);
    }, [isScanning, scanProgress]);

    const startScan = () => {
        setIsScanning(true);
        setScanProgress(0);
        setScanComplete(false);
    };

    return (
        <div className="container flex-center" style={{ height: 'calc(100vh - 100px)', flexDirection: 'column', position: 'relative' }}>
            <AnimatePresence>
                {scanComplete && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="glass-panel flex-center"
                        style={{
                            position: 'absolute',
                            zIndex: 50,
                            width: '300px',
                            height: '200px',
                            flexDirection: 'column',
                            border: '1px solid var(--color-success)'
                        }}
                    >
                        <CheckCircle size={64} color="var(--color-success)" style={{ marginBottom: '1rem' }} />
                        <h3>Scan Complete</h3>
                        <p style={{ color: 'var(--color-text-muted)' }}>Analyzing data...</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="glass-panel"
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '70vh',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
            >
                {/* Camera View Placeholder */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #111, #050505)',
                    position: 'relative'
                }}>
                    {/* Grid Overlay */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage: 'linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        opacity: 0.3
                    }}></div>

                    {/* HUD Elements */}
                    <div style={{ position: 'absolute', top: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between' }}>
                        <div className="glass-panel" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                            <span style={{ color: 'var(--color-primary)' }}>●</span> LIVE FEED
                        </div>
                        <div className="glass-panel" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                            AI TRACKING: ON
                        </div>
                    </div>

                    {/* Scanning Line */}
                    {isScanning && (
                        <motion.div
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                height: '2px',
                                background: 'var(--color-primary)',
                                boxShadow: '0 0 20px var(--color-primary)',
                                zIndex: 10
                            }}
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        />
                    )}

                    {/* Central Target */}
                    <div className="flex-center" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                        <div style={{
                            width: '250px',
                            height: '400px',
                            border: '2px solid rgba(255,255,255,0.2)',
                            borderRadius: '20px',
                            position: 'relative'
                        }}>
                            {/* Corner Markers */}
                            <div style={{ position: 'absolute', top: -2, left: -2, width: 20, height: 20, borderTop: '4px solid var(--color-primary)', borderLeft: '4px solid var(--color-primary)', borderRadius: '4px 0 0 0' }}></div>
                            <div style={{ position: 'absolute', top: -2, right: -2, width: 20, height: 20, borderTop: '4px solid var(--color-primary)', borderRight: '4px solid var(--color-primary)', borderRadius: '0 4px 0 0' }}></div>
                            <div style={{ position: 'absolute', bottom: -2, left: -2, width: 20, height: 20, borderBottom: '4px solid var(--color-primary)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0 0 0 4px' }}></div>
                            <div style={{ position: 'absolute', bottom: -2, right: -2, width: 20, height: 20, borderBottom: '4px solid var(--color-primary)', borderRight: '4px solid var(--color-primary)', borderRadius: '0 0 4px 0' }}></div>
                        </div>
                    </div>

                    {/* Body Skeleton Placeholder */}
                    <div className="flex-center" style={{ position: 'absolute', inset: 0, opacity: 0.5 }}>
                        <svg width="200" height="350" viewBox="0 0 100 200" fill="none" stroke="var(--color-primary)" strokeWidth="1">
                            <circle cx="50" cy="20" r="10" />
                            <line x1="50" y1="30" x2="50" y2="80" />
                            <line x1="20" y1="50" x2="80" y2="50" />
                            <line x1="20" y1="50" x2="20" y2="100" />
                            <line x1="80" y1="50" x2="80" y2="100" />
                            <line x1="50" y1="80" x2="30" y2="140" />
                            <line x1="50" y1="80" x2="70" y2="140" />
                            <line x1="30" y1="140" x2="30" y2="190" />
                            <line x1="70" y1="140" x2="70" y2="190" />
                        </svg>
                    </div>

                </div>

                {/* Controls */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '2rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem'
                }}>
                    {!isScanning ? (
                        <button
                            onClick={startScan}
                            style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                background: 'var(--color-text)',
                                border: '4px solid rgba(255,255,255,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                            }}
                        >
                            <div style={{ width: '20px', height: '20px', background: 'var(--color-error)', borderRadius: '50%' }}></div>
                        </button>
                    ) : (
                        <div style={{ width: '100%', maxWidth: '300px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                <span>SCANNING...</span>
                                <span>{scanProgress}%</span>
                            </div>
                            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}>
                                <motion.div
                                    style={{ width: `${scanProgress}%`, height: '100%', background: 'var(--color-primary)', borderRadius: '2px' }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default Scanner;
