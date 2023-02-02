import {kangaroo_team_profiles} from "./text.js";
import {tools} from "./text.js";
import {project_plan} from "./text.js";
import {skills_and_jobs} from "./text.js";
import {team_reflections} from "./text.js";
import {contacts} from "./text.js";



const pages = ["kangaroo_team_profiles","tools","project_plan","skills_and_jobs","team_reflections","contacts"]
const imports = [kangaroo_team_profiles,tools,project_plan,skills_and_jobs,team_reflections,contacts]

let element = document.getElementById("kangaroo_team_profiles");
element.classList.add("active")
document.getElementById("display_text").innerHTML = imports[0]





    window.onclick = e => {
    
        try{
        let element = document.getElementById(e.target.id).classList;
       // console.log(e.target.id)

        let index = 0
        while (index< pages.length){
           if (e.target.id == pages[index] && (e.target.id != "")){

        class_list() 
        element.add("active");
        contents(e.target.id)
        } index++
    
    }}
        catch(err){
        //   console.log("The Error is:"+ err)

        }

    }

    //Add page contents
    let contents =(target)=>{

        let index = 0
        
        while (index< pages.length){
            if (target===pages[index]){
                document.getElementById("display_text").innerHTML = imports[index]
                break
            }
        index ++
        
        }
    }
    
    //removes active page high lighted
    let class_list =()=>{
        const actives = document.querySelectorAll(".active");
    for (let i = 0; i< actives.length;i++){
        actives[i].classList.remove("active")
    }}

