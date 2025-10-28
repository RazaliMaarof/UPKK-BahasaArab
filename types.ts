export type Section = 'A' | 'B' | 'C' | 'D';

export type Topic = 'Dialog & Ucapan' | 'Kosa Kata' | 'Nombor & Waktu' | 'Tatabahasa Lanjutan' | 'Pemahaman Teks';

export interface Question {
  id: number;
  section: Section;
  topic: Topic;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
  passage?: string;
}

export interface AnswerResult {
  question: Question;
  isCorrect: boolean;
}