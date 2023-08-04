/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = "Git is the home or 'storage cabinet' for all your code folders or repositories."

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "GitHub is the access point for all your saved and stored repositories. It saves your data in a cloud accessible from any computer."

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

const init = {
    description: "Creates local repository in selected folder",
    code: "git init"
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

const clone = {
    description: "Creates a copy of a specific repository or branch inside a repository",
    code: "git clone [url]" // Other commands include:
    // "git clone --mirror" = Clones a repo but without the ability to edit any of the files.
    // "git clone --single-branch" = Clones a single branch within repo.
    // "git clone --sparse" = Only populates the files in the root directory. Good when cloning large repos with many directories and sub-directories.
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

const status = {
    description: "displays the status of the working directory. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.",
    code: "git status"
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

const add = {
    description: "tells Git that you want to include updates to a certain file in the next commit",
    code: "git add" //"git add ." will add any new updates to commit
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    description: "this is like a snapshot of your repo. It takes all the data in your repo and saves it at a specific time",
    code: 'git commit -m "(message goes here)"'
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

const addRemote = {
    description: "adds a remote URL to your repo that allows you to link and access it in GitHub or on a different server.", //remote URL is Git's way of saying "the place where your code is stored"
    code: "git remote add origin" //Git associates a remote URL with a name, and your default remote is usually called origin. You can use the command "git remote set-url" to change a remotes URL.
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

const push = {
    description: "used to upload the content from your local to your remote repo by transferring commits",
    code: "git push"
}
