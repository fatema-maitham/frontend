// Small spring physics helpers, based on Apple's "Designing Fluid Interfaces".
// Springs always continue from the current on-screen value and velocity,
// so any motion can be grabbed and redirected mid-flight.

// damping: 1 = no overshoot, below 1 = a little bounce
// response: roughly how quickly it settles, in seconds (not a fixed duration)
export class Spring {
  constructor(value, onUpdate) {
    this.value = value;
    this.velocity = 0;
    this.target = value;
    this.onUpdate = onUpdate;
    this.frame = null;
    this.last = 0;
  }

  to(target, { damping = 1, response = 0.4, velocity } = {}) {
    this.target = target;
    if (velocity !== undefined) this.velocity = velocity;
    this.stiffness = ((2 * Math.PI) / response) ** 2;
    this.friction = (4 * Math.PI * damping) / response;
    if (!this.frame) {
      this.last = performance.now();
      this.frame = requestAnimationFrame(this.tick);
    }
  }

  set(value) {
    this.stop();
    this.value = value;
    this.target = value;
    this.velocity = 0;
    this.onUpdate(value);
  }

  stop() {
    if (this.frame) cancelAnimationFrame(this.frame);
    this.frame = null;
  }

  tick = (now) => {
    const dt = Math.min((now - this.last) / 1000, 0.064);
    this.last = now;
    const steps = Math.max(1, Math.ceil(dt / 0.004));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) {
      const force =
        -this.stiffness * (this.value - this.target) - this.friction * this.velocity;
      this.velocity += force * h;
      this.value += this.velocity * h;
    }
    const settled =
      Math.abs(this.velocity) < 0.5 && Math.abs(this.value - this.target) < 0.1;
    if (settled) {
      this.value = this.target;
      this.velocity = 0;
      this.frame = null;
      this.onUpdate(this.value);
      return;
    }
    this.onUpdate(this.value);
    this.frame = requestAnimationFrame(this.tick);
  };
}

// Soft boundary: the further you pull, the more it resists.
const C = 0.55;
export function rubberband(offset, dimension) {
  const a = Math.abs(offset);
  return (Math.sign(offset) * (a * dimension * C)) / (dimension + C * a);
}

// Inverse of rubberband, so a grab mid-animation starts exactly where the element is.
export function unrubberband(shown, dimension) {
  const a = Math.min(Math.abs(shown), dimension * 0.99);
  return (Math.sign(shown) * (a * dimension)) / (C * (dimension - a));
}

// Tracks recent pointer positions to measure release velocity (px per second).
export function createVelocityTracker() {
  let samples = [];
  return {
    add(x, y) {
      const t = performance.now();
      samples.push({ t, x, y });
      samples = samples.filter((s) => t - s.t < 100);
    },
    velocity() {
      if (samples.length < 2) return { x: 0, y: 0 };
      const first = samples[0];
      const last = samples[samples.length - 1];
      const dt = (last.t - first.t) / 1000 || 1;
      return { x: (last.x - first.x) / dt, y: (last.y - first.y) / dt };
    },
    reset() {
      samples = [];
    },
  };
}
