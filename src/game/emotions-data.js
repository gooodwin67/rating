// --- ПАРАМЕТРЫ (БАЗОВЫЕ / НЕЙТРАЛЬНЫЕ) ---
export const EMOTIONS_DEFAULT = {
 bodyRotate: 0,
 color: '#8EE4AF',

 eyesBack: {
  x: [-0.4, 0.4],
  y: [1.2, 1.2],
  scaleX: [1, 1],
  scaleY: [1, 1],
 },

 eyes: {
  x: [-0.4, 0.4],
  y: [1.2, 1.2],
  scaleX: [1, 1],
  scaleY: [1, 1],
 },
 brows: {
  x: [-0.4, 0.4],
  y: [1.6, 1.6],
  scaleX: [1, 1],
  scaleY: [1, 1],
  rotation: [0, 0]
 },
 cheeks: {
  x: [-0.50, 0.50],
  y: [0.8, 0.8],
  scaleX: [1, 1],
  scaleY: [2, 2],
  opacity: [0.4, 0.4]
 },

 // --- РОТ ---
 mouth: {
  // Трансформации (Relative offsets)
  x: 0,
  y: 0.6,
  scaleX: 0.495,
  scaleY: -0.543,
  rotationX: 0,
  rotationY: -0.138,
  rotationZ: -1.41,

  // Геометрия (Absolute values)
  radiusTop: 0,
  radiusBottom: 0.084,
  height: 0.01,
  radialSegments: 12,
  heightSegments: 1,
  openEnded: false,
  thetaStart: 0,
  thetaLength: 2.9,
 }

};

export const EMOTIONS_DATA = {
 emotionsIdle1: {
  idle1: {
   bodyRotate: -0.12,
   eyes: { x: [-0.12, -0.12] },
   mouth: { scaleX: 0.05, scaleY: 0.02 }
  },
  idle2: {
   bodyRotate: 0.12,
   eyes: { x: [0.12, 0.12] },
   mouth: { scaleX: 0.05, scaleY: 0.02 }
  },
  idle3: {
   bodyRotate: 0,
   mouth: { scaleX: 0.05, scaleY: 0.02 }
  },
 },

 emotionsIdle2: {
  idle1: {
   bodyRotate: -0.22,
   mouth: { scaleX: 0.15, scaleY: 0.02 }
  },
  idle2: {
   bodyRotate: 0.22,
   mouth: { scaleX: 0.15, scaleY: 0.02 }
  },
  idle3: {
   bodyRotate: 0,
   mouth: { scaleX: 0.05, scaleY: 0.02 }
  },
 },

 emotionsIdle3: {
  idle1: {
   bodyRotate: -0.32,
   mouth: { scaleX: 0.15, scaleY: 0.02 }
  },
  idle2: {
   bodyRotate: 0.32,
   mouth: { scaleX: 0.15, scaleY: 0.02 }
  },
  idle3: {
   bodyRotate: 0,
   mouth: { scaleX: 0.05, scaleY: 0.02 }
  },
 },

 emotionsIdle4: {
  idle1: {
   bodyRotate: -0.42,
   mouth: { scaleX: 0.15, scaleY: 0.02 }
  },
  idle2: {
   bodyRotate: 0.42,
   mouth: { scaleX: 0.15, scaleY: 0.02 }
  },
  idle3: {
   bodyRotate: 0,
   mouth: { scaleX: 0.05, scaleY: 0.02 }
  },
 },

 emotionsLeft: {
  eyes: { x: [+0.12, +0.12] },
 },
 emotionsRight: {
  eyes: { x: [-0.12, -0.12] },
 },
 emotionsTop: {
  eyes: { y: [0.12, 0.12] },
 },
 emotionsBottom: {
  eyes: { y: [-0.12, -0.12] },
 },

}



