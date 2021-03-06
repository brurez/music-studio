import { NOTE_FREQUENCIES } from "../constants";

export type Pitch =
  | "A"
  | "Bb"
  | "B"
  | "C"
  | "Db"
  | "D"
  | "Eb"
  | "E"
  | "F"
  | "Gb"
  | "G"
  | "Ab";

export type Octave = 0 | 1 | 2 | 3 | 4 | 5 | 6;

class Note {
  public pitch: string = "C";
  public octave: number = 3;
  public velocity: number = 128;

  constructor(pitch?: string, octave?: number) {
    if (pitch) { this.pitch = pitch; }
    if (octave) { this.octave = octave; }
  }

  get name(): string {
    return `${this.pitch}${this.octave}`;
  }

  get frequency(): number {
    const base = NOTE_FREQUENCIES[this.pitch];
    return base * (1 / Math.pow(2, 3 - this.octave));
  }
}

export default Note;
