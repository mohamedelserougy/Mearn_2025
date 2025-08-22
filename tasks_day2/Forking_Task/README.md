# Fork Task
---
## Update Fork From original branch (upstream)
- Using GitHub `Sync Fork` Button in Fork page to sync directly as shown the image below. <br />
![Sync fork](Sync_fork.png)

- Using git commands locally and pushing edits to remote as shown below ==> <br />
    1. navigate to local fork repo <br />

    2. Add the Upstream Remote (original repo) as new remote ==> <br />
    `git remote add upstream https://github.com/ayaatadel/Mearn_2025.git` <br />
    Verify it's added by running ==> `git remote -v` <br />
    expected output ==> <br />
            `origin  https://github.com/mearn-2025-i-samir/Mearn_2025.git (fetch)` <br />
            `origin  https://github.com/mearn-2025-i-samir/Mearn_2025.git (push)` <br />
            `upstream        https://github.com/ayaatadel/Mearn_2025.git (fetch)` <br />
            `upstream        https://github.com/ayaatadel/Mearn_2025.git (push)` <br />

    3. Fetch Upstream Changes: To get the latest commits from the original repository <br />
    `git fetch upstream` <br />

    4. Merge changes into Your branch (ex: 'master') <br />
    `git checkout master` <br />
    `git merge upstream/master` <br />

    5. Push to Your Fork: Now, push the merged changes from your local repository to your fork on GitHub. <br />
    `git push origin master` <br />

    ---


## Update upstream from fork