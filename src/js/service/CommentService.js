/**
 * @summary Sets the data inside a comment-elemnt component ad adds them to the DOM
 * @param {string} targetElement
 * @param {Array} dataList
 */
const GenerateCommentService = () => {
  const generate = (targetElement, dataList) => {
    const frag = document.createDocumentFragment();
    const targetParentELement = document.querySelector(`.${targetElement}`);
    dataList.forEach(element => {
      const comment = document.createElement("comment-element");
      comment.data = element;
      frag.appendChild(comment);
    });
    targetParentELement.appendChild(frag);
  };

  return {
    generate: generate
  };
};

export default GenerateCommentService();
