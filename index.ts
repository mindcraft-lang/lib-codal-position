import { NumberType, type StructOf, StructType } from "mindcraft";

/**
 * A two-axis position value.
 *
 * As a `StructType` it is a first-class tile type: a tile may declare it as a
 * `returnType` and take it as a typed argument, `accessors: true` derives the
 * `[x]` / `[y]` read tiles, and `variables: true` offers a "create variable of
 * type position" factory tile.
 */
export const Position = StructType({
  name: "position",
  fields: { x: NumberType, y: NumberType },
  accessors: true,
  variables: true,
});

/** A position value: `{ x, y }` */
export type Position = StructOf<typeof Position>;
