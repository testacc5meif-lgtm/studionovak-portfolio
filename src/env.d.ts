interface Window {
  /** Defined inline in Base.astro so the theme is applied before first paint. */
  __setTheme: (theme: 'light' | 'dark') => void;
}
