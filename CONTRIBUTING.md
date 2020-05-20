# Git

First question, are you mad? This is a PoC. 
Second thing, thanks very much for considering contributing - that's very nice of you. 
Third thing, I'm a big fan of the commandment "Don't be a dick". So you know, don't. 

Here's how things work;

## Branches
The project use 2 main branches:
1. master
2. stage

All feature branches should be branched off the `stage` branch.

**Branch names**

Branch names should include the issue ID (e.g. issue-1234) and a prefix of the milestone it's been worked under. 

**Example:** `git branch -b Asteriods/issue-1234`

I'm a fan of (Chris Beams' How to Write a Git Commit Message)[https://chris.beams.io/posts/git-commit/]. So follow what he suggests (yes, all seven rules!)

# Pull requests
The title of a pull request should include the issue ID and title.

`issue-1465 Add feature to section`

The description of a pull request should contain a link to the issue for easy reference by the reviewers (ideally something like `resolves #123`).

Pull requests will be rejected when:
* Coding standards are not followed
* Link to issue is missing
* The changes do not implement the requested feature/change correctly
* Tests are failing
* Rules for SEO and Accessibility are not applied (when applicable)