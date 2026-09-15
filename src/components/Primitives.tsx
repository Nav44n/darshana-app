import React, { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ChevronRight } from 'lucide-react';

// ── Shared web primitives (0.7) ──────────────────────────────────────
// Web-only replacements for ad hoc shells duplicated across screens.
// Guna Tailwind classes only; system identity arrives via accent var
// strings (e.g. 'var(--color-amber)') so no ad-hoc hex appears here.
// Type roles favour src/index.css (.t-display2, .t-body-sans, …) to
// optimise behaviour across viewports and scripts.

/** Translucent accent tint that respects CSS vars. Avoids the invalid
 *  `var(--x)15` pattern by using color-mix, widely supported as baseline. */
export function accentTint(primary: string, percent = 14): string {
  return `color-mix(in srgb, ${primary} ${percent}%, transparent)`;
}

export function PageShell({
  children,
  width = 'narrow',
  className = '',
}: {
  children: React.ReactNode;
  width?: 'narrow' | 'wide';
  className?: string;
}) {
  const max = width === 'wide' ? 'max-w-4xl' : 'max-w-3xl';
  return (
    <div className={`space-y-8 animate-fade-in ${max} mx-auto pb-24 ${className}`}>{children}</div>
  );
}

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-avyakta-2 rounded-2xl border border-tamas-deep shadow-xs overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  padding = 'article',
  className = '',
}: {
  children: React.ReactNode;
  padding?: 'article' | 'plain' | 'tight';
  className?: string;
}) {
  const pad =
    padding === 'article'
      ? 'p-8 md:p-10 space-y-8'
      : padding === 'plain'
        ? 'p-6'
        : 'p-5';
  return <div className={`${pad} ${className}`}>{children}</div>;
}

export function SectionTitle({
  children,
  icon,
  count,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  count?: number;
}) {
  return (
    <h3 className="text-sm font-bold text-tamas uppercase tracking-wider flex items-center">
      {icon && <span className="mr-2 inline-flex">{icon}</span>}
      {children}
      {count !== undefined && <span className="ml-1.5 font-medium">({count})</span>}
    </h3>
  );
}

