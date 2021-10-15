# Welcome to the Talon Program!

Greetings Operator, and thank you for your participation in the Talon program. Your mission, should you choose to accept it, is to **submit a small HTML (with embedded CSS and JavaScript) page that will run in space**. In partnership with our friends at [Night Crew Labs](https://www.nightcrewlabs.com/), we will send a balloon into near Earth orbit, with your code on board. We will capture video of your code executing in space, and send that video to you afterward. Sweet, right? Read on to learn how to get involved!

## tl;dr
* Create an HTML file and put it in the `apps` directory of this repository.
* Test that your file works using the test harness (see instructions below).
* [Submit a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) to this repository containing your new file. **Your pull request must be in by 4pm Pacific time on October 20th, 2021**. Also note that we can only accommodate 180 HTML files, so PRs will be processed on a first come, first merge basis.
* [Fill out this Google form](https://forms.gle/t8YMcaoUi1mpd7eW8) with information about you and your app - we will send you footage of your code running in space after SIGNAL 2021!

## Creating an HTML file that will go to space

Begin by [forking this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo), and [cloning it to your computer](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository). Create a new HTML file (ideally with a unique/descriptive name) in the `apps` folder in your version of the repository. This HTML file must contain ALL of the code, styles, and markup that will comprise your application. That means you'll have to use `<script>` tags to run JavaScript code, embed CSS within `<style>` tags, include images by using [Data URIs](https://css-tricks.com/data-uris/), and so on - **everything needs to be in one HTML file**.

On the spacecraft, your HTML will be displayed in a sandboxed iframe, loaded directly from the filesystem (the spacecraft will not run a local HTTP server). To test how your page will work, you can use the included test harness in this repository. There are two ways to test that your file works:

### Easy way, does not require Node.js
In a Chrome browser (our spacecraft will use a Chromium browser on a Raspberry Pi 4), use `File > Open` to open `harness/index.html?loadFile=yourHTMLfilename.html`.

**NOTE THE URL PARAMETER in the path above!** This will cause the test harness to open your file, and only your file! Otherwise, using the option below, all the code files will display on a loop.

### Slightly harder way, requires Node.js
To see how your file will look when it loops through with all the other files, you need to take a few more steps. You will need to have [Node.js installed](https://nodejs.org/en/). In the top level folder of the project, run:

`npm run generate_data`

This will generate a data file that the test harness needs to run through all the code files.

Next, in a Chrome browser (our spacecraft will use a Chromium browser on a Raspberry Pi 4), use `File > Open` to open `harness/index.html`. This will loop through all the code files, displaying yours (and all the rest) for 10 seconds each.

If you do this, make sure to delete your changes to the generated data file, and don't include them in your pull request.

### Creating your content
Edit your HTML file to contain whatever you want! All the HTML files included in the mission will be displayed for **ten seconds** on a tight loop. You should also note that the spacecraft will have no network connectivity, so all your code and content has to be in the one HTML file.

Once you have completed your work, [Submit a pull request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) back to the [TwilioQuest/talon](https://github.com/TwilioQuest/talon) repository. Your pull request should contain only your new HTML file.

Your code will be reviewed by the Talon 1 team, and if it is functional and free of any content or messages that would violate the [SIGNAL 2021 code of conduct](https://signal.twilio.com/code-of-conduct), we will merge it and send it to space! Make sure to submit your pull request by **4pm Pacific time on Wednesday, October 20th 2021** - new submissions will not be accepted or reviewed after that time. You should also note that due to the limitations of the space flight duration, we will only be able to accommodate ~180 code files. Submissions will be reviewed on a first come, first merge basis by humans doing their best to support as many participants as possible.

After submitting your pull request, please also [fill out this Google form](https://forms.gle/t8YMcaoUi1mpd7eW8) with information about you and your app. We will use this information to contact you, and send you a video file of your code running in space!

## FAQ

### How will the Talon 1 space flight work?

The Talon 1 spacecraft will launch into near Earth orbit in the early morning on Thursday October 21st, 2021 (the second day of the [SIGNAL Conference](https://signal.twilio.com/)). Using a balloon designed to carry a small payload of a Raspberry Pi 4, a monitor, and several GoPro cameras, our code will be carried into space and executed on this tiny computer. The computer will have no network connectivity. On a loop, we will display all the HTML files included in the mission (via iframe) for ten seconds each, in a fullscreen Chromium browser.

After the flight is finished, we will recover the payload, and the video footage of your code running against the [backdrop of space, kind of like this](https://www.nightcrewlabs.com/hershey). In the days and weeks after the flight, the Talon 1 team will cut up the video and send it to participants in the flight!

### What should I do in my code file?

That's up to you! You've got ten seconds to do whatever you can imagine in space. You could send a picture of your family or pets, a message for a loved one, or anything you can express in HTML, CSS, and JavaScript.

### Why do I want to run my code in space?

I'm confused by your question - it's **SPACE**! This is a once-in-a-lifetime opportunity to join the small number of developers who have sent their code to the final frontier. It should be a lot of fun :)

## License

MIT
