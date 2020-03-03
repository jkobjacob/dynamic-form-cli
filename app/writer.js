/* 
** Writes the responses to a JSON file named "responses.json" in the root directory
** Logs the responses to the User
*/


module.exports = (userResponses) => {
    require('fs').writeFile('./responses.json',JSON.stringify(userResponses),(err) => {
        if(err) {
            console.log(err);
        } else {
            console.info("your responses are \n",userResponses);
        }
    })
}