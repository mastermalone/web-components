import FetchService from "./service/fetchService.js";
import "./CommentComponent.js";
import CommentService from "./service/CommentService.js";

/**
 * Initilizes the program to fetch the data for the comments
 */
const onload = () => {
  const body = document.querySelector("body");
  console.log("HELLO", body);
  body.addEventListener("load", getData, true);
};

/**
 * @summary Calls the FetchService to obtain the data. (Must use a local server or VS Code Go Live plugin)
 * @param {event} evt
 */
const getData = async evt => {
  console.log("It works");
  const commentsData = await FetchService.get("json/discussions.json");
  const sideCommentsData = await FetchService.get("json/sideSection.json");
  const comments = commentsData.data;
  const sideComments = sideCommentsData.data;
  console.log("comments", comments);

  CommentService.generate("comments", comments);
  CommentService.generate("side-content", sideComments);
};

onload();
