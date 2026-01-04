import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function Section({ children, className, delay = 0 }: SectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={cn("py-20 md:py-28", className)}
        >
            {children}
        </motion.section>
    );
}
