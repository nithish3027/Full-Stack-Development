function addStudent() {
    var name = document.getElementById("StudentName").value;
    var list = document.getElementById("studentList");
    var nameList = document.createElement("li");
    nameList.innerText=name;
    list.append(nameList);


}
function removeStudent(){
    var list = document.getElementById("StudentList");
    list.lastElementChild.remove();

}