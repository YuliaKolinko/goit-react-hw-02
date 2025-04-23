import styles from "./Description.module.css";
export default function Description() {
  return (
    <div className="container">
      <h1 className="title">
        <span className="title_span">Sip</span> Happens Café
      </h1>
      <p className="text">
        Please leave your feedback <span className="text_span">about</span> our
        service by selecting one <span className="text_span">of the</span>
        options <span className="text_span">below</span>.
      </p>
    </div>
  );
}
