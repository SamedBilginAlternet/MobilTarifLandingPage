// Google Play triangle: 4 colored quadrants forming a right-pointing triangle
// Triangle vertices: left-top (3,2), left-bottom (3,22), right-tip (21.5,12)
// Midpoint of top hypotenuse at x=12.25 → y=7
// Midpoint of bottom hypotenuse at x=12.25 → y=17
export default function GooglePlayIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      {/* Blue — top-left quadrilateral */}
      <path d="M3 2 L12.25 7 L12.25 12 L3 12 Z" fill="#4285F4" />
      {/* Green — bottom-left quadrilateral */}
      <path d="M3 12 L12.25 12 L12.25 17 L3 22 Z" fill="#34A853" />
      {/* Yellow — top-right triangle */}
      <path d="M12.25 7 L21.5 12 L12.25 12 Z" fill="#FBBC04" />
      {/* Red — bottom-right triangle */}
      <path d="M12.25 12 L21.5 12 L12.25 17 Z" fill="#EA4335" />
    </svg>
  );
}
