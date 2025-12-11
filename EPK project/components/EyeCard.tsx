import { Play, Square, Pause, Instagram, Youtube, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";

// Placeholder cover image; replace the data URL with your final asset path or import.
const coverImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%230062ad'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23ffffff'%3ECover Image%3C/text%3E%3C/svg%3E";

function Monster({ onDiscographyClick }: { onDiscographyClick: () => void }) {
  const [page, setPage] = useState<
    "image" | "lyrics" | "empty"
  >("image");

  const handleClick = () => {
    if (page === "image") {
      setPage("lyrics");
    } else if (page === "lyrics") {
      setPage("empty");
    } else {
      setPage("image");
    }
  };

  return (
    <div
      className="bg-[var(--cookie-monster-blue)] relative shrink-0 aspect-square w-full overflow-hidden cursor-pointer"
      data-name="monster"
      onClick={handleClick}
    >
      {page === "image" && (
        <img
          src={coverImage}
          alt="Album cover"
          className="w-full h-full object-cover"
        />
      )}
      {page === "lyrics" && (
        <div
          className="absolute inset-0 p-6 overflow-y-scroll"
          style={{ backgroundColor: "#e8dcc4" }}
        >
          <div className="text-black">
            <p className="mb-4">
              What it had to be, I get it
              <br />
              With confidence I'm calling it a phase
              <br />
              It's a wrap finally
              <br />
              There you see what he went and did to prove
              himself?
              <br />
              Well I need some time and agency
              <br />
              <br />
              Take what you can take and leave it
              <br />
              You gave enough love and patience
              <br />
              At the end of the road she'll be waiting
              <br />
              Whether it be hell or heaven
              <br />
              Take what you can take and leave it
              <br />
              <br />
              I'd keep moving for longer
              <br />
              If there's water to fall on, water to fall on
              <br />
              Barely keeping my head above
              <br />
              Best thing I've ever known
              <br />
              Lift me up, get me out of bed
              <br />
              <br />
              Take what you can take and leave it
              <br />
              You gave enough love and patience
              <br />
              At the end of the road she'll be waiting
              <br />
              Whether it be hell or heaven
              <br />
              Take what you can take and leave it
              <br />
              <br />
              Where your dreams are held, I see it
              <br />
              Dead of night you're still going
              <br />
              Missing out, working out your mind
              <br />
              There you see what he went and did to prove
              himself?
              <br />
              When in need, you might want to take a moment
              <br />
            </p>
          </div>
        </div>
      )}
      {page === "empty" && (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-4"
          style={{ backgroundColor: "#e8dcc4" }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="px-6 py-3 bg-[var(--cookie-monster-blue)] text-white rounded-lg hover:bg-[#004d8a] transition-colors">
            Download
          </button>
          <button 
            className="px-6 py-3 bg-[var(--cookie-monster-blue)] text-white rounded-lg hover:bg-[#004d8a] transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onDiscographyClick();
            }}
          >
            Discography
          </button>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <div className="relative shrink-0 w-full" data-name="hero">
      <div className="box-border content-stretch flex flex-col items-start justify-start leading-[0] not-italic p-0 relative text-[#000000] text-left w-full">
        <div
          className="font-['Inter:Bold',_sans-serif] font-bold min-w-full relative shrink-0 text-[64px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[54px] text-[30px] font-bold">
            Earth
          </p>
        </div>
        <div
          className="font-['Inter:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[24px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[normal] text-[24px]">
            pedlar
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 w-full mt-4">
          <button className="p-2 hover:bg-black/5 rounded-lg transition-colors">
            <Play className="w-6 h-6 text-black" fill="black" />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-lg transition-colors">
            <Square
              className="w-6 h-6 text-black"
              fill="black"
            />
          </button>
          <button className="p-2 hover:bg-black/5 rounded-lg transition-colors">
            <Pause
              className="w-6 h-6 text-black"
              fill="black"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="legend"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[55px] items-start justify-start px-0 py-[9px] relative w-full">
          <Hero />
          <div
            className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[16px] text-left"
            style={{ width: "min-content" }}
          >
            <p className="block leading-[normal]"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

type DiscographyItem = {
  id: number;
  title: string;
  subtitle?: string;
  lyrics: string;
  downloadUrl?: string;
};

const discographyItems: DiscographyItem[] = [
  {
    id: 1,
    title: "Always",
    subtitle: "Single",
    lyrics: `always in the heart of the street
looking to just sit and rest
but if you meant to come to me and lend me a hand
is it hard not to hesitate
there's only so much I ask for

heart cold as ice, when you turn and leave
always on the edge is my sanity
indecision keeps me wide awake
I don’t want it

lift me, only higher
til I feel that breeze warm
like I wanted

always in the heart of the street
looking to just sit and rest
but if you meant to come to me and lend me a hand
Is it hard not to hesitate
there's only so much I ask for

maybe on that side of the road
I could spend more time fantasizing about something

night grows dark and cold
can we get through the season once more
waiting out the dusk

always in the heart of the street
looking to just sit and rest
but if you meant to come to me and lend me a hand
is it hard not to hesitate
there's only so much I ask for`,
    downloadUrl: "/mp3s/Always.mp3",
  },
  {
    id: 2,
    title: "Better Life",
    subtitle: "Single",
    lyrics: `it's the gap that we've tried to close
it's the moments that we're trying to keep
lately I've been daydreaming about daisies, those daises

ooo
another night I stay up til sunrise

ooo
but it never feels enough

out of sight, way out of sight
minds only race when they're apart
days go by, days do go by
a lot on your plate, know what it's like

out of sight, way out of sight
minds only race when they're apart
better life, a better life
oh you should go seek that, you better go

watching petals fly in the air 
been treading in the water for a bit
don't you see how we fall is just as
cyclical as the seasons change
I don't wanna know how it'll play out

out of sight, way out of sight
minds only race when they're apart
days go by, days do go by
a lot on your plate, know what it's like

out of sight, way out of sight
minds only race when they're apart
better life, a better life
oh you should go seek that, you better go

ooo
thought you'd be free at noon somehow
we don't ever seem to run out of things
busy making up and making amends

ooo
we should vacation right now
somewhere warm, where beaches aren't far 
that rendezvous we planned last time`,
    downloadUrl: "/mp3s/Better Life.mp3",
  },
  {
    id: 3,
    title: "Contrast",
    subtitle: "Single",
    lyrics: `somewhere on the edge of our consciousness
you are not afraid of what you’re not aware
I swear you’ll spend the whole day and night awake
leave behind your thoughts on the ashtray

doused in dopamine, had no brakes
I can barely smell and taste
It don’t matter how we interpret what’s being said

somehow on the fence there you still lay
you don't seem so sure of things that I suggest
far from my intent, don't play with no substance
slowly get immersed that's all it takes

motions flooding fill up the space
heavenly fountain keeps it drenched
down below I will be praising your divine contrast

more or less far beyond our grasp
filled to the brim, full of airiness
feel it warming up through my veins
the hill still glistens after the rains

the warmth will take it all over
along with our sanity
won’t you pull me a little closer
serenely just breathe it in`,
    downloadUrl: "/mp3s/Contrast.mp3",
  },
  {
    id: 4,
    title: "Earth",
    subtitle: "EP - Love and Patience",
    lyrics: `borderline fixation
favored by a few
aren't we all sinners
I'm talking about us two
 
that's all that matters
but we couldn't be bound to 
the ground, soon we'll come back to earth

Is that all you want?
Is that everything you want?
not that I don't see your side
I've been there you've seen my side
oh I wish you wanted more

maybe it's not the worst you've run into
maybe we should all go off the grid and live 
a life where we're fine with what is given 

borderline fixation
favored by a few
aren't we all sinners
I'm talking about us two

that's all that matters
but we couldn't be bound to 
the ground, soon we'll come back to earth

Is that all you want?
Is that everything you want?
not that I don't see your side
I've been there you've seen my side
oh I wish you wanted more`,
    downloadUrl: "/mp3s/Earth.mp3",
  },
  {
    id: 5,
    title: "Healthy Amount",
    subtitle: "Single",
    lyrics: `she loves me, loves me not
I go in circles with some same usual questions

what she adores reminds me 
of the things that I don't miss that badly

bored out, stripping wraps(wrapping)
while by the ledge the leaves all grow out

I heard it ring, so I ran along
just to find out where my head goes

there I stop and start looking for
what I lack, what I can’t provide
talk about how much's a healthy amount

then you ask why I went ahead
messed all up, oh that’s petrifying
words don’t always come straight from my mind

there she beams, waving from afar
take a look at how the clouds are parted
just for once can you hear me out

oh she don't seem to want to listen
wonder what she thinks of our chances
all at once rushing at me

she loves me, loves me not
I go in circles with some same usual questions

what she adores reminds me 
of the things that I don't miss that badly

pouring out all your thoughts
is not as easy as it seems to be 

at my hardest trying to seek some peace
how do I find out where my head’s at

there I stop and start looking for
what I lack, what I can’t provide
talk about how much's a healthy amount

then you ask why I went ahead
messed all up, oh that’s petrifying
words don’t always come straight from my mind

there I stop and start looking for
what I lack, what I can’t provide
how much exactly's a healthy amount?

then you say that I complicate
your state of mind no matter how I try
but i just don't understand why and how`,
    downloadUrl: "/mp3s/Healthy Amount.mp3",
  },
  {
    id: 6,
    title: "Hit Like This",
    subtitle: "Single",
    lyrics: `3 hour sharp pull in an empty pit stop
no momentum to a trip like this but
perhaps down to it I find my entertainment
so far nothing's ever hit like this

nights you spin for hours long
soon out like a light
if leaving scares you too much

time to time when it begins to hit like this
how's it hit like this
do you feel it pound?
your amusement is no longer
quite like it, longer quite like it
not as it used to be

so long have we been
under the great pressure
metamorphic kind of conditions
give me up but tell me I'm better

nights you spin for hours long
soon out like a light
if leaving scares you too much
meet you halfway

time to time when it begins to hit like this
how's it hit like this
do you feel it pound?

your amusement is no longer
quite like it, longer quite like it
not as it used to be

time to time when it begins to hit like this
how's it hit like this
do you feel it pound?
your amusement is no longer
quite like it, longer quite like it
not as it used to be

time to time when it begins to hit like this
how's it hit like this
do you feel it pound?
your amusement is no longer
quite like it, longer quite like it
not as it used to be

time to time when it begins to hit like this
how's it hit like this
how do you feel it pound?
your amusement is no longer quite like it`,
    downloadUrl: "/mp3s/Hit Like This.mp3",
  },
  {
    id: 7,
    title: "I Can Make It Easy for You",
    subtitle: "Single",
    lyrics: `I Can Make It Easy For You Fix

if you want it
just come take it
babe I want to
get back to you

long ride had us worn out
wish there was a little more room
the view comes in a flashback
submerged on the wooden floor

I lost all my patience
sitting here and staring out 
when you set in motion
as if you never expected none

baby can we just let go?
all the guilt from the get-go
wash it off, we’ll be better off
if we keep on running back to the start
led astray in the street lights
I will navigate to the door 
 
I can make it easy for you
I can, can make it easy for you
I can make it easy for you
pull it back, it'd be enough for two

I can make it easy for you
I can, can make it easy for you
I can make it easy for you
spiraled back, here we are just two`,
    downloadUrl: "/mp3s/I Can Make It Easy for You.mp3",
  },
  {
    id: 8,
    title: "Instability",
    subtitle: "Single",
    lyrics: `flourishing and sprawling
we had it through the stages
it don’t need to be done quickly, so quickly 

when little things about you start to slip my mind
I let you down, you say you're alright
but I know what kind of face you make to my instability 

hated seeing you walking out the door
saying things to put my mind at ease
how I count the hours since I’ve hit my capacity

and you don’t seem to be much shaken
you don’t seem to be much 

flourishing and sprawling
we had it through the stages
it don’t need to be done quickly, so quickly 

when little things about you start to slip my mind
I let you down, you say you're alright
but I know what kind of face you make to my instability 

then little things between us start to break apart, get magnified, wonder why
oh I despise that kind of look you gave to my instability`,
    downloadUrl: "/mp3s/Instability.mp3",
  },
  {
    id: 9,
    title: "Love and Patience",
    subtitle: "EP",
    lyrics: `What it had to be, I get it
With confidence I'm calling it a phase, it's a wrap finally
There you see what he went and did to prove himself?
Well I need some time and agency

Take what you can take and leave it 
You gave enough love and patience 
At the end of the road she'll be waiting
Whether it be hell or heaven
Take what you can take and leave it

I'd keep moving for longer
If there's water to fall on, water to fall on
Barely keeping my head above
Best thing I've ever known
Lift me up, get me out of bed

Take what you can take and leave it 
You gave enough love and patience 
At the end of the road she'll be waiting
Whether it be hell or heaven
Take what you can take and leave it

Where your dreams are held, I see it
Dead of night you're still going
Missing out, working out your mind
There you see what he went and did to prove himself?
When in need, you might want to take a moment`,
    downloadUrl: "/mp3s/Love and Patience_full.mp3",
  },
  {
    id: 10,
    title: "Overstating",
    subtitle: "Single",
    lyrics: `it's impossible that i'm overstating
every word is true, coming straight out of my heart

it's just where we are situated
I know it's not easy but you need to speak your mind 

the tide is running high 
won't you give it a chance

when it's the right season
I'll be standing right here 

we don't have to question
don't have to desire

been trying to move freely
on my own

take it seriously
don't you laugh it off
circumstances
don't let them get in the way
you're the only one I'm passionate about


ooo-
you still live in my head rent-free
ooo-
we could forget about the failures
ooo-
better keep my head on straight
so we don't get lost in the things that we do

it's impossible that i'm overstating
every word is true, coming straight out of my heart

it's just where we are situated
I know it's not easy but you need to speak your mind 

the tide is running high 
won't you give it a chance

when it's the right season
I'll be standing right here 

we don't have to question
don't have to desire`,
    downloadUrl: "/mp3s/Overstating.mp3",
  },
  {
    id: 11,
    title: "Talk to Me",
    subtitle: "Single",
    lyrics: `that just really hurt me
as much as it took a toll on you

killing me quiet silently
sleepless nights on repeat

I strive to stay grounded
what do you refuse to see

got us in such agony 
spare me some room to breathe 

walking with you makes me feel
I’m jumping on a trampoline
would you come and talk to me
swear I’ll take accountability 

desperate like a stranded boat
I can’t stand no silent treatment
can you please just talk to me
I'm sorry if my words came differently 
to you

just a couple notches down
thought we had found our delight
can’t seem to figure out where to start

really do I ask too much
it’s all about miscommunication
I'll be calmly sitting tight
we'll work it out in due time

such a strain you put on me
though I need you now and terribly
would you come and talk to me
swear I’ll take accountability

wander like a forsaken soul
can't take no more silent treatment
can you please just talk to me
I'm sorry if my words came differently 
to you`,
    downloadUrl: "/mp3s/Talk to Me.mp3",
  },
];

function DiscographyPage({ onBack }: { onBack: () => void }) {
  const [expandedLyrics, setExpandedLyrics] = useState<number[]>([]);

  const toggleLyrics = (id: number) => {
    setExpandedLyrics(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-center gap-3 mb-6 relative">
        <h2 className="text-[24px]">Discography</h2>
        <button 
          onClick={onBack}
          className="absolute right-0 p-2 hover:bg-black/5 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-black" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col gap-3">
          {discographyItems.map((item) => (
            <div 
              key={item.id}
              className="rounded-lg overflow-hidden"
              style={{ backgroundColor: '#d4c4a8' }}
            >
              <div className="flex items-center gap-3 p-3 relative">
                <div
                  className="w-16 h-16 shrink-0 bg-gray-400 rounded"
                  style={{ backgroundColor: '#b8a88c' }}
                />
                <div className="flex flex-col flex-1">
                  <p className="text-[16px]">{item.title}</p>
                  <p className="text-[12px] text-black/70">{item.subtitle}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => toggleLyrics(item.id)}
                    className="px-3 py-1 text-[12px] bg-[var(--cookie-monster-blue)] text-white rounded hover:bg-[#004d8a] transition-colors"
                  >
                    Lyrics
                  </button>
                  {item.downloadUrl ? (
                    <a
                      href={item.downloadUrl}
                      className="px-3 py-1 text-[12px] text-center bg-[var(--cookie-monster-blue)] text-white rounded hover:bg-[#004d8a] transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  ) : (
                    <button
                      className="px-3 py-1 text-[12px] bg-[var(--cookie-monster-blue)] text-white rounded opacity-70 cursor-not-allowed"
                      title="Add a downloadUrl to enable"
                      disabled
                    >
                      Download
                    </button>
                  )}
                </div>
              </div>
              {expandedLyrics.includes(item.id) && (
                <div className="px-3 pb-3 pt-0">
                  <div className="p-3 rounded text-[12px] whitespace-pre-line" style={{ backgroundColor: '#c4b498' }}>
                    {item.lyrics}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EyeCard() {
  const [showDiscography, setShowDiscography] = useState(false);

  if (showDiscography) {
    return (
      <div className="bg-[var(--cream-background)] relative w-full max-w-[458px]">
        <div className="flex flex-col justify-center overflow-clip relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[18px] relative h-full">
            <DiscographyPage onBack={() => setShowDiscography(false)} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[var(--cream-background)] relative w-full max-w-[458px]">
      <div className="flex flex-col justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[18px] relative">
          <Monster onDiscographyClick={() => setShowDiscography(true)} />
          <Legend />
        </div>
      </div>
    </div>
  );
}