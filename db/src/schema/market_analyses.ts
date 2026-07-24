import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const marketAnalysesTable = pgTable("market_analyses", {
  id: serial("id").primaryKey(),
  region: text("region").notNull(),
  niche: text("niche").notNull(),
  verdict: text("verdict").notNull(),
  opportunityScore: integer("opportunity_score").notNull(),
  riskScore: integer("risk_score").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertMarketAnalysisSchema = createInsertSchema(marketAnalysesTable).omit({
  id: true,
  createdAt: true,
});

export type InsertMarketAnalysis = z.infer<typeof insertMarketAnalysisSchema>;
export type MarketAnalysis = typeof marketAnalysesTable.$inferSelect;
