let btnView= document.getElementById("btnView")
let noDesc = "-"
let noUrl = "#"

function showMeData(){
    let txtUser= document.getElementById("txtUser").value
    let txtP = document.getElementById("txtP")


    const api_url = 'https://api.github.com/users/'+txtUser
    getUser()
    async function getUser(){
        const response = await fetch(api_url)
        const data = await response.json()
        userName= data.login
        if(data.login== undefined){
            alert("The username does not exist or is misspelled, please check the username")
        }else{
            txtP.innerHTML =
            `<div id='theData'>
                <div id='userHead'>
                    <img id='userAvatar' src='${data.avatar_url}' alt='${data.login}'s avatar'><br>
                    <h2 id='userTitle'>${data.login}</h2>
                    
                </div>
                <div id="tableDesk">
                    <table border=1>
                        <tr>
                            <td class='tTitle'>ID</td>
                            <td>${data.id}</td>
                            <td class='tTitle'>Name</td>
                            <td>${data.name}</td>
                        </tr>
                        <tr>
                            <td class='tTitle'>Followers</td>
                            <td>${data.followers}</td>
                            <td class='tTitle'>Following</td>
                            <td>${data.following}</td>
                        </tr>
                        <tr>
                            <td class='tTitle'>Public Repositories</td>
                            <td>${data.public_repos}</td>
                            <td class='tTitle'>Site</td>
                            <td><a href='${data.blog}' target="_black">Click here</a></td>
                        </tr>
                        <tr>
                            <td colspan='4'>Location: <br>${data.location}</td>
                        </tr>
                        <tr>
                            <td colspan='4'>Bio:<br>${data.bio}</td>
                        </tr>
                        <tr>
                            <td colspan='4' class='tTitle'><a href='${data.html_url}' target='_blank'>Github Url</a></td> 
                        </tr>
                        <tr>
                            <td colspan='4'>Profile created: ${data.created_at}</td>
                        </tr>
                        <tr>
                            <td colspan='4'>Last update: ${data.updated_at}</td>
                        </tr>
                    </table>
                </div>
                <div id="tableMobile">
                    <table border=1>
                        <tr>
                            <td>ID: ${data.id}</td>
                            <td>Name: ${data.name}</td>
                            <td>Followers: ${data.followers}</td>
                            <td>Following: ${data.following}</td>
                            <td>Public Repositories: ${data.public_repos}</td>
                            <td>Site: <a href='${data.blog}' target="_black"> Click here</a></td>
                            <td>Location:${data.location}</td>
                            <td>Bio: ${data.bio}</td>
                            <td><a href='${data.html_url}' target='_blank'>Github Url</a></td> 
                            <td>Profile created: ${data.created_at}</td>
                            <td>Last update: ${data.updated_at}</td>
                        </tr>
                    </table>
                </div>
                

            </div>
            `
        }     
    }
}