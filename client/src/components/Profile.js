import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import "../css/profile.css";
import { UserContext } from "../context/UserContext";
import { useNavigate, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "axios";
import Card from "./Card";
import Loader from "../pages/Loader";
import { MdAdd } from "react-icons/md";
export default function Profile() {
  const [details] = useContext(UserContext);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();
  useEffect(() => {
    if (!details.token) {
      toast.error("You need to login", {
        theme: "light",
      });
      navigate("/login");
    }

    const userCodes = async () => {
      setLoader(true);
      const res = await Axios.get(
        `https://codify.cyclic.app/get/${details.token}`
      );
      const codes = res.data;
      setData(codes);
      setLoader(false);
      console.log(codes);
    };
    userCodes();
  }, []);

  return (
    <section>
      {loader && <Loader />}

      {!loader && (
        <section className="profile_container">
          <div>
            <Nav />
            <h1>Your Codes</h1>
            <NavLink to="/editor">
            <div className="add">
              <MdAdd />
            </div>
          </NavLink>
          </div>

          <section className="card_wrapper">
            {!loader && data.length === 0 && (
              <div>
                <div className="loader">No Code Found</div>
              </div>
            )}

            {!loader &&
              data.map((codes) => (
                <NavLink to={`/view/${codes._id}`} id={codes._id}>
                  <Card title={codes.title} code={codes.code} id={codes._id} />
                </NavLink>
              ))}
          </section>

        </section>
      )}
    </section>
  );
}
