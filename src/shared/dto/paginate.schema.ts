import z from "zod";
import { numberField, stringField } from "../schema/fields";

export const BasePaginateSchema = z.object({
  page: numberField().min(1, 'must be a positive integer'),
  lim: numberField().min(1, 'must be a positive integer'),
  search: stringField().optional(),
});


