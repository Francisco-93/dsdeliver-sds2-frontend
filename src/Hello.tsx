import { type } from "os";

type Props = {
     message:string;
}

function Hello({message}:Props){

    return(
        <h1>Olá {message}!</h1>
    )  
}

export default Hello;