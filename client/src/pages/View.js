import React, { useEffect, useState, useRef, useContext } from "react";
import "../css/view.css";
import { NavLink, useParams } from "react-router-dom";
import Axios from "axios";
import "../css/editor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/rubyblue.css";
import Codemirror from "codemirror";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import { UserContext } from "../context/UserContext";
import { TbEdit } from "react-icons/tb";

export default function View() {
  
  const [details] = useContext(UserContext);
  const inputRef = useRef(null);
  const [user, setUser] = useState(false);
  const [title, setTitle] = useState("");
  const { id } = useParams();
  useEffect(() => {
    function init() {
      inputRef.current = Codemirror.fromTextArea(
        document.getElementById("txt"),
        {
          mode: { name: "javascript", json: true },
          theme: "rubyblue",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
          readOnly: true,
        }
      );
    }
    async function getCode() {
      const res = await Axios.get(`https://codify.cyclic.app/view/${id}`);
      setTitle(res.data.title);
      
        if (details.token === res.data.u_id || res.data.share) {
          inputRef.current.setValue(res.data.code);
          if (details.token === res.data.u_id) {
            setUser(true);
          }
        } else {
          inputRef.current.setValue("//You haven't permission to view it//");
          setTitle("No Permission ");
          setUser(false);
        }
      
    }
    getCode();
    init();
  }, []);
  return (
    <section>
        <section className="view_container">
          <div className="view">
            <div className="header">
              <div className="code_title_wrapper">
                <input
                  type="text"
                  className="code_title"
                  value={title}
                  name="title"
                  readOnly
                ></input>
              </div>
              {user && (
                <NavLink to={`/edit/${id}`}>
                  <div className="ico_wrap">
                    <TbEdit className="ico" />
                  </div>
                </NavLink>
              )}
            </div>
            <textarea className="view_area" id="txt" readOnly></textarea>
          </div>
        </section>
      
    </section>
  );
}
