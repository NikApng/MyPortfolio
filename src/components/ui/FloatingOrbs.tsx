import React from "react";
import clsx from "clsx";

type FloatingOrbsProps = {
    hue: number;
    className?: string;
};

const FloatingOrbs: React.FC<FloatingOrbsProps> = ({ hue, className }) => {
    return (
        <div
            className={clsx("orb-field pointer-events-none", className)}
            aria-hidden="true"
            style={{ ["--orb-hue" as string]: hue } as React.CSSProperties}
        >
            <span className="orb orb-1" />
            <span className="orb orb-2" />
            <span className="orb orb-3" />
            <span className="orb orb-4" />
        </div>
    );
};

export default FloatingOrbs;
