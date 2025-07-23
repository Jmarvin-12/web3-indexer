import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'; // Import TypeORM decorators

// Marks this class as a database entity (table)
@Entity()
export class Event {
  // Auto-incrementing primary key column
  @PrimaryGeneratedColumn()
  id: number;

  // Block number associated with the event
  @Column()
  block: number;

  // Transaction hash for the event
  @Column()
  txHash: string;

  // Name of the event
  @Column()
  eventName: string;

  // Arguments for the event, stored as JSONB in PostgreSQL
  @Column('jsonb')
  args: Record<string, any>;
}
