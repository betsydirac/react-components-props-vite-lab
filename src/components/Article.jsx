function Article({title, date = "January 1, 1970", preview, minutes}) {
    let emoji = "";

    // Under 30 min: one cup per 5 min. 30+ min: one box per 10 min. Always round up.
    if (minutes < 30) {
        const cups = Math.ceil(minutes / 5);
        emoji = "☕".repeat(cups);
    } else {
        const boxes = Math.ceil(minutes / 10);
        emoji = "🍱".repeat(boxes);
    }
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <span>{emoji} {minutes} min read</span>
      <p>{preview}</p>
    </article>
  );
}
export default Article;