const logArr = [
  /** Template for new entries
  {
    version: `v1.0.0`,
    date: `2022-01-01`,
    list: [
      {
        label: [`add/update/fix/system/blocked/remove`],
        detail: `New stuff`
      }
    ]
  },
  **/
  {
    version: `1.10.3`,
    date: `Mar 26, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Slide in the Woods`
      },
      {
        label: [`add`],
        detail: `Added Kids vs Icecream`
      },
      {
        label: [`add`],
        detail: `Added Neon Flytron`
      },
      {
        label: [`add`],
        detail: `Added Build Bridges`
      },
      {
        label: [`add`],
        detail: `Added Deadly Descent`
      },
      {
        label: [`add`],
        detail: `Added Rolling Forests`
      },
      {
        label: [`add`],
        detail: `Added Pillar Valley`
      },
      {
        label: [`add`],
        detail: `Added 30 Dollar Soundboard`
      },
      {
        label: [`add`],
        detail: `Added Eggy Car`
      },
      {
        label: [`add`],
        detail: `Added Red Ball 4`
      },
      {
        label: [`add`],
        detail: `Added The Visitor`
      },
      {
        label: [`add`],
        detail: `Added Ice Scream 1`
      },
      {
        label: [`add`],
        detail: `Added Burger Bounty`
      },
      {
        label: [`add`],
        detail: `Added Moto Road Rash 3D`
      },
      {
        label: [`update`],
        detail: `Changed/Updated Highway Traffic/Racer`
      },
      {
        label: [`update`],
        detail: `Changed some game icons`
      }
    ]
  },
  {
    version: `1.9.7`,
    date: `Mar 25, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Granny`
      },
      {
        label: [`update`],
        detail: `Redid Home Page`
      },
      {
        label: [`system`],
        detail: `Redid code for changelog!`
      }
    ]
  },
  {
    version: `1.9.5`,
    date: `Mar 24, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added NetSpate`
      },
      {
        label: [`fix`],
        detail: `Fixed Money Land`
      }
    ]
  },
  {
    version: `1.9.4`,
    date: `Mar 20, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added 4x4 Offroad Drive`
      },
      {
        label: [`add`],
        detail: `Added Wheely`
      },
      {
        label: [`add`],
        detail: `Added Money Land`
      },
      {
        label: [`fix`],
        detail: `Fixed Janissary Towers`
      },
      {
        label: [`fix`],
        detail: `Fixed Shortcut Run`
      },
      {
        label: [`fix`],
        detail: `Fixed Two Punk Racing`
      },
      {
        label: [`system`],
        detail: `Optimized Coded`
      },
      {
        label: [`system`],
        detail: `Made elements more consistent`
      }
    ]
  },
  {
    version: `1.8.6`,
    date: `Mar 19, 2024 `,
    list: [
      {
        label: [`fix`],
        detail: `Fix/Updated Doom`
      },
      {
        label: [`fix`],
        detail: `Fixed some broken emulators`
      }
    ]
  },
  {
    version: `1.8.4`,
    date: `Mar 18, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Themes Tab`
      },
      {
        label: [`add`],
        detail: `Added Glitch Theme!`
      },
      {
        label: [`update`],
        detail: `Updated pages, themes, and assets`
      },
      {
        label: [`system`],
        detail: `Optimized Code`
      },
      {
        label: [`system`],
        detail: `Made elements more consistent`
      },
      {
        label: [`blocked`],
        detail: `Construct 3 Games aren't currently working (Being fixed)`
      },
      {
        label: [`blocked`],
        detail: `Recoil isn't currently working (Being fixed)`
      },
      {
        label: [`remove`],
        detail: `Removed the extra 8 Ball Game`
      },
    ]
  },
  {
    version: `1.7.9`,
    date: `Mar 17, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Marble Dash`
      },
      {
        label: [`add`],
        detail: `Added Maze Planet 3D`
      },
      {
        label: [`add`],
        detail: `Added Free the Key`
      },
      {
        label: [`add`],
        detail: `Added Sling Drift`
      },
      {
        label: [`add`],
        detail: `Added 8 Ball Pool`
      },
      {
        label: [`add`],
        detail: `Added The Little Giant`
      },
      {
        label: [`add`],
        detail: `Added Shortcut Run`
      },
      {
        label: [`add`],
        detail: `Added Gun Mayhem 2`
      },
      {
        label: [`add`],
        detail: `Added Recoil`
      },
      {
        label: [`add`],
        detail: `Added Rio Rex`
      },
      {
        label: [`add`],
        detail: `Added Striker Dummies`
      },
      {
        label: [`add`],
        detail: `Added Poor Bunnies`
      },
      {
        label: [`add`],
        detail: `Added Baseball Fury`
      },
      {
        label: [`add`],
        detail: `Added Cube Flip`
      },
      {
        label: [`add`],
        detail: `Added Pizza Tower`
      },
      {
        label: [`add`],
        detail: `Added Snow Rider 3D`
      },
      {
        label: [`add`],
        detail: `Added Two Punk Racing`
      }
    ]
  },
  {
    version: `1.7.1`,
    date: `Mar 16, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Ultimate Car Driving`
      },
      {
        label: [`add`],
        detail: `Added Stunt Car Challenge 3`
      },
      {
        label: [`system`],
        detail: `Optimized Code`
      },
      {
        label: [`system`],
        detail: `Made elements more consistent`
      }
    ]
  },
  {
    version: `1.6.9`,
    date: `Mar 15, 2024 `,
    list: [
      {
        label: [`update`],
        detail: `Changed About page`
      },
      {
        label: [`update`],
        detail: `Changed 404 page`
      },
      {
        label: [`fix`],
        detail: `Fixed FNAF 2`
      },
      {
        label: [`fix`],
        detail: `Fixed Riddle School 5`
      },
      {
        label: [`system`],
        detail: `Updated Ruffle`
      },
      {
        label: [`system`],
        detail: `Tied up loose ends`
      }
    ]
  },
  {
    version: `1.6.6`,
    date: `Mar 14, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added FortZ`
      },
      {
        label: [`add`],
        detail: `Added some Flashbacks`
      },
      {
        label: [`add`],
        detail: `Added 2 new themes! (Pure Darkness and Fellout)`
      },
      {
        label: [`update`],
        detail: `Changed About page`
      },
      {
        label: [`update`],
        detail: `Added the settings appearance`
      }
    ]
  },
  {
    version: `1.6.0`,
    date: `Mar 13, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Janissary Battles`
      },
      {
        label: [`add`],
        detail: `Added Mini Golf World`
      },
      {
        label: [`add`],
        detail: `Added Master Chess`
      }
    ]
  },
  {
    version: `1.5.1`,
    date: `Mar 12, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Monkey Mart`
      },
      {
        label: [`add`],
        detail: `Added Highway Traffic`
      },
      {
        label: [`add`],
        detail: `Added 4 Colors Monument Edition`
      },
      {
        label: [`update`],
        detail: `Fixed/polished the Game system selection`
      },
      {
        label: [`update`],
        detail: `Polished changelog page`
      },
      {
        label: [`update`],
        detail: `Reworked some theme colors`
      },
      {
        label: [`update`],
        detail: `Remade the settings page`
      },
      {
        label: [`fix`],
        detail: `Fixed YoHoHo.io`
      }
    ]
  },
  {
    version: `1.4.5`,
    date: `Mar 11, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added navbar icons`
      },
      {
        label: [`add`],
        detail: `Added Game system selection`
      },
      {
        label: [`update`],
        detail: `Changed the 404 page`
      }
    ]
  },
  {
    version: `1.4.3`,
    date: `Mar 10, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added changelog!`
      },
      {
        label: [`update`],
        detail: `Minor Appearance Changes`
      },
      {
        label: [`system`],
        detail: `Optimized code`
      }
    ]
  }
];
