import clap from "./images/clap.svg";
import clap1 from "./images/clap1.svg"; 

export default function Blog({author,date,readtime}) {
    
    return(
        <div className="flex flex-row justify-center">
            {author} updated On {date}  minutes to read {readtime}
        </div>
    )
}