import React, { useEffect } from "react";
import "../css/view.css";
import { NavLink } from "react-router-dom";
import "../css/editor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/rubyblue.css";
import Codemirror from "codemirror";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import { ImCross } from "react-icons/im";

export default function View() {
  useEffect(() => {
    function init() {
      Codemirror.fromTextArea(document.getElementById("txt"), {
        mode: { name: "javascript", json: true },
        theme: "rubyblue",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    }
    init();
  }, []);
  return (
    <section className="view_container">
        <div className="view">
      <div className="code_title_wrapper">
        <input
          type="text"
          className="code_title"
          placeholder="Enter Title"
          name="title"
        ></input>
      </div>
      <textarea className="view_area" id="txt"></textarea>
      </div>
    </section>
  );
}
