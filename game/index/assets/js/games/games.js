const gamesArr = [
  /*{
    filter: [`shooting`, `multiplay`],
    link: `sample`,
    imgsrc: `rooftop.jpg`,
    name: `Sample Game`,
    developer: `Sample Game Creator`,
    desc: `Sample Description`,
    controls: [`←/→ Arrow Keys: Move horizontally`]
  },*/
  {
    filter: [`shooting`, `multiplay`],
    link: `rooftop-snipers`,
    imgsrc: `rooftop.jpg`,
    name: `Rooftop Snipers`,
    developer: `Pat Eichler`,
    desc: `Rooftop Snipers is a chaotic two button local multiplayer game. Challenge your friends side by side or play the computer. Shoot your opponent off the map to win.`,
    controls: [`W/I: Jump`, `E/O: Shoot`]
  },
  {
    filter: [`multiplay`],
    link: `tube-jumpers`,
    imgsrc: `tj.jpg`,
    name: `Tube Jumpers`,
    developer: `Pat Eichler`,
    desc: `Tube Jumpers is local multiplayer game with your friends packed with action. The last one to stay on the tubes wins. Watch out for miscellaneous objects while watching your back from other players.`,
    controls: [`W/I: Jump`]
  },
  {
    filter: [`plat`],
    link: `slope`,
    imgsrc: `slope.jpg`,
    name: `Slope`,
    developer: `Rob Kay`,
    desc: `Slope is the ultimate running game that will put your skills to the test. Speed down on a randomized slope. The farther you go, the faster your ball travels. This game might look simple but playing this will give you extreme adrenaline rush. Just remember to avoid obstacles and those red blocks. Always be on track to get a high score and you might have your name on the leaderboard!`,
    controls: [`AD/QE/Arrow Keys: Control movement`]
  },
  {
    filter: [`multiplay`, `shooting`],
    link: `getaway-shootout`,
    imgsrc: `getaway-shootout.jpg`,
    name: `Getaway Shootout`,
    developer: `Pat Eichler`,
    desc: `Race on top of a moving train in Getaway Shootout and be the first to grab 3 getaways. Compete against computer AI or with a friend in 2 player mode to prove who is the best. There are many weapons and power-ups you can collect throughout the map use it wisely to to gain an upper hand over your opponents.`,
    controls: [`W/E (P1): Jump left/right`, `R (P1): Power up`, `I/O (P2): Jump left/right`, `P (P2): Power up`]
  },
  {
    filter: [`miscell`, `strat`],
    link: `2048`,
    imgsrc: `2048.png`,
    name: `2048`,
    developer: `Gabriele Cirulli`,
    desc: `2048 is a single-player sliding block puzzle game. Use your arrow keys to move the tiles. When two tiles with the same number touch, they merge into one!`,
    controls: [`WASD/Arrow Keys: Move tiles`, `R: Restart`]
  },
  {
    filter: [`shooting`, `multiplay`],
    link: `gun-mayhem`,
    imgsrc: `gunmayhem.jpg`,
    name: `Gun Mayhem`,
    developer: `Kevin Gu`,
    desc: `Gun Mayhem is an extremely interesting flash format shooting game developed by Kevin Gu. The game is designed with 10 maps starting from prehistoric context to modern times. The player's task in this game is to destroy all enemies by shooting them down! Very simple, isn't it! Let's start the adventure now!`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`shooting`, `multiplay`],
    link: `gun-mayhem-2`,
    imgsrc: `gunmayhem2.jpg`,
    name: `Gun Mayhem 2`,
    developer: `Kevin Gu`,
    desc: `More explosive arena style action! Battle against the AI or with friends in this cartoony platform shooter. Up to 4 players can play at once! 
    Gun Mayhem returns with brand new maps, and much more:
    - New campaign with 16 progressively challenging missions
    - Challenge levels to test your skills
    - 7 custom game modes
    - New guns, perks, and customization options`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z/T: Shoot`, `X/Y: Throw bomb`]
  },
  {
    filter: [`strat`, `plat`],
    link: `run-3`,
    imgsrc: `run3.jpg`,
    name: `Run 3`,
    developer: `Player03`,
    desc: `There’s a whole new galaxy waiting to be explored! You can play Run 3 in the Explore Mode and the Infinite Mode. To add more levels to your Galaxy Map, choose the Explore Mode. The Runner will encounter lots of new tunnels and areas, and may bump into some friends along the way!
    If the game is stuck on the loading screen and not loading, try disabling your adblocker.`,
    controls: [`WASD/Arrow Keys: Control movement`, `R: Reset`, `P: Pause`]
  },
  {
    filter: [`miscell`],
    link: `wordle-unlimited`,
    imgsrc: `wordle.png`,
    name: `Wordle Unlimited`,
    developer: `Josh Wardle`,
    desc: `Wordle is a web-based word game developed by Welsh-born software engineer Josh Wardle. Players have six attempts to guess a five-letter word; feedback is given for each guess, in the form of colored tiles, indicating when letters match or occupy the correct position. This tweak has no limit to how many games you can play!`,
    controls: [`Type to interact`]
  },
  {
    filter: [`strat`],
    link: `tetris`,
    imgsrc: `tetris.jpg`,
    name: `Tetris`,
    developer: `Kyle Shanks`,
    desc: `Tetris is a tile-matching video game created by Russian software engineer Alexey Pajitnov in 1984. It has been published by several companies, most prominently during a dispute over the appropriation of the rights in the late 1980s.`,
    controls: [`←/→ Arrow Keys: Move horizontally`, `↑: Rotate piece`, `↓: Soft Drop`, `P: Pause`, `Shift: Switch blocks`, `Space: Hard drop`, `R: Reset`]
  },
  {
    filter: [`sport`],
    link: `retro-bowl`,
    imgsrc: `retrobowl.jpg`,
    name: `Retro Bowl`,
    developer: `New Star Games`,
    desc: `Retro Bowl is an American style football game created by New Star Games. Are you ready to manage your dream team into victory? Be the boss of your NFL franchise, expand your roster, take care of your press duties to keep your team and fans happy.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Drag to throw`]
  },
  {
    filter: [`shooting`],
    link: `zombocalypse`,
    imgsrc: `zombocalypse.jpg`,
    name: `Zombocalypse`,
    developer: `John Funtanilla`,
    desc: `Only you, and a whole lot of hungry hungry zombies. Fortunately, you get constant airdrops to deliver fresh weapons and med kits. Now, if you can only live long enough to earn some achievements and unlock some bigger guns. When things get really hairy, call in an airstrike!`,
    controls: [`AD/← →: Control movement`, `S/↓: Pick up items`, `W/↑: Call airstrike`, `Space: Attack`, `Shift: Pause game`]
  },
  {
    filter: [`plat`, `strat`],
    link: `super-mario-64`,
    imgsrc: `sm64.jpeg`,
    name: `Super Mario 64`,
    developer: `Nintendo, ported by sm64js`,
    desc: `Super Mario 64 is a 1996 platform game for the Nintendo 64 and the first Super Mario game to feature 3D gameplay. It was developed by Nintendo EAD and published by Nintendo, now ported over to the web thanks to the folks over at sm64js!
    
    Note: The first key is the one you press, the second key is what it does in game (Ex: in game, it will say to press A. You would press "X" to achieve that.`,
    controls: [`Arrow Keys: Control movement`, `Enter: Start`, `X: A`, `C: B`, `Q: L`, `Space: Z`, `C-Stick: WASD`]
  },
  {
    filter: [`strat`, `miscell`],
    link: `adofai`,
    imgsrc: `adofai.png`,
    name: `A Dance of Fire and Ice`,
    developer: `7th Beat Games`,
    desc: `A Dance of Fire and Ice is a strict rhythm game.
  
    Keep your focus as you guide two orbiting planets along a winding path without breaking their perfect equilibrium.
    
    Press on every beat of the music to move in a line.
    
    Every pattern has its own rhythm to it. It can get difficult. This game is purely based on rhythm, so use your ears more than your sight.

    Check out the full game on Steam https://store.steampowered.com/app/977950/A_Dance_of_Fire_and_Ice/`,
    controls: [`Use any keys to play`]
  },
  {
    filter: [`racing`, `sim`],
    link: `madalin-stunt-cars-2`,
    imgsrc: `msc2.jpg`,
    name: `Madalin Stunt Cars 2`,
    developer: `Madalin Games`,
    desc: `Welcome to the expansive open world of Madalin Stunt Cars 2. Pick your car and drift, drag and race your way through three massive fully explorable maps.

    Jump behind the wheel of the hottest supercars on the planet, race through cities and execute trick stunts with the sensational Madalin Stunt Cars 2.
    
    Pick a Huracan, LaFerrari, Pagani or Veneno and tear up the streets. Compete in multiplayer arenas with other MSC2 gamers.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Shift: Nitrous`, `R: Respawn`, `T: Open map`, `C: Change camera`]
  },
  {
    filter: [`strat`, `shooting`],
    link: `superhot`,
    imgsrc: `superhot.jpg`,
    name: `SUPERHOT`,
    developer: `SUPERHOT Team`,
    desc: `No regenerating health bars. No conveniently placed ammo drops. 
    It's just you, outnumbered and outgunned, grabbing weapons off fallen enemies to shoot, slice, and maneuver through a hurricane of slow-motion bullets.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Space: Jump`, `Left Click: Shoot`]
  },
  {
    filter: [`plat`, `strat`, `shooting`],
    link: `my-friend-pedro`,
    imgsrc: `mfp.jpg`,
    name: `My Friend Pedro`,
    developer: `Dead Toast Entertainment`,
    desc: `An action packed slow motion face-blasting-simulator about friendship and imagination.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Mouse: Shoot`, `Shift/Space: Slow down time`]
  },
  {
    filter: [`miscell`, `sim`],
    link: `cookie-clicker`,
    imgsrc: `cookie-clicker.jpg`,
    name: `Cookie Clicker`,
    developer: `Julien "Orteil" Thiennot`,
    desc: `Cookie Clicker is a game about making an absurd amount of cookies. To help you in this endeavor, you will recruit a wide variety of helpful cookie makers, like friendly Grandmas, Farms, Factories, and otherworldly Portals.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`, `strat`],
    link: `doodle-jump`,
    imgsrc: `doodle.jpg`,
    name: `Doodle Jump`,
    developer: `Lima Sky`,
    desc: `Doodle Jump is a fun and cute game. Your must help our alien jump as high as possible onto a range of different hand-drawn platforms. This game is an endless game, so you must simply keep jumping and try to register as high a score as you possibly can!`,
    controls: [`Arrow Keys: Control movement`, `Space: Start/Restart game`]
  },
  {
    filter: [`plat`, `strat`],
    link: `snake`,
    imgsrc: `snake.jpg`,
    name: `Snake`,
    developer: `Google`,
    desc: `How long can you last before your tail becomes your dinner? Take the challenge and eat all those apples! Be careful not to hit the wall!`,
    controls: [`WASD/Arrow Keys: Control movement`, `R: Restart`]
  },
  {
    filter: [`strat`, `cards`],
    link: `solitaire`,
    imgsrc: `solitaire.png`,
    name: `Solitaire`,
    developer: `Google`,
    desc: `Patience, card solitaire or just solitaire, is a genre of card games that can be played by a single player. Patience games can also be played in a head-to-head fashion with the winner selected by a scoring scheme.`,
    controls: [`Click to play`]
  },
  {
    filter: [`miscell`, `strat`, `sim`, `rpg`],
    link: `a-dark-room`,
    imgsrc: `adr.png`,
    name: `A Dark Room`,
    developer: `Doublespeak Games`,
    desc: `A Dark Room is a minimalist text-based adventure RPG game right in your browser! How far will you go, player?`,
    controls: [`Click to play`]
  },
  {
    filter: [`sim`, `racing`],
    link: `drift-hunters`,
    imgsrc: `dh.png`,
    name: `Drift Hunters`,
    developer: `Ilya Kaminetsky`,
    desc: `Drift Hunters is an awesome 3D car driving game in which you score points by drifting various cars. 
    These points earn you money, that you can spend to upgrade your current car or buy a new one. 
    The game stands out because of its realistic drifting physics and its various driving environments.`,
    controls: [`WASD: Control movement`, `Space: Hand brake`, `C: Change camera`, `Left Shift: Shift up gear`, `Left Ctrl: Shift down gear`]
  },
  {
    filter: [`plat`, `strat`],
    link: `smasmw`,
    imgsrc: `smasmw.png`,
    name: `Super Mario Allstars + Super Mario World`,
    developer: `Nintendo`,
    desc: `Super Mario All-Stars + Super Mario World is a compilation title for the Super Nintendo Entertainment System. It includes all the games from Super Mario All-Stars, as well as Super Mario World. It was released in December 1994 in North America, 1995 in Europe, and was never released in Japan.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`],
    link: `align-4`,
    imgsrc: `align4.jpg`,
    name: `Align 4`,
    developer: `Will Boyd`,
    desc: `Align 4 is a two-player connection board game just like Connect 4, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. 
    The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs. The first player can always win by playing the right moves.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`, `strat`],
    link: `pacman`,
    imgsrc: `pacman.jpg`,
    name: `Pac-Man`,
    developer: `Bandai Namco, remade by Shaun Williams`,
    desc: `Pac-Man is a Japanese video game franchise published, developed and owned by Bandai Namco Entertainment.`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`plat`, `strat`],
    link: `economical`,
    imgsrc: `economical.png`,
    name: `Economical`,
    developer: `baba_s`,
    desc: `2D puzzle action game where saving coins is important! Aiming for a goal using items. Make a way with blocks. Break a block with a hammer. But you need coins.`,
    controls: [`A/D: Control movement`, `W/Space: Jump`, `Mouse Wheel: Select items`]
  },
  {
    filter: [`plat`, `strat`],
    link: `economical-2`,
    imgsrc: `economical2.png`,
    name: `Economical 2`,
    developer: `baba_s`,
    desc: `Version 2 of the 2D puzzle action game where saving coins is important! Aiming for a goal using items. Make a way with blocks. Break a block with a hammer. But you need coins.`,
    controls: [`A/D: Control movement`, `W/Space: Jump`, `Mouse Wheel: Select items`]
  },
  {
    filter: [`plat`],
    link: `color-on`,
    imgsrc: `coloron.png`,
    name: `COLORON`,
    developer: `Greg Hovanesyan`,
    desc: `COLORON is a fun and well-designed platformer. The goal is to match the color of the tower to the bouncing ball. Keep it going for as long as you can, just don't get mad.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`, `strat`],
    link: `meat-boy`,
    imgsrc: `meatboy.jpg`,
    name: `Meat Boy`,
    developer: `Team Meat`,
    desc: `This is NOT Super Meat Boy!

    Its simply the flash prototype that Super Meat Boy was based off of.
    SMB, will play very differently and is 100% new.. what im saying is if you even slightly enjoy the prototype, you will LOVE SMB!
    
    For more info on Super Meat Boy check out supermeatboy.com
    
    -Team Meat`,
    controls: [`←/→: Control movement`, `Space: Jump`]
  },
  {
    filter: [`miscell`,`strat`],
    link: `fnf`,
    imgsrc: `fnf.png`,
    name: `Friday Night Funkin`,
    developer: `ninjamuffin99`,
    desc: `Friday Night Funkin' is an open-source donationware rhythm game first released in 2020 for a game jam. 
    The game was developed by a team of four Newgrounds users, Cameron "Ninjamuffin99" Taylor, David "PhantomArcade" Brown, Isaac "Kawai Sprite" Garcia, and evilsk8r.`,
    controls: [`WASD/Arrow Keys: Interact`, `+/-: Change volume`]
  },
  {
    filter: [`plat`, `strat`],
    link: `geometry-dash-remastered`,
    imgsrc: `gdr.jpg`,
    name: `Geometry Dash Remastered`,
    developer: `Arabask`,
    desc: `Welcome all to Geometry Dash Remastered, and, well, you already know the game. But this is more, this is 5 new levels you can't find anywhere else, this is ... REMASTERED (I'm totally serious).
    
    Warning: This game may be resource intensive`,
    controls: [`W/Space/Click/↑: Jump`, `Esc/P: Pause`]
  },
  {
    filter: [`sim`, `miscell`],
    link: `hackertyper`,
    imgsrc: `hackertyper.jpg`,
    name: `Hacker Typer`,
    developer: `David M.`,
    desc: `Created in 2011, Hacker Typer arose from a simple desire to look like the stereotypical hacker in movies and pop culture. Since that time, it has brought smiles to millions of people across the globe. 
    Plus, many of you have temporarily transformed into hackers yourselves, all from a few clicks on the keyboard (and some programming magic behind the scenes!).`,
    controls: [`Click or type to play`]
  },
  {
    filter: [`strat`, `plat`],
    link: `fancy-pants-adventures`,
    imgsrc: `fancy-pants-adventures.png`,
    name: `Fancy Pants Adventures`,
    developer: `DrNeroCF`,
    desc: `Run Fast, Run Fancy.`,
    controls: [`←/→: Control movement`, `↓: Duck/roll`, `↑: Enter door`, `S: Jump`]
  },
  {
    filter: [`strat`, `sim`],
    link: `age-of-war`,
    imgsrc: `age-of-war.jpg`,
    name: `Age of War`,
    developer: `Louissi`,
    desc: `Take control of 16 different units and 15 different turrets to defend your base and destroy your enemy.
    In this game, you start at the cavern men's age, then evolve! There is a total of 5 ages, each with its units and turrets. I hope you have fun with this game! Sooo many hours of hard work.`,
    controls: [`Click to play`]
  },
  {
    filter: [`strat`, `sim`],
    link: `age-of-war-2`,
    imgsrc: `aow2.png`,
    name: `Age of War 2`,
    developer: `Louissi`,
    desc: `A terrible struggle is about to take place that will determine the future of your people. Only one possible solution to this conflict: to conquer or die! 
    Establish your strategy carefully, finding the right balance between attack and defense, and use your collected experience to upgrade your troops. 
    Age of War 2 is a great strategy / defense game, with easy handling but vast possibilities.`,
    controls: [`Click to play`]
  },
  {
    filter: [`plat`, `strat`],
    link: `super-mario-63`,
    imgsrc: `sm63.png`,
    name: `Super Mario 63`,
    developer: `Runouw`,
    desc: `Super Mario 63 is a fan-game inspired by Nintendo's Super Mario 64. Many levels and features are based upon it and other of Nintendo's games, but a variety of them are completely original. 
    Among them include a detailed storyline, ability to play as Luigi, a highly customizable Level Designer with sharable codes, three different FLUDD Power-ups, four different power-caps, and 64 Shine Sprites & 64 Star Coins to collect.`,
    controls: [`Arrow Keys: Control movement`, `Z: Interact/stomp`, `X: Twirl`, `C: Launch from cannons`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-red`,
    imgsrc: `pokemon-red.jpg`,
    name: `Pokemon Red`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-blue`,
    imgsrc: `pokemon-blue.jpg`,
    name: `Pokemon Blue`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon Red and Pokémon Blue introduce legions of gamers to the world of Kanto, where the likes of Charmander, Pikachu, and Mewtwo were first discovered. Through exciting exploration, battles, and trades, Trainers are able to access 150 Pokémon. You begin your journey in Pallet Town as a young boy.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-firered`,
    imgsrc: `pokemon-firered.jpg`,
    name: `Pokemon Fire Red`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 Game Boy role-playing video games Pokémon Red and Blue.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-leafgreen`,
    imgsrc: `pokemon-leafgreen.jpg`,
    name: `Pokemon Leaf Green`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 Game Boy role-playing video games Pokémon Red and Blue.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-ruby`,
    imgsrc: `pokemon-ruby.jpg`,
    name: `Pokemon Ruby`,
    developer: `Nintendo and Game Freak`,
    desc: `Immerse yourself in the beautiful region of Hoenn, a place of masterful heroes and mysterious teams, of friendship and battles. As the new kid in town, you set off your journey as a Pokémon Trainer. Who knows what wonders and dangers await you? Now it's time to grab your gear and head out on your own...

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-sapphire`,
    imgsrc: `pokemon-sapphire.jpg`,
    name: `Pokemon Sapphire`,
    developer: `Nintendo and Game Freak`,
    desc: `Immerse yourself in the beautiful region of Hoenn, a place of masterful heroes and mysterious teams, of friendship and battles. As the new kid in town, you set off your journey as a Pokémon Trainer. Who knows what wonders and dangers await you? Now it's time to grab your gear and head out on your own...

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-emerald`,
    imgsrc: `pokemon-emerald.jpg`,
    name: `Pokemon Emerald`,
    developer: `Nintendo and Game Freak`,
    desc: `Pokémon Emerald Version takes Trainers back to the land of Hoenn for an expanded adventure, this time against both Team Magma and Team Aqua! Pokémon Emerald also features an even more exciting storyline featuring the Legendary Rayquaza.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-gold`,
    imgsrc: `pokemon-gold.jpg`,
    name: `Pokemon Gold`,
    developer: `Nintendo and Game Freak`,
    desc: `Enter a whole new world, with new Pokémon to capture, train and battle! Meet Professor Elm and get the all-new Poké Gear, including map, radio, cell phone and clock. Set the clock then watch as day turns to night and events take place in real time— and be sure to keep an eye out for Pokémon that come out only at night!

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-silver`,
    imgsrc: `pokemon-silver.jpg`,
    name: `Pokemon Silver`,
    developer: `Nintendo and Game Freak`,
    desc: `Enter a whole new world, with new Pokémon to capture, train and battle! Meet Professor Elm and get the all-new Poké Gear, including map, radio, cell phone and clock. Set the clock then watch as day turns to night and events take place in real time— and be sure to keep an eye out for Pokémon that come out only at night!

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `rpg`, `plat`],
    link: `pokemon-crystal`,
    imgsrc: `pokemon-crystal.jpg`,
    name: `Pokemon Crystal`,
    developer: `Nintendo and Game Freak`,
    desc: `Originally released for the Game Boy™ Color system in 2000, the Pokémon™ Crystal game added several new features to the Pokémon franchise. 
    For the first time, players could choose a female or male character, Pokémon battles featured animation, and more. 
    And now, this Virtual Console release invites you to explore the Johto region again—or for the first time.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `strat`],
    link: `smb`,
    imgsrc: `smb.jpg`,
    name: `Super Mario Bros`,
    developer: `Nintendo`,
    desc: `Mario Bros. is a 1983 platform game developed and published for arcades by Nintendo. 
    It was designed by Shigeru Miyamoto and Gunpei Yokoi, Nintendo's chief engineer. 
    Italian plumber Mario and his twin brother Luigi exterminate creatures emerging from the sewers by knocking them upside-down and kicking them away.
    
    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `plat`],
    link: `duck-life`,
    imgsrc: `ducklife.png`,
    name: `Duck Life`,
    developer: `Wix Games`,
    desc: `A pet raising simulation. Train a duckling to become a racing duck.
    
    Invest your time and money to raise and train the duckling properly.
    Run, swim, and fly your way to be the champion racer, and save your farm!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`strat`, `plat`],
    link: `duck-life-2`,
    imgsrc: `ducklife2.png`,
    name: `Duck Life 2`,
    developer: `Wix Games`,
    desc: `A pet raising simulation. Train a duckling to become a racing duck.
    
    Invest your time and money to raise and train the duckling properly.
    Run, swim, and fly your way to be the champion racer, and save your farm!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`strat`, `plat`],
    link: `duck-life-3`,
    imgsrc: `ducklife3.png`,
    name: `Duck Life 3`,
    developer: `Wix Games`,
    desc: `The latest installment of the Duck Life franchise is here! Train your little duck into a lean, mean, racing machine. Practice running, swimming, flying, and climbing to work your way to the top. 
    Compete in different competitions, chow down on some seed to gain up energy, then see if your duck can come out on top!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`strat`, `plat`],
    link: `duck-life-4`,
    imgsrc: `ducklife4.png`,
    name: `Duck Life 4`,
    developer: `Wix Games`,
    desc: `Ducklife 4 is here, so get ready to race your ducks! In the near future, genetically engineered ducks have been banned from the races. It's up to you to make an elite duck who is capable of winning any race!
    Go through vigorous training sequences to build up speed and agility! Do you have the skills to win against all the other ducks? Good luck!`,
    controls: [`Arrow Keys: Control movement`]
  },
  {
    filter: [`strat`, `miscell`, `plat`, `sim`],
    link: `sans-fight`,
    imgsrc: `sans-fight.jpg`,
    name: `Sans Fight`,
    developer: `Jcw87`,
    desc: `Undertale Sans Fight Clone; "do you wanna have a bad time? 'cause if you visit this page... you are REALLY not going to like what happens next."`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z: Proceed`]
  },
  {
    filter: [`sport`, `multiplay`],
    link: `nba-jam`,
    imgsrc: `nbajam.png`,
    name: `NBA Jam`,
    developer: `Iguana Entertainment`,
    desc: `NBA Jam is a classic arcade basketball game developed and published back in 1993 and is the first entry to the NBA Jam series. 
    The game features 2 on 2 basketball match off and is one of the first sports games to feature real and digitized NBA-licensed teams and players!

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`sport`, `multiplay`],
    link: `nba-jam-tournament-edition`,
    imgsrc: `nbajamtournament.png`,
    name: `NBA Jam Tournament Edition`,
    developer: `Iguana Entertainment`,
    desc: `NBA Jam Tournament Edition is the second game in the basketball arcade series created by Midway. 

    The game features two-on-two fast paced matches with real life NBA players from the 1993-1994 seasons. 

    The game has over 120 NBA athletes plus more than 40 hidden characters to unlock.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`sport`, `multiplay`],
    link: `nba-jam-2k20`,
    imgsrc: `nbajam2k20.png`,
    name: `NBA Jam 2K20`,
    developer: `Iguana Entertainment`,
    desc: `NBA Jam 2K20: Tournament Edition is a ROM hack of the game NBA Jam: Tournament Edition for the Super Nintendo Entertainment System (SNES). 
				This hack did not change the core aspects, as well as most game mechanics, of the game, and instead worked on updating its player and team roster to match the 2019-2020 NBA season.

		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`plat`, `strat`, `shooting`],
    link: `raftwars`,
    imgsrc: `raftwars.jpg`,
    name: `Raft Wars`,
    developer: `Martijn Kunst`,
    desc: `Fight against the pirates in the raft wars and win the treasure in the game. The two heroes have cannons which can shoot very far. However this requires a very accurate shooting. Aim well and hit all the pirates in order to win the game.`,
    controls: [`Mouse: Shoot`]
  },
  {
    filter: [`plat`, `strat`, `shooting`],
    link: `raftwars2`,
    imgsrc: `raftwars2.jpg`,
    name: `Raft Wars 2`,
    developer: `Martijn Kunst`,
    desc: `Fight in the raft wars and hit all the targets to sabotage the business of the complex and get back the treasure that is buried in the ground. Defeat all enemies and pass all levels in the game. In the end you can submit your game score.`,
    controls: [`Mouse: Shoot`]
  },
  {
    filter: [`plat`, `strat`],
    link: `shift`,
    imgsrc: `shift.png`,
    name: `Shift`,
    developer: `Antony Lavelle`,
    desc: `Is the floor the roof? Is the roof the floor? And whats with that in game timer?
    Find the answers to all the above questions and more in this original puzzle platformer!`,
    controls: [`Arrow Keys: Control movement`, `Space: Jump`, `Shift: "Shift"`, `P: Pause/Open menu`]
  },
  {
    filter: [`plat`, `strat`],
    link: `shift-2`,
    imgsrc: `shift-2.png`,
    name: `Shift 2`,
    developer: `Antony Lavelle`,
    desc: `The sequel to The Shift! Is the floor the roof? Is the roof the floor? And whats with that in game timer?
    Find the answers to all the above questions and more in this original puzzle platformer, part 2!`,
    controls: [`Arrow Keys: Control movement`, `Space: Jump`, `Shift: "Shift"`, `P: Pause/Open menu`]
  },
  {
    filter: [`plat`, `strat`],
    link: `portal-flash`,
    imgsrc: `portal-flash.jpg`,
    name: `Portal Flash`,
    developer: `We Create Stuff`,
    desc: `Portal: The Flash Version includes over 40 challenging, portals thinking levels, which features almost every feature the real game does, 
    in 2d - energy balls, cubes, turrets and even the famous crusher from the trailer. 
    The game also includes a console to mess around with after finishing the game, or just being frustrated by thinking with portals!`,
    controls: [`WAD: Control movement`, `Q: Open a blue portal`, `E: Open a yellow portal`, `R: Close portals`, `F: Pick up object`, `Esc/P: Pause game`]
  },
  {
    filter: [`plat`, `strat`],
    link: `alien-hominid`,
    imgsrc: `alien-hominid.png`,
    name: `Alien Hominid`,
    developer: `The Behemoth`,
    desc: `Alien Hominid is a side-scrolling shooter in a similar vein to games such as Metal Slug, where one hit instantly kills and has a two-player simultaneous play. 
    Players take over as the titular hominid, who has to fend off waves of secret agents. 
    His main arsenal is a blaster, while players can also melee close-up enemies and use a limited number of grenades to attack. 
    Advanced moves include rolling under shots, jumping on and biting off enemies' heads, temporarily scaring other enemies, and digging underground to drag enemies down with them.`,
    controls: [`Arrow Keys: Control movement`, `A: Shoot`, `S: Jump`]
  },
  {
    filter: [`sport`],
    link: `basketball-stars`,
    imgsrc: `bbstars.png`,
    name: `Basketball Stars`,
    developer: `MadPuffers`,
    desc: `Basketball Stars is a 2-player basketball game created by Madpuffers. You can play solo or with a friend as a variety of legendary basketball players. 
    Shoot basketball with the likes of LeBron James, James Harden, and Stephen Curry in Basketball Stars!`,
    controls: [`WASD/Arrow Keys: Control movement`, `B/L: Shoot/Steal`, `S/↓: Pump fake/block`, `Double-Tap A/D/←/→: Sprint`, `K/V: Super shot`]
  },
  {
    filter: [`sport`],
    link: `volley-gosh`,
    imgsrc: `volleygosh.png`,
    name: `Volley Gosh`,
    developer: `Gerard Delaney and Scott Bartlett`,
    desc: `Volley Gosh is a bright and happy ball game where you must try keep your "volley gosh ball" in the air for as long as possible. 
    Watch out for the increasing challenge and surprises that abound on the joyful beach while you get your next high score!`,
    controls: [`Arrow Keys: Control movement`, `Space: Hit the ball`, `Z: Dash`]
  },
  {
    filter: [`sport`, `strat`],
    link: `streetfighter2`,
    imgsrc: `sf2.jpg`,
    name: `Street Fighter 2`,
    developer: `Capcom`,
    desc: `Street Fighter II: The World Warrior is a competitive fighting game originally released for the arcades in 1991. It is the second entry in the Street Fighter series and the arcade sequel to the original Street Fighter released in 1987. It was Capcom's fourteenth title that ran on the CP System arcade hardware. Street Fighter II improved upon the many concepts introduced in the first game, including the use of command-based special moves and a six-button configuration, while offering players a selection of multiple playable characters, each with their own unique fighting style.

    - You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`strat`, `miscell`, `plat`, `sim`],
    link: `unfairdyne`,
    imgsrc: `unfairdyne.jpg`,
    name: `Unfair Dyne`,
    developer: `Joe Zeng`,
    desc: `Break the word in half and add "UN" to each part. Undyne fight, but harder. 
    
    - If pressing Z doesn't work, try clicking near the edges and then pressing Z to play.`,
    controls: [`WASD/Arrow Keys: Control movement`, `Z: Proceed`]
  },
  {
    filter: [`strat`, `miscell`],
    link: `minesweeper`,
    imgsrc: `minesweeper.png`,
    name: `Minesweeper`,
    developer: `PicturElements`,
    desc: `Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden "mines" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field.`,
    controls: [`Left Click: Reveal tile`, `Right Click: Flag`, `Smiley Face: Reset game`]
  },
  {
    filter: [`plat`, `multiplay`, `strat`],
    link: `ssf`,
    imgsrc: `ssf.png`,
    name: `Super Smash Flash`,
    developer: `McLeodGaming`,
    desc: `Choose your characters and options and battle it out with 28 different characters in the original title that started it all – Super Smash Flash!
    This award-winning Super Smash Bros. Fangame is complete with Classic Mode, Adventure Mode, and all of the things that make Smash Bros. 
    Feel like Smash Bros, with characters and content you’d never expect sprinkled about. Have fun!`,
    controls: [`Arrow Keys/WASD: Control movement`, `O/G: Jump`, `P/F: Attack`, `Backspace: Pause`]
  },
  {
    filter: [`miscell`, `plat`, `strat`],
    link: `stack`,
    imgsrc: `stack.png`,
    name: `Stack`,
    developer: `Steve Gardner`,
    desc: `Stack is a fun and simple game with a simple goal. Keep stacking up the blocks as high as you can! Just make sure you don't run out of blocks...`,
    controls: [`Click/Space: Place blocks`]
  },
  {
    filter: [`miscell`],
    link: `monkeytype-lite`,
    imgsrc: `monkeytype-lite.png`,
    name: `Monkeytype Lite`,
    developer: `Miodec, VocalNutria, r0cket`,
    desc: `A minimalistic, customisable typing website. Test yourself in various modes, track your progress and improve your typing speed. 
    Credits to Miodec for making Monkeytype and for VocalNutria for providing a codebase to start from
    Remade by r0cket to replicate some core features of Monkeytype.
    For the best experience: https://monkeytype.com/`,
    controls: [`Type to interact`]
  },
  {
    filter: [`plat`, `strat`],
    link: `spelunky`,
    imgsrc: `spelunky.png`,
    name: `Spelunky`,
    developer: `Derek Yu`,
    desc: `Spelunky is a cave exploration / treasure-hunting game inspired by classic platform games and roguelikes, where the goal is to grab as much treasure from the cave as possible. 
    Every time you play the cave's layout will be different. Use your wits, your reflexes, and the items available to you to survive and go ever deeper! 
    Perhaps at the end you may find what you're looking for...`,
    controls: [`←/→: Control movement`, `↑: Look up/climb`, `↓: Look down/Crouch/Climb/Run`, `X: Action`, `Z: Jump`, `C: Cycle Item`, `Shift: Run`]
  },
  {
    filter: [`multiplay`],
    link: `smash-remix`,
    imgsrc: `smash-remix.jpg`,
    name: `Smash Remix`,
    developer: `The_Smashfather`,
    desc: `Immerse yourself in a world of mind-blowing fights in Smash Remix and get ready to test your fighting skills! 
    Enjoy this fun mod inspired by the classic Super Smash Bros. as you live a thrilling experience surrounded by the best and bravest characters from classic video games.
    
		- You can save your data to your browser. Click the settings icon and press "Save State Location", then change it to "Keep in Browser".

    - You can enter fullscreen by hovering over the game and pressing the fullscreen button in the bottom right

    - If pressing enter causes the game to tab in and out, just click on the middle of the game to refocus.`,
    controls: [`Enter: Start/Pause`, `Arrow Keys: Control movement`, `Hover and click the gamepad icon to view/change controls.`]
  },
  {
    filter: [`miscell`],
    link: `alphabet-speed-test`,
    imgsrc: `alphabettest.png`,
    name: `Alphabet Speed Test`,
    developer: `Sindre`,
    desc: `Alphabet Speed Test is a fun little game to check how quickly you can type the alphabet on your keyboard!`,
    controls: [`Type to interact`]
  },
];

//Fetch game count
const gamescounter = document.getElementById("games-count");

if (gamescounter != null) {
  gamescounter.innerText = gamesArr.length;
}
