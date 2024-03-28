const say = [
  "\"10 or a 2-way	 - Korn\"",
  "\"4U - Korn\"",
  "\"A Different World (feat. Corey Taylor) - Korn\"",
  "\"A.D.I.D.A.S. - Korn\"",
  "\"Alive - Korn\"",
  "\"All In the Family (feat. Fred Durst) - Korn\"",
  "\"Alone I Break - Korn\"",
  "\"Am I Going Crazy - Korn\"",
  "\"Another Brick in the Wall, Pt. 1, 2, 3 - Pink Floyd Cover - Korn\"",
  "\"Are You Ready to Live? - Korn\"",
  "\"Ass Itch - Korn\"",
  "\"B.B.K. - Korn\"",
  "\"Baby - Korn\"",
  "\"Ball Tongue - Korn\"",
  "\"Beat It Upright - Korn\"",
  "\"Beg for Me - Korn\"",
  "\"Bitch We Got a Problem - Korn\"",
  "\"Black Is the Soul - Korn\"",
  "\"Blame - Korn\"",
  "\"Bleeding Out (feat. Feed Me) - Korn\"",
  "\"Blind - Korn\"",
  "\"Bottled Up Inside - Korn\"",
  "\"Break Some Off - Korn\"",
  "\"Burn the Obedient (feat. Noisia) - Korn\"",
  "\"Calling Me Too Soon - Korn\"",
  "\"Cameltosis (feat. Slimkid 3) - Korn\"",
  "\"Can You Hear Me - Korn\"",
  "\"Chaos Lives in Everything (feat. Skrillex) - Korn\"",
  "\"Chi - Korn\"",
  "\"Children of the Korn (feat. Ice Cube) - Korn\"",
  "\"Clown - Korn\"",
  "\"Cold - Korn\"",
  "\"Coming Undone - Korn\"",
  "\"Counting - Korn\"",
  "\"Counting on Me - Korn\"",
  "\"Creep At MTV Studio, NYC,  - Korn\"",
  "\"Daddy - Korn\"",
  "\"Dead - Korn\"",
  "\"Dead Bodies Everywhere - Korn\"",
  "\"Deep Inside - Korn\"",
  "\"Did My Time - Korn\"",
  "\"Did My Time at CBGB - Korn\"",
  "\"Die Another Day - Korn\"",
  "\"Die Yet Another Night - Korn\"",
  "\"Dirty - Korn\"",
  "\"Disconnect - Korn\"",
  "\"Divine - Korn\"",
  "\"Do What They Say - Korn\"",
  "\"Earache My Eye - Korn\"",
  "\"Embrace - Korn\"",
  "\"Ever Be - Korn\"",
  "\"Everything Falls Apart - Korn\"",
  "\"Everything I've Known - Korn\"",
  "\"Evolution - Korn\"",
  "\"Faget - Korn\"",
  "\"Fake - Korn\"",
  "\"Falling Away from Me - Korn\"",
  "\"Fear Is a Place to Live - Korn\"",
  "\"Finally Free - Korn\"",
  "\"For No One - Korn\"",
  "\"Forgotten - Korn\"",
  "\"Freak On a Leash - Korn\"",
  "\"Fuels the Comedy (feat. Kill the Noise) - Korn\"",
  "\"Get Up! (feat. Skrillex) - Korn\"",
  "\"Getting Off - Korn\"",
  "\"Good God - Korn\"",
  "\"Got The Life At MTV Studio, NYC,  - Korn\"",
  "\"Got the Life - Korn\"",
  "\"Gravity of Discomfort - Korn\"",
  "\"H@rd3r - Korn\"",
  "\"Hater - Korn\"",
  "\"Hating - Korn\"",
  "\"Helmet in the Bush - Korn\"",
  "\"Here It Comes Again - Korn\"",
  "\"Here To Stay - Korn\"",
  "\"Hey Daddy - Korn\"",
  "\"Hold On - Korn\"",
  "\"Holding All These Lies - Korn\"",
  "\"Hollow Life - Korn\"",
  "\"Hopeless And Beaten - Korn\"",
  "\"Hushabye - Korn\"",
  "\"Hypocrites - Korn\"",
  "\"I Will Protect You - Korn\"",
  "\"I'm Done - Korn\"",
  "\"I'm Hiding - Korn\"",
  "\"Idiosyncrasy - Korn\"",
  "\"Illuminati (feat. Excision and Downlink) - Korn\"",
  "\"Innocent Bystander - Korn\"",
  "\"Insane - Korn\"",
  "\"Intro - Korn\"",
  "\"It's All Wrong - Korn\"",
  "\"It's Gonna Go Away - Korn\"",
  "\"It's On! - Korn\"",
  "\"Jingle Balls - Korn\"",
  "\"Justin - Korn\"",
  "\"K@#*%! - Korn\"",
  "\"Kick The P.A. - Korn\"",
  "\"Kidnap the Sandy Claws - Korn\"",
  "\"Kill Mercy Within (feat. Noisia) - Korn\"",
  "\"Kill You - Korn\"",
  "\"Killing - Korn\"",
  "\"Kiss - Korn\"",
  "\"Let The Dark Do The Rest - Korn\"",
  "\"Let the Guilt Go - Korn\"",
  "\"Let's Do This Now - Korn\"",
  "\"Let's Get This Party Started - Korn\"",
  "\"Let's Go (feat. Noisia) - Korn\"",
  "\"Liar - Korn\"",
  "\"Lies - Korn\"",
  "\"Lost - Korn\"",
  "\"Lost In The Grandeur - Korn\"",
  "\"Love & Meth - Korn\"",
  "\"Love Song - Korn\"",
  "\"Love and Luxury - Korn\"",
  "\"Lowrider - Korn\"",
  "\"Lullaby for a Sadist - Korn\"",
  "\"Make Believe - Korn\"",
  "\"Make Me Bad - Korn\"",
  "\"Mass Hysteria - Korn\"",
  "\"Mr. Rogers - Korn\"",
  "\"My Confession - Korn\"",
  "\"My Gift to You - Korn\"",
  "\"My Wall (feat. Excision) - Korn\"",
  "\"Narcissistic Cannibal (feat. Skrillex & Kill the Noise) - Korn\"",
  "\"Need To - Korn\"",
  "\"Never Around - Korn\"",
  "\"Never Never - Korn\"",
  "\"Next in Line - Korn\"",
  "\"No One's There - Korn\"",
  "\"No Place to Hide - Korn\"",
  "\"No Way - Korn\"",
  "\"Oildale (Leave Me Alone) - Korn\"",
  "\"One More Time - Korn\"",
  "\"Open Up - Korn\"",
  "\"Overture or Obituary - Korn\"",
  "\"Paranoid and Aroused	 - Korn\"",
  "\"Penance To Sorrow - Korn\"",
  "\"People Pleaser - Korn\"",
  "\"Play Me (feat. Nas) - Korn\"",
  "\"Please Come for Me - Korn\"",
  "\"Politics - Korn\"",
  "\"Pop a Pill - Korn\"",
  "\"Porno Creep - Korn\"",
  "\"Predictable - Korn\"",
  "\"Pretty - Korn\"",
  "\"Prey for Me - Korn\"",
  "\"Proud - Korn\"",
  "\"Punishment Time - Korn\"",
  "\"Reclaim My Place - Korn\"",
  "\"Right Now - Korn\"",
  "\"Rotting in Vain - Korn\"",
  "\"Seed - Korn\"",
  "\"Seen It All - Korn\"",
  "\"Shoots and Ladders - Korn\"",
  "\"Sing Sorrow - Korn\"",
  "\"Somebody Someone - Korn\"",
  "\"Souvenir - Korn\"",
  "\"Spike in My Veins - Korn\"",
  "\"Start The Healing - Korn\"",
  "\"Starting Over - Korn\"",
  "\"Surrender to Failure - Korn\"",
  "\"Swallow - Korn\"",
  "\"Take Me - Korn\"",
  "\"Tearjerker - Korn\"",
  "\"Tell Me What You Want - Korn\"",
  "\"Tension (feat. Excision, Datsik and Downlink) - Korn\"",
  "\"The Darkness is Revealing - Korn\"",
  "\"The Devil Went Down to Georgia - Korn\"",
  "\"The End Begins - Korn\"",
  "\"The Hating - Korn\"",
  "\"The Ringmaster - Korn\"",
  "\"The Seduction of Indulgence - Korn\"",
  "\"This Loss - Korn\"",
  "\"Thoughtless - Korn\"",
  "\"Throw Me Away - Korn\"",
  "\"Trapped Underneath the Stairs - Korn\"",
  "\"Trash - Korn\"",
  "\"Twist - Korn\"",
  "\"Twist / Chi - Korn\"",
  "\"Twisted Transistor - Korn\"",
  "\"Victimized - Korn\"",
  "\"Wake Up - Korn\"",
  "\"Wake Up Hate - Korn\"",
  "\"Way Too Far (feat. 12th Planet & Flinch) - Korn\"",
  "\"What We Do - Korn\"",
  "\"When Will This End - Korn\"",
  "\"When You're Not There - Korn\"",
  "\"Wicked (feat. Chino Moreno) - Korn\"",
  "\"Wish I Wasn't Born Today - Korn\"",
  "\"Wish You Could Be Me - Korn\"",
  "\"Word Up! - Korn\"",
  "\"Worst Is On Its Way - Korn\"",
  "\"Y'all Want a Single - Korn\"",
  "\"You'll Never Find Me - Korn\""
];

const changeSub = (num) => {
  document.getElementById("subtitle").innerHTML = say[num];
};

const newSub = () => {
  const howmany = say.length;
  const bRand = Math.floor(Math.random() * howmany);
  const sayWhat = say[bRand];
  document.getElementById("subtitle").innerHTML = sayWhat;
};

newSub();

const changeSplash = (num) => {
  const subtitle = say[num];
  document.getElementById("subtitle").innerHTML = subtitle;
  const ret = `Set current splash to splash ${num}, ${subtitle}`;
  return ret;
};