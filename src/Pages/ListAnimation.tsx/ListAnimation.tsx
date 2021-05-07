import React, { Component, Dispatch, SetStateAction } from "react";
import "./ListAnimation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { listenerCount } from "process";
interface Person {
  Id: number;
  Name: string;
  Kg: string;
  Phone: string;
}
interface IListState {
  PersonList: Person[];
  listCount: number;
}
interface IListProps {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}
export default class ListAnimation extends Component<IListProps, IListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      PersonList: [
        { Id: 0, Name: "Morgan", Kg: "90", Phone: "95813376" },
        { Id: 1, Name: "Robin", Kg: "60", Phone: "41652682" },
        { Id: 2, Name: "Rosmo", Kg: "110", Phone: "91652348" },
        { Id: 3, Name: "Ove", Kg: "110", Phone: "48181073" },
        { Id: 4, Name: "Borge", Kg: "100", Phone: "96828428" },
      ],
      listCount: 5,
    };
  }
  // Methods:
  removeListElement = (id: string, index: number) => {
    console.log(id, index)
    const {PersonList} = this.state; 
    let element = document.getElementById(id);
    if (element) {
      // console.log(element, "ELEMENT TO FADE AWAY")
      element.classList.add("deleteFadeAwayClass");
      let tempArr = this.state.PersonList;
      let foundIndex = tempArr.findIndex((person) => {
        return person.Id === index;
      });
      // console.log(foundIndex, "FOUND INDEX")
      if (foundIndex || foundIndex == 0) {
        if (foundIndex >= 0 && foundIndex <= tempArr.length) {
          for (let y = 0, x = PersonList.length - 1; y <= x; y++) {
            if (y < foundIndex) {
              let foundElem = document.getElementById(`${y}-person`);
              foundElem?.classList.add("listElemGoDownClass");
              setTimeout(() => {
                foundElem?.classList.remove("listElemGoDownClass");
                foundElem?.classList.remove("deleteFadeAwayClass");
              }, 1000);
            }else if (y > foundIndex) {
              console.log("kom sæ hit", "y:", y, " foundIndex: ", foundIndex)
              let foundElem = document.getElementById(`${y}-person`);
              foundElem?.classList.add("listElemGoUpClass");
              setTimeout(() => {
                foundElem?.classList.remove("listElemGoUpClass");
                foundElem?.classList.remove("deleteFadeAwayClass");
              }, 1000);
            }
          }
        }
      }
        tempArr.splice(foundIndex, 1);
        for(let i = 0, y = tempArr.length - 1; i <= y; i++){
          tempArr[i].Id = i;
        }
      setTimeout(() => {
        if(element){
          element?.classList.remove("deleteFadeAwayClass");
        }
        this.setState({
          PersonList: tempArr
        });
      }, 1000);
    }
  };
  reset = () => {
    this.setState({
      PersonList: [
        { Id: 0, Name: "Morgan", Kg: "90", Phone: "95813376" },
        { Id: 1, Name: "Robin", Kg: "60", Phone: "41652682" },
        { Id: 2, Name: "Rosmo", Kg: "110", Phone: "91652348" },
        { Id: 3, Name: "Ove", Kg: "110", Phone: "48181073" },
        { Id: 4, Name: "Borge", Kg: "100", Phone: "96828428" },
      ],
    });
  };
  render() {
    return (
      <div className="list-anim-container">
        <section>
          <h1>ListeAnimasjon {this.props.duration}</h1>
          <article>
            <ul className="list-anim-list">
              {this.state.PersonList.map((person, i) => {
                return (
                  <li
                    key={`${i}-person`}
                    className="list-anim-list-element"
                    id={`${i}-person`}
                  >
                    <span className="list-anim-text">
                      <b>Name: </b>
                      {person.Name}, <b>Kg: </b>
                      {person.Kg}
                      <b>Phone:</b>
                      {person.Phone} |{" "}
                      <span>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          color="red"
                          className="List-fontawesome-X"
                          onClick={() => {
                            this.removeListElement(
                              `${i}-person`,
                              i
                            );
                          }}
                        />
                      </span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
        <section>
          <button
            onClick={() => {
              this.reset();
            }}
          >
            RESET
          </button>
        </section>
      </div>
    );
  }
}
