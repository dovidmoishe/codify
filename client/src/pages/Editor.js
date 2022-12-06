import React, { useEffect, useState, useRef, useContext } from "react";
import { UserContext } from "../context/UserContext";
import Nav from "../components/Nav";
import { toast } from "react-toastify";
import Axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
//codemirror import
import "../css/editor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/rubyblue.css";
import Codemirror from "codemirror";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

//icon import
import { ImCross } from "react-icons/im";
export default function Editor() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [details] = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sharable, setSharable] = useState(false);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    function init() {
      inputRef.current = Codemirror.fromTextArea(
        document.getElementById("editor"),
        {
          mode: { name: "javascript", json: true },
          theme: "rubyblue",
          autoCloseTags: true,
          autoCloseBrackets: true,
          lineNumbers: true,
        }
      );
      inputRef.current.on("change", (instance, changes) => {
        const code = instance.getValue("\n");
        setDescription(code);
      });
    }
    init();
  }, []);

  const share=()=>{
    setSharable(true)
  }
  const Submit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("Fill title and code", {
        theme: "light",
      });
      return;
    }
    try {
      const res = await Axios.post("http://localhost:8000/postcode", {
        u_id: details.token,
        title: title,
        code: description,
        share: sharable,
      });
      if (res.status === 200) {
        toast.success("Successfully Saved", {
          theme: "light",
        });
        navigate(`/${details.user}`);
        console.log(sharable);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="editor_container">
      <Nav />
      <div className="code_title_wrapper">
        <input
          type="text"
          className="code_title"
          placeholder="Enter Title"
          name="title"
          value={title}
          onChange={handleChange}
        ></input>
        <h2 className="cross">
          <NavLink to="/login" className="cross_btn">
            <ImCross />
          </NavLink>
        </h2>
      </div>
      <section className="editor_section">
        <input type="text" value={description} id="editor"></input>

        <div className="side_section">
          <div className="btn_contain">
            <div><h5>Sharable</h5></div>
            <div className="containerr">
              <label className="switch">
                <input type="checkbox" onClick={share}/> <div></div>
              </label>
            </div>
          </div>
          <button className="save" onClick={Submit}>
            Save
          </button>
        </div>
      </section>
    </section>
  );
}
