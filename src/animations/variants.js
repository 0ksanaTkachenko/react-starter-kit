export const animations = {
  // ===== FADE EFFECTS =====
  fade: {
    in: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    up: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    down: {
      hidden: { opacity: 0, y: -20 },
      visible: { opacity: 1, y: 0 },
    },
  },

  // ===== SLIDE EFFECTS =====
  slide: {
    left: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
  },

  // ===== HOVER EFFECTS =====
  hover: {
    scale: {
      whileHover: {
        scale: 1.05,
        transition: { duration: 0.3 },
      },
    },
    shadow: {
      whileHover: {
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        transition: { duration: 0.3 },
      },
    },
    scaleShadow: {
      whileHover: {
        scale: 1.05,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        transition: { duration: 0.3 },
      },
    },
  },
};
