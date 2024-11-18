export interface Sentence {
  id: string;
  sentence: string;
}

export type SentenceProps = Sentence; // Le type des props du composant Sentence est le meme que le type d'une Sentence

export default function SentenceArticle({ id, sentence }: SentenceProps) {
  return (
    <article className={`sentence ${id}`}>
      <p>{sentence}</p>
    </article>
  );
}