export function Eyebrow({
  children,
  accentPrimary,
  className = '',
}: {
  children: React.ReactNode;
  accentPrimary?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${className}`}
      style={
        accentPrimary
          ? { backgroundColor: accentTint(accentPrimary, 12), color: accentPrimary }
          : undefined
      }
    >
      {children}
    </span>
  );
}

export function CountBadge({
  children,
  accentPrimary,
  className = '',
}: {
  children: React.ReactNode;
  accentPrimary?: string;
  className?: string;
}) {
  return (
    <span
      className={`text-xs font-bold tabular-nums px-2.5 py-1.5 rounded-lg shrink-0 inline-flex items-center justify-center ring-1 ring-inset ring-white/10 ${className}`}
      style={
        accentPrimary
          ? { backgroundColor: accentTint(accentPrimary, 12), color: accentPrimary }
          : undefined
      }
    >
      {children}
    </span>
  );
}

const chipBase =
  'inline-flex items-center px-3 py-1.5 rounded-full bg-avyakta-3 text-sattva text-sm hover:bg-avyakta-4 transition-colors motion-reduce:transition-none min-h-11';

export function ChipLink({
  to,
  children,
  title,
}: {
  to: string;
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <Link to={to} className={chipBase} title={title}>
      {children}
    </Link>
  );
}

export function Notice({
  children,
  tone = 'amber',
}: {
  children: React.ReactNode;
  tone?: 'amber' | 'neutral';
}) {
  const cls =
    tone === 'amber'
      ? 'bg-amber-dim/20 border-amber-dim text-amber'
      : 'bg-avyakta-3 border-tamas-deep text-sattva-dim';
  return (
    <div role="status" className={`p-3 border rounded-lg text-xs ${cls}`}>
      {children}
    </div>
  );
}

/** Unified collapsible section replacing the duplicated Collapsible /
 *  RefSection patterns. Button carries aria-expanded; chevron rotates
 *  with motion-safe transition only. */
export function CollapsibleSection({
  title,
  icon,
  count,
  defaultOpen = true,
  children,
}: {
  title: React.ReactNode;
  icon?: React.ReactNode;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="pt-6 border-t border-tamas">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between mb-4 cursor-pointer"
      >
        <SectionTitle icon={icon} count={count}>
          {title}
        </SectionTitle>
        <ChevronDown
          aria-hidden="true"
          className={`w-4 h-4 text-tamas shrink-0 ml-2 transition-transform duration-base motion-reduce:transition-none ${open ? '' : '-rotate-90'}`}
        />
      </button>
      {open && <div>{children}</div>}
    </div>
  );
}

export function BottomBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-avyakta-2/80 backdrop-blur-md border-t border-tamas-deep">
      <div className="max-w-3xl mx-auto flex justify-between items-center">{children}</div>
    </div>
  );
}

export function ActionButton({
  children,
  onClick,
  variant = 'primary',
  label,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost';
  label?: string;
}) {
  const cls =
    variant === 'primary'
      ? 'bg-rajas text-sattva hover:bg-rajas-dim'
      : 'bg-avyakta-3 border border-tamas-deep text-sattva hover:bg-avyakta-4';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`inline-flex items-center justify-center min-h-11 min-w-11 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors motion-reduce:transition-none ${cls}`}
    >
      {children}
    </button>
  );
}

export function ActionLink({
  to,
  children,
  variant = 'ghost',
  label,
}: {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  label?: string;
}) {
  const cls =
    variant === 'primary'
      ? 'bg-rajas text-sattva hover:bg-rajas-dim'
      : 'bg-avyakta-3 border border-tamas-deep text-sattva hover:bg-avyakta-4';
  return (
    <Link
      to={to}
      aria-label={label}
      className={`inline-flex items-center justify-center min-h-11 min-w-11 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors motion-reduce:transition-none ${cls}`}
    >
      {children}
    </Link>
  );
}

export function Breadcrumb({
  trail,
  current,
}: {
  trail: { to: string; label: string }[];
  current: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm text-sattva-dim space-x-2 truncate">
      {trail.map((item) => (
        <React.Fragment key={item.to}>
          <Link to={item.to} className="hover:text-rajas transition-colors motion-reduce:transition-none truncate">
            {item.label}
          </Link>
          <BreadcrumbChevron />
        </React.Fragment>
      ))}
      <span aria-current="page" className="text-sattva font-medium truncate">
        {current}
      </span>
    </nav>
  );
}

// ── Chevron affordance (Item 4) ───────────────────────────────────
// Single standard for disclosure vs navigation cues. Decorative only:
// aria-hidden with state exposed via the parent button's aria-expanded.
// Sizes, colour, and motion stay consistent to optimise scanning
// behaviour; hover and keyboard focus receive the same brightening.

export function DisclosureChevron({
  open,
  className = '',
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <ChevronDown
      aria-hidden="true"
      className={`w-5 h-5 text-tamas shrink-0 transition-transform duration-base motion-reduce:transition-none ${open ? 'rotate-180' : ''} ${className}`}
    />
  );
}

export function RowChevron({ className = '' }: { className?: string }) {
  return (
    <ChevronRight
      aria-hidden="true"
      className={`w-4 h-4 text-tamas shrink-0 group-hover:text-sattva group-focus-visible:text-sattva transition-colors duration-base motion-reduce:transition-none forced-colors:text-[CanvasText] ${className}`}
    />
  );
}

export function BreadcrumbChevron({ className = '' }: { className?: string }) {
  return (
    <ChevronRight
      aria-hidden="true"
      className={`w-4 h-4 shrink-0 ${className}`}
    />
  );
}
