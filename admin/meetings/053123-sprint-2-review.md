# Meeting 7 - Sprint 2 Check-in

## Date/Time: 05/31/2023 at 5:00 PM

## Location: Sixth College at UCSD

### Attendance List

- Pratyush Chand
- Georgio Feghali
- Jaemin Ko
- Peter Lu
- Zhicheng Wang
- Richard Xu
- Chris Wang
- Eric Dong
- Ryan Wong
- Zihan Peng

### Agenda

- Check-in on sprint 2 progress.
- Discuss about sprint 3.

### Discussion

During the meeting, we reviewed the progress made in Sprint 2 and were pleased with the successful completion of most of our planned objectives and user stories. We acknowledged minor challenges encountered but appreciated the team's collaboration in overcoming them. Lessons learned included the importance of effective communication, close collaboration, and proper planning. For Sprint 3, we discussed and set objectives, identified user stories, and allocated resources accordingly. We scheduled regular check-ins and stand-up meetings to ensure timely progress tracking and issue resolution. The next meeting was scheduled to review Sprint 3 progress and plan for subsequent sprints.

### Reviews

- Georgio: I updated the background design to match the cart screen, ensuring visual coherence. I modified the CSS components to align with the cart screen's theme. I added improved animations for a better user experience. Since it was a bowl, I changed the entree selection from two to one. I also provided a clear link to the cart screen for easy access. These changes created a cohesive and user-friendly experience for our users.
[Github Issue Link](https://github.com/cse110-sp23-group30/cse110-sp23-group30/issues/75)

<img width="1512" alt="242429721-f6105be5-ae17-4c86-b2a8-c93e02b91175" src="https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/90d055f7-317c-461b-9f5c-9ea538f473cb">
<img width="1512" alt="242429725-5e01f00d-5692-4ba0-8ada-6a20ef4c374c" src="https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/919aecdb-19c5-4447-b88d-11f8e16107a9">

- Peter: Aligned arrows, buttons, and texts to the middle of the screen. Filled instruction screen. Texts are now larger to populate the screen better. Buttons are now working as intended (linking to other screens).
This sprint should conclude the functionality updates. Starting next sprint, I will focus mainly on the styles and adding decors to the screen (background, button colors, text fonts, adding images to each instructions…).
[Github Issue Link](https://github.com/cse110-sp23-group30/cse110-sp23-group30/issues/45)

![Screen Shot 2023-05-31 at 5 08 26 PM](https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/78cf8b0a-b06b-4742-85c6-53b379f61ea1)

- Zihan Peng: Edited .yaml file for linting under the workflow directory, created configuration files for linter, ran linter through css and html files, and fixed the errors found on those files.

![linter](https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/f2cfdbf2-96cc-40bf-90d3-eb4b0d3263eb)

- Richard Xu: Changed the plate screen so that the images for the entrees and main dishes were centered. Also added an additional feature that has the image expand when hovered over with the cursor so the user could see an enlarged image of what they were getting.
[Github Issue Link](https://github.com/cse110-sp23-group30/cse110-sp23-group30/issues/48)

![Untitled](https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/b0ee9698-27a8-4905-846b-2b6c382c3c13)

- Ryan Wong: Removed the settings button and its functionality to be migrated to a header, which will be universally used for the entire app. Properly linked the “play game” button and the “how to play” button to their respective pages. Centered middle buttons after removing settings button.
[Github Issue Link](https://github.com/cse110-sp23-group30/cse110-sp23-group30/issues/61)

![Screen Shot 2023-05-31 at 5 17 28 PM](https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/0f2b2115-1672-4e43-81ad-9fd29a0243d4)

- Chris Wang: Connect each button to the screen they are supposed to switch to after clicking. Using onclick in element and created function in javascript to do so.
[Github Issue Link](https://github.com/cse110-sp23-group30/cse110-sp23-group30/issues/32)

![Screenshot 2023-05-24 at 7 09 42 PM](https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/ac68fe17-3c59-4a4f-89cc-df0331dd8681)

- Eric Dong: Updated the way the screen looks, mostly editing the CSS. Changed the background, the font, the layout, and how everything is displayed on the screen, including the buttons. Changed much of the HTML of the way each plate or bowl is displayed and updated some javascript accordingly. Also added extra javascript so that the buttons work properly. Still have yet to connect the screens, looking to see how we want to implement an array that we cannot send across all the screens. Also not completely sure about the background image yet, but can easily update according to team CSS choices.
[Github Issue Link](https://github.com/cse110-sp23-group30/cse110-sp23-group30/issues/57)

![pasted image 0 (1)](https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/3eda46c4-ea2f-4613-90ad-2cdaafe981b1)

- Zhicheng Wang: Added background music: Have to have user input (click). All Buttons now function and goes to the right place. Added background - mp4. Added some particles: there will be fortune cookies constantly floating and rotating on the screen. Buttons will have a glowing effect on the border when hover and glows completely when clicked. Added more messages
[Github Issue Link](https://github.com/cse110-sp23-group30/cse110-sp23-group30/pull/55)

<img width="798" alt="截屏2023-05-31 下午5 11 23" src="https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/89a571c8-8ced-42f8-ae94-6cb9f6f51632">

- Jaemin: Added more unit tests with puppeteer for the instruction screen and the opening screen. Configured GitHub actions such that the modified tests automatically run. Notified assigned developers for such screens for errors, received feedback and made changes to the test code.

![Screen Shot 2023-05-31 at 5 35 52 PM](https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/f350a9fc-ddf2-4835-b718-cc68bb339ef6)

- Pratyush: Worked on header functionality to add to every screen. Contains home, settings, and instructions button. Each button navigates to correct screen and settings opens a pop-up for music/sound volume sliders.
[Github Issue Link 1](https://github.com/cse110-sp23-group30/cse110-sp23-group30/issues/68)
[Github Issue Link 2](https://github.com/cse110-sp23-group30/cse110-sp23-group30/issues/43)

![pasted image 0](https://github.com/cse110-sp23-group30/cse110-sp23-group30/assets/75293296/2aa400da-efc3-49ae-8a00-d0eb49579d19)

### To-Do

- Complete remaining Issues for sprint 2.
- Start sprint 3.
