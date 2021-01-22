/* 
const Languages = ['English', 'Spanish', 'Hausa','French','Arabic','Filipino']

const [state, initial] = useStateValue(Languages)

/* const selectlan = e =>{
    e.prevendefaults 
}
Selectlan = ({language})=>{
    <p>select the following in {this.state.Languages}</p>
    return (
        <div></div>
    )

} */
/* const LanguagesList = ({Languages}) => {
    <ul>
  <p>select the following in {this.state.languages}</p>
    return <p> you selected {languages.map(language => <Language language={this.setState{
        language: e
    
    } />)}<</p>
    <ul>
{languages.map(language => <Language language={language} />)}
</ul>
    return (
        <div></div>
    )
 />)}
    </ul>
} */
 
class Form extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state= {
            name: 'stanley',
            occupation: 'developer'
        }
    }
    onchange (e){
        this.Setstate({
            occupation, name: e.target.value


        })
    }
    render() {
        return (
        <div>
        <label for='name-input'>Name: </label>
        <input
        id='name-input'
        onChange={this.onChange}
        defaultValue={this.state.name} />
        <label for='name-input'>Name: </label>
        <input
            id='occu-input'
            onChange={this.onChange}
            defaultValue={this.state.occupation} />
        </div>
        )
        }
}
import React from "react";
export function requireAuthentication(Component) {
return class AuthenticatedComponent extends React.Component {
/**
* Check if the user is authenticated, this.props.isAuthenticated
* has to be set from your application logic (or use react-redux to retrieve it from
global state).
*/
isAuthenticated() {
return this.props.isAuthenticated;
}
/**
* Render
*/
render() {
const loginErrorMessage = (
<div>
Please <a href="/login">login</a> in order to view this part of the
application.
</div>
);
return (
<div>
{ this.isAuthenticated === true ? <Component {...this.props} /> :
loginErrorMessage }
</div>
);
}
};
}
export default requireAuthentication;