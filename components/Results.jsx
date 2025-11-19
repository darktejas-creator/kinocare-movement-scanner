import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Share2, Download, Activity, AlertCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const MetricCard = ({ label, value, status, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="glass-panel"
        style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
    >
        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{label}</span>
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{value}</div>
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontSize: '0.8rem',
            color: status === 'good' ? 'var(--color-success)' : status === 'warning' ? 'var(--color-warning)' : 'var(--color-error)'
        }}>
            {status === 'good' ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
            {status === 'good' ? 'Optimal' : status === 'warning' ? 'Attention Needed' : 'Critical'}
        </div>
    </motion.div>
);

const Results = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ maxWidth: '1000px' }}
        >
            <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="flex-center" style={{ gap: '0.5rem', color: 'var(--color-text-muted)' }}>
                    <ChevronLeft size={20} /> Back to Dashboard
                </Link>
                <div className="flex-center" style={{ gap: '1rem' }}>
                    <button className="glass-panel flex-center" style={{ width: '40px', height: '40px', padding: 0 }}>
                        <Share2 size={18} />
                    </button>
                    <button className="glass-panel flex-center" style={{ width: '40px', height: '40px', padding: 0 }}>
                        <Download size={18} />
                    </button>
                </div>
            </header>

            <div className="grid-results" style={{ marginBottom: '2rem' }}>
                <div>
                    <h1 className="text-gradient" style={{ marginBottom: '0.5rem' }}>Knee Joint Analysis</h1>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Scan ID: #8493-K • Today, 10:23 AM</p>

                    <div className="glass-panel" style={{ padding: '2rem', height: '300px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', marginBottom: '2rem' }}>
                        {/* Simulated Chart */}
                        {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                style={{
                                    width: '100%',
                                    background: i === 5 ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
                                    borderRadius: '4px 4px 0 0',
                                    position: 'relative'
                                }}
                            >
                                {i === 5 && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-30px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        background: 'var(--color-surface)',
                                        padding: '0.2rem 0.5rem',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem',
                                        border: '1px solid var(--color-primary)'
                                    }}>
                                        Peak
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <MetricCard label="Flexion Angle" value="135°" status="good" delay={0.3} />
                        <MetricCard label="Extension" value="2°" status="warning" delay={0.4} />
                        <MetricCard label="Stability Score" value="92/100" status="good" delay={0.5} />
                        <MetricCard label="Symmetry" value="98%" status="good" delay={0.6} />
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="glass-panel" style={{ padding: '1.5rem' }}>
                        <h3>AI Insights</h3>
                        <ul style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                <CheckCircle size={18} color="var(--color-success)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                Excellent range of motion detected in the left knee joint.
                            </li>
                            <li style={{ display: 'flex', gap: '0.8rem', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                <AlertCircle size={18} color="var(--color-warning)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                Slight hyperextension observed during the load phase. Recommend monitoring.
                            </li>
                        </ul>
                    </div>

                    <div className="glass-panel" style={{ padding: '1.5rem', background: 'linear-gradient(135deg, rgba(112, 0, 255, 0.1), rgba(0, 242, 255, 0.1))' }}>
                        <h3>Recommended Exercises</h3>
                        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <div style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Quad Strengthening</span>
                                <ChevronLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                            </div>
                            <div style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span>Hamstring Curls</span>
                                <ChevronLeft size={16} style={{ transform: 'rotate(180deg)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Results;
