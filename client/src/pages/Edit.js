import React, { useEffect, useState, useRef, useContext } from "react";
import "../css/edit.css";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../components/Nav";
import Axios from "axios";
import "../css/editor.css";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/rubyblue.css";
import Codemirror from "codemirror";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";
import { UserContext } from "../context/UserContext";

export default function Edit() {
  const navigate = useNavigate();
  const [details] = useContext(UserContext);
  const inputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [sharable, setSharable] = useState(false);
  const [link, setLink] = useState("http://localhost:3000/editor");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
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
        }
      );

      //textarea value on change

      inputRef.current.on("change", (instance, changes) => {
        const code = instance.getValue("\n");
        setDescription(code);
      });
    }
    async function getCode() {
      const res = await Axios.get(`http://localhost:8000/view/${id}`);
      setTitle(res.data.title);
      setLink(`http://localhost:3000/view/${id}`)
      if (details.token === res.data.u_id) {
        inputRef.current.setValue(res.data.code);
      } else {
        navigate("/login");
        inputRef.current.setValue("//You haven't permission to edit it//");
        setTitle("No Permission");
      }
    }
    getCode();
    init();
  }, []);

  const share = () => {
    if (sharable === true) {
      setSharable(false);
    } else {
      setSharable(true);
    }
    console.log(sharable)
  };

  const update = async () => {
    await Axios.patch(`http://localhost:8000/update/${id}`, {
      title: title,
      code: description,
      share: sharable,
    });
    toast.success("Successfully Updated", {
      theme: "light",
    });
    navigate(`/${details.user}`);
  };

  return (
    <section className="edit_container">
      <Nav />
      <div className="edit">
        <div className="code_title_wrapper">
          <input
            type="text"
            className="code_title"
            value={title}
            onChange={handleChange}
            name="title"
          ></input>
        </div>
        <section className="edit_section">
          <textarea className="edit_area" id="txt"></textarea>
          <div className="side_section">
            <div className="btn_contain">
              <div>
                <h5>Share</h5>
              </div>
              <div className="containerr">
                <label className="switch">
                  <input type="checkbox" onClick={share} /> <div></div>
                </label>
              </div>
            </div>
            {sharable && (
              <div className="share-container">
                <p>
                  {link.substring(0, 20)} {link.length > 15 && "..."}
                </p>
              </div>
            )}
            <button className="save" onClick={update}>
              Update
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}
