/**
 * Stand-in for a club that has no photographs of its own yet. It fills the
 * frame a photo would, so a card or hero never shows another venue's picture
 * under this club's name.
 */
export function NoPhotoPlate({ name }: { name: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-bg-secondary px-4 text-center">
      <span className="font-display italic text-2xl text-text-secondary">{name}</span>
      <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-text-muted mt-2">
        Photographs to follow
      </span>
    </div>
  );
}
