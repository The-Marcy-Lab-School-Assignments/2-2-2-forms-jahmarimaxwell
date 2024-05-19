/** GENERAL FEEDBACK:
 *
 */
// writing notes as this portion of the assignment was a bit tricky,
// didn't finish the event assignment, learning a lot more now
const form = document.querySelector("#new-user-form");

const handleSubmit = (event) => {
    event.preventDefault();
};
// understanding preventing default behavior
form.addEventListener("submit", handleSubmit)

form.addEventListener("submit", (e) => {
    // turns data entered in for into object upon submission
    const formResults = Object.fromEntries(new FormData(e.target).entries());
    // results shown in console
    console.log(formResults);
    // grabbing the result portion of each input value and
    // assign them to object value (form value essentially)
    let usernameFormResult = document.getElementById("results-username");
    usernameFormResult.textContent = formResults.username;
    let codingLevelFormResult = document.getElementById("results-coding-level");
    codingLevelFormResult.textContent = formResults.codingLevel;
    let LocationResult = document.getElementById("results-location");
    LocationResult.textContent = formResults.location;
    let CheckboxResult = document.getElementById("results-did-like-assignment");
    console.log(formResults.didLikeAssignment);
    // checking if form default value is 'on'
    if (formResults.didLikeAssignment === "on")
        CheckboxResult.textContent = "Yes";
    else
        CheckboxResult.textContent = "No"
    form.reset();
})
