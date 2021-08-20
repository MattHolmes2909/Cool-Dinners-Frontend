import React, { useState, useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import "../styles/EditChildren.css";

const EditChildren = () => {
  const user = useContext(AuthContext);

  const [children, setChildren] = useState([]);

  const [schoolClass, setSchoolClass] = useState("");

  useEffect(() => {
    async function fetchChild() {
      if (schoolClass !== "all") {
        await axios
          .get(`https://cool-dinners.herokuapp.com/child/class/${schoolClass}`)
          .then(response => {
            console.log(response.data);
            setChildren(response.data);
          })
          .catch(err => console.error(err));
      } else {
        await axios
          .get(`https://cool-dinners.herokuapp.com/child`)
          .then(response => {
            console.log(response.data);
            setChildren(response.data);
          })
          .catch(err => console.error(err));
      }
    }
    return fetchChild();
  }, [schoolClass]);

  const handleSchoolClass = async event => {
    event.preventDefault();
    setSchoolClass(event.target.value);
  };

  const handleDelete = async event => {
    event.preventDefault();
    await axios
      .delete(`https://cool-dinners.herokuapp.com/child/${event.target.id}`)
      .then(response => {
        console.log(response.data);
        console.log("Child deleted!");
      })
      .catch(err => console.error(err));
    if (schoolClass !== "all") {
      await axios
        .get(`https://cool-dinners.herokuapp.com/child/class/${schoolClass}`)
        .then(response => {
          setChildren(response.data);
        });
    } else {
      await axios
        .get(`https://cool-dinners.herokuapp.com/child`)
        .then(response => {
          setChildren(response.data);
        });
    }
  };

  return (
    <div className="EditChildren">
      {user.currentUser.userType === "admin" && (
        <>
          <p>Please select a class:</p>
          <button
            type="submit"
            className="all-classes-button class-button"
            value="all"
            onClick={handleSchoolClass}
          >
            All
          </button>
          <button
            type="submit"
            className="1DS-button class-button"
            value="1DS"
            onClick={handleSchoolClass}
          >
            1DS
          </button>
          <button
            type="submit"
            className="1MH-button class-button"
            value="1MH"
            onClick={handleSchoolClass}
          >
            1MH
          </button>
          <button
            type="submit"
            className="2AW-button class-button"
            value="2AW"
            onClick={handleSchoolClass}
          >
            2AW
          </button>
          <button
            type="submit"
            className="2NM-button class-button"
            value="2NM"
            onClick={handleSchoolClass}
          >
            2NM
          </button>
          {schoolClass !== "" && (
            <table className="table table-responsive">
              <thead>
                <tr className="childrenHead">
                  <th className="childName" name="childName">
                    Name
                  </th>
                  <th className="childSchoolClass" name="schoolClass">
                    School Class
                  </th>
                  <th className="childAllergies" name="allergies">
                    Allergies
                  </th>
                  <th className="deleteChild" name="deleteChild">
                    Delete Child
                  </th>
                </tr>
              </thead>
              <tbody>
                {children.map((Child, index) => (
                  <tr className="childEditRow" key={Child.id}>
                    <td>
                      <label htmlFor="childName">{Child.childName}</label>
                    </td>
                    <td>
                      <label htmlFor="schoolClass">{Child.schoolClass}</label>
                    </td>
                    <td>
                      <label htmlFor="childAllergies">{Child.allergies}</label>
                    </td>
                    <td>
                      <button
                        type="submit"
                        className="delete-button"
                        id={Child.id}
                        onClick={handleDelete}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
};

export default EditChildren;
