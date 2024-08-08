function Profil(){
const Person= {
    name: "Skander",
    email: "skander@gmail.com",
    password: "hello123"
}
    return(
        <h1 style={{color:"blue"}}  className="titre">
{`${Person.name}     ${Person.email}`}

      </h1>
    )
}

export default Profil;