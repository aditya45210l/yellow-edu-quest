import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const progress = sqliteTable('progress', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id').notNull(),
  courseSlug: text('course_slug').notNull(),
  unitId: text('unit_id').notNull(),
  completed: integer('completed', { mode: 'boolean' }).notNull().default(false),
  completedAt: text('completed_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});

export const rewards = sqliteTable('rewards', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  userId: text('user_id').notNull(),
  unitId: text('unit_id').notNull(),
  amount: real('amount').notNull(),
  claimed: integer('claimed', { mode: 'boolean' }).notNull().default(false),
  claimedAt: text('claimed_at'),
  createdAt: text('created_at').notNull(),
  updatedAt: text('updated_at').notNull(),
});