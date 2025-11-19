import React from 'react';
import { motion } from 'framer-motion';
import { Activity, TrendingUp, Calendar, ArrowRight, ChevronRight } from 'lucide-react';

const StatCard = ({ title, value, label, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="glass-panel"
        style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
    >
        <div style={{
            position: 'absolute',
            top: '-10%',
            right: '-10%',
            opacity: 0.1,
            transform: 'rotate(-15deg)'
        }}>
            <Icon size={120} color={color} />
        </div>

        <div className="flex-center" style={{ justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{title}</h3>
            <Icon size={20} color={color} />
        </div>
        <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>{value}</div>
        <div style={{ fontSize: '0.85rem', color: color, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <TrendingUp size={14} /> {label}
        </div>
    </motion.div>
);

const ScanItem = ({ date, type, score, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            cursor: 'pointer',
            transition: 'background 0.2s ease'
        }}
        className="scan-item"
    >
        <div className="flex-center" style={{ gap: '1rem' }}>
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Activity size={20} color="var(--color-primary)" />
            </div>
            <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '500' }}>{type} Analysis</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{date}</p>
            </div>
        </div>
        <div className="flex-center" style={{ gap: '1rem' }}>
            <div style={{ textAlign: 'right' }}>
                <span style={{
                    display: 'block',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: score >= 90 ? 'var(--color-success)' : score >= 70 ? 'var(--color-warning)' : 'var(--color-error)'
                }}>
                    {score}%
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>Mobility</span>
            </div>
            <ChevronRight size={18} color="var(--color-text-muted)" />
        </div>
    </motion.div>
);

const Dashboard = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ maxWidth: '1200px' }}
        >
            <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Dashboard</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Overview of your movement health and recent activity.</p>
                </div>
                <button className="flex-center" style={{
                    background: 'var(--color-primary)',
                    color: '#000',
                    padding: '0.8rem 1.5rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '600',
                    gap: '0.5rem',
                    transition: 'transform 0.2s ease'
                }}>
                    Start New Scan <ArrowRight size={18} />
                </button>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <StatCard
                    title="Mobility Score"
                    value="87"
                    label="+2.4% vs last week"
                    icon={Activity}
                    color="var(--color-primary)"
                    delay={0.1}
                />
                <StatCard
                    title="Active Streak"
                    value="12 Days"
                    label="Keep it up!"
                    icon={Calendar}
                    color="var(--color-secondary)"
                    delay={0.2}
                />
                <StatCard
                    title="Joint Health"
                    value="Excellent"
                    label="Based on 5 scans"
                    icon={TrendingUp}
                    color="var(--color-success)"
                    delay={0.3}
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3>Recent Scans</h3>
                        <a href="/results" style={{ fontSize: '0.9rem' }}>View All</a>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <ScanItem date="Today, 10:23 AM" type="Knee Joint" score={92} delay={0.4} />
                        <ScanItem date="Yesterday, 4:15 PM" type="Spine Alignment" score={85} delay={0.5} />
                        <ScanItem date="Nov 15, 2023" type="Shoulder ROM" score={78} delay={0.6} />
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        border: '10px solid var(--color-surface-hover)',
                        borderTop: '10px solid var(--color-primary)',
                        borderRight: '10px solid var(--color-secondary)',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}>
                        87
                    </div>
                    <h3>Overall Health</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                        Your movement patterns are optimized. Focus on shoulder flexibility to improve your score.
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
