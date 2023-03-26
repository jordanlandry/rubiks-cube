// This is so I can very easily write in new algorithms

import { Turn } from "../../properties";

export const u = () => [{ move: "u" as Turn, inverted: false }];
export const u2 = () => [{ move: "u" as Turn, inverted: false }, { move: "u", inverted: false }];
export const up = () => [{ move: "u" as Turn, inverted: true }];

export const r = () => [{ move: "r" as Turn, inverted: false }];
export const r2 = () => [{ move: "r" as Turn, inverted: false }, { move: "r", inverted: false }];
export const rp = () => [{ move: "r" as Turn, inverted: true }];

export const f = () => [{ move: "f" as Turn, inverted: false }];
export const f2 = () => [{ move: "f" as Turn, inverted: false }, { move: "f", inverted: false }];
export const fp = () => [{ move: "f" as Turn, inverted: true }];

export const d = () => [{ move: "d" as Turn, inverted: false }];
export const d2 = () => [{ move: "d" as Turn, inverted: false }, { move: "d", inverted: false }];
export const dp = () => [{ move: "d" as Turn, inverted: true }];

export const l = () => [{ move: "l" as Turn, inverted: false }];
export const l2 = () => [{ move: "l" as Turn, inverted: false }, { move: "l", inverted: false }];
export const lp = () => [{ move: "l" as Turn, inverted: true }];

export const b = () => [{ move: "b" as Turn, inverted: false }];
export const b2 = () => [{ move: "b" as Turn, inverted: false }, { move: "b", inverted: false }];
export const bp = () => [{ move: "b" as Turn, inverted: true }];

export const m = () => [{ move: "m" as Turn, inverted: false }];
export const m2 = () => [{ move: "m" as Turn, inverted: false }, { move: "m", inverted: false }];
export const mp = () => [{ move: "m" as Turn, inverted: true }];

export const rw = () => [...r(), ...mp()];
export const rw2 = () => [...r2(), ...m2()];
export const rwp = () => [...rp(), ...m()];

export const lw = () => [...l(), ...m()];
export const lw2 = () => [...l2(), ...m2()];
export const lwp = () => [...lp(), ...mp()];



