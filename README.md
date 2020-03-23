# THE LEGEND OF OM  

https://lowlightdev.itch.io/the-legend-of-om



## Story
The story revolves around Om,  a legendary hero who protects the squirrels and humans in the  Squirrel Village.  She must fight the evil Krog to keep the forest safe once again and all of it's secrets and inhabitants. The Squirrel Village must survive again!
Take part in the adventures of Om!
About game
The game was built with inspiration from classics like Zelda & Pokemon and some other GameBoy Games for a very special friend, which is also the main character of the game.

Hope you enjoy the game as much as I enjoyed building it :)

## GameBoy ROM
! Beside the HTML5 variant the game comes, you can also download the ROM to play on a Game Boy. It can be played with an emulator or even to burn onto a cartridge and play on the device itself!(or support my work and buy one from me )

The ROM for the GameBoy is in /rom folder.
If you intend to use the rom download RetroArch.
This is a software that has a lot of emulators and it's easy to use and also has Achievements!. Visit  RetroAchievements game page at https://retroachievements.org/game/8131 for more details.

### Credits
Game developed by lowlightdev

Built using https://www.gbstudio.dev/ & used primary assets as inspiration.

Some assets in games where modified or copied from different sources, check them below:

- https://opengameart.org/content/gb-styled-icons - inspiration for some items

- https://opengameart.org/content/32x32-fantasy-tileset - inspiration for some  items


Also would like to give a shout out to the guys from RetroAchievements.org, go check them out :).



## Special thanks
This game is dedicated to Oana Munteanu, one of my best friends and one of the kindest and lovely persons.


--------------------------------------------------------------
### JavaScript GameBoy Color Emulator

Fork of Grant Galitz's JavaScript GameBoy Color Emulator made for running a single ROM
when uploading homebrew games to services like Itch.io.

This version makes the following changes.

- Canvas fills browser window on desktop/tablet while keeping aspect ratio
- Touch controls displayed on mobile/tablet
- Using css `image-rendering: pixelated` rather than bilinear filtering
- Touch dpad controls for mobile using touch move with a deadzone
- Keyboard fix for iPad keyboard case that doesn't report keyup event keycode
- Wait for keyboard or touch input before starting AudioContext to fix issues in Chrome and iOS not playing Audio
- No ability to switch ROM, or save/load states, this version is intended for deploying a single game

### Usage

- Clone this repository
- Add your ROM file as `rom/game.gb` (or edit romPath in js/other/mobile.js to point to your ROM file)
- Upload to a webserver and visit index.html

### Keyboard Controls

Up - Up Arrow / W  
Down - Down Arrow / S  
Left - Left Arrow / A  
Right - Right Arrow / D  
A - Alt / Z / J  
B - Ctrl / K / X  
Start - Enter  
Select - Shift  

Edit by changing `bindKeyboard` in `js/other/controls.js`.

### License

**Copyright (C) 2010 - 2016 Grant Galitz**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
