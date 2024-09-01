let students = ["wahab","masooma","areeba","bakhtawar","hussain","ashba",
    "maimoona","tooba","faryal","mutahira","noor","Momo"]


let houses =[]

    for (const student of students) {
        if(student.length<6){
         houses.push("castle")
        }
        else if(student.length<8){
            houses.push("slytherin")
        }
        else if (student.length<12){
            houses.push("haunted House")
        }
        else{
            houses.push("you are out")
        }
        
    }
console.log(houses)