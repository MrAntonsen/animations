import React, { Component } from 'react'
import './ListAnimation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
interface Person{
    Id: number
    Name: string;
    Kg: string;
    Phone: string;
}
interface IListState{
    PersonList: Person[];
}
interface IListProps{

}
export default class ListAnimation extends Component<IListProps, IListState> {
  constructor (props: any) {
    super(props)
    this.state = {
        PersonList: [
            {Id: 1, Name: "Morgan", Kg: "90", Phone: "95813376"},
            {Id: 2, Name: "Robin", Kg: "60", Phone: "41652682"},
            {Id: 3, Name: "Rosmo", Kg: "110", Phone: "91652348"},
            {Id: 4, Name: "Ove", Kg: "110", Phone: "48181073"},
            {Id: 5, Name: "Borge", Kg: "100", Phone: "96828428"}
        ]
    }
  }
  // Methods:
  removeListElement = (id: string, personId: number) =>{
    let element = document.getElementById(id);
    console.log(element);
    if(element){
      element.classList.add("deleteFadeAwayClass");
      let tempArr = this.state.PersonList;
      let foundIndex = tempArr.findIndex((person) =>{
        return person.Id === personId
      })
      if(foundIndex){
        if(foundIndex >= 0 && foundIndex <= tempArr.length){
          for(let y = 1, x = tempArr.length ; y <= x; y++)
          {
            console.log(y, foundIndex)
            if(y - 1 < foundIndex){
              let foundElem = document.getElementById(`${y}-person`)
              console.log(foundElem, "less")
              foundElem?.classList.add("listElemGoDownClass")
              setTimeout(() =>{
                foundElem?.classList.remove("listElemGoDownClass")
              }, 1000)
            }else if(y - 1 > foundIndex){
              let foundElem = document.getElementById(`${y}-person`)
              foundElem?.classList.add("listElemGoUpClass")
              console.log(foundElem, "more")
              setTimeout(() =>{
                foundElem?.classList.remove("listElemGoUpClass")
              }, 1000)
            }
          }
          element.removeAttribute('id');
        }
      }
      tempArr.splice(foundIndex, 1);
      setTimeout(() =>{
        this.setState({
          PersonList: tempArr
        })
      }, 1000)
    }
  }
  reset = () =>{
    this.setState({
      PersonList:  [
        {Id: 1, Name: "Morgan", Kg: "90", Phone: "95813376"},
        {Id: 2, Name: "Robin", Kg: "60", Phone: "41652682"},
        {Id: 3, Name: "Rosmo", Kg: "110", Phone: "91652348"},
        {Id: 4, Name: "Ove", Kg: "110", Phone: "48181073"},
        {Id: 5, Name: "Borge", Kg: "100", Phone: "96828428"}
        ]
    })
  }
  render () {
    return (
      <div className='list-anim-container'>
        <section>
          <h1>ListeAnimasjon</h1>
          <article>
            <ul className="list-anim-list">
                {this.state.PersonList.map((person, i )=>{
                    return <li key={`${person.Id}-person`} className="list-anim-list-element" id={`${person.Id}-person`}>
                        <span className="list-anim-text"><b>Name: </b>{person.Name}, <b>Kg: </b>{person.Kg}<b>Phone:</b>{person.Phone} | <span><FontAwesomeIcon icon={faTimesCircle} color="red" className="List-fontawesome-X" onClick={() =>{this.removeListElement(`${person.Id}-person`, person.Id)}}/></span></span>
                    </li>
                })}
            </ul>
          </article>
        </section>
        <section>
          <button onClick={() =>{this.reset()}}>RESET</button>
        </section>
      </div>
    )
  }
}
