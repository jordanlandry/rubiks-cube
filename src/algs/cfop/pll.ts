import { b, d, dp, f, fp, r, r2, rp, u, u2, up } from "../../helpers/getMoves";

// The letters are actually functions, I just didn't want to write the parentheses
// As I will need to be writing these a lot, I want to make it as easy as possible
// I have an interpreter function that will call each of these functions and return the moves (See helpers/interpretMoves.ts)

// This is just to make it as easy as possible to write in new algorithms

export const tperm = [r, u, rp, up, rp, f, r2, up, rp, up, r, u, rp, fp];
export const jperm = [r, u, rp, fp, r, u, rp, up, rp, f, r2, up, rp, up];

export const testPerm = [u2, r2];
