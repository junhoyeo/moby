import { LogEntry } from './LogEntry';

// Ch. 3.2 p.13
export interface StateManager {
  start(): Promise<void>;
  // Persistent:
  getCurrentTerm(): Promise<number>;
  setCurrentTerm(term: number): Promise<void>;
  IncrementCurrentTerm(): Promise<void>;

  getVotedFor(): Promise<string>;
  setVotedFor(nodeId: string | null): Promise<void>;

  getLog(): Promise<LogEntry[]>;
  deleteFromIndexMovingForward(index: number): Promise<void>;
  appendEntries(logs: LogEntry[]): Promise<void>;
  getLogAtIndex(index: number): Promise<LogEntry>;
  getLastLogEntry(): Promise<LogEntry>;
  getLastIndex(): Promise<number>;

  // Volatile:
  getCommitIndex(): number;
  setCommitIndex(index: number): void;

  getLeaderId(): string | null;
  setLeaderId(leaderId: string): void;

  getLastApplied(): number;
  setLastApplied(index: number): void;

  // Volatile Leader :

  getNextIndexes(): Record<string, number>;
  getNextIndex(nodeId: string): number;
  setNextIndex(nodeId: string, value: number): void;

  getMatchIndex(nodeId: string): number;
  getMatchIndexes(): Record<string, number>;
  setMatchIndex(nodeId: string, value: number): void;

  // reinitialize, Ch.3 P13.
  // matchIndex to be 0, nextIndex to be last logIndex + 1;
  reset(): Promise<void>;
}
