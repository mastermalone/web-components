class CommentComponent extends HTMLElement {
  constructor() {
    super();

    // You have to use root if you want this to work when iterating with a loop
    this.root = this.attachShadow({ mode: "open" });
  }
  set data(comment) {
    console.log("the comments", comment);
    this.root.innerHTML = `
    <link rel="stylesheet" href="/src/css/comment.css">
    <div class="comment-node">
      <img src="${comment.image}" alt="" />
      <span>${comment.comment}</span>
    </div>
    `;
  }
}

customElements.define("comment-element", CommentComponent);
