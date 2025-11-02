"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-border bg-background p-6 shadow-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground transition hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => onOpenChange(false)}
        >
          fechar
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

type DialogHeaderProps = {
  children: ReactNode;
  className?: string;
};

export function DialogHeader({ children, className }: DialogHeaderProps) {
  return <div className={`space-y-2 text-center sm:text-left ${className ?? ""}`}>{children}</div>;
}

type DialogTitleProps = {
  children: ReactNode;
  className?: string;
};

export function DialogTitle({ children, className }: DialogTitleProps) {
  return <h2 className={`text-lg font-semibold leading-none tracking-tight ${className ?? ""}`}>{children}</h2>;
}

type DialogDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export function DialogDescription({ children, className }: DialogDescriptionProps) {
  return <p className={`text-sm text-muted-foreground ${className ?? ""}`}>{children}</p>;
}

type DialogContentProps = {
  children: ReactNode;
  className?: string;
};

export function DialogContent({ children, className }: DialogContentProps) {
  return <div className={`max-h-[70vh] overflow-y-auto ${className ?? ""}`}>{children}</div>;
}

