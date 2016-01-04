$( document ).ready(function() {
	generate();

  function generate(){
    var quotes = ["folks, the left shark and the gangnam style guy are doing terrorism in oregon.. with their singing and dancing!!!! put me the fuck on ellen. @fart","my dream is to move to brooklyn (bklyn) and start a company that bakes artisan cupcakes in a mustache shape. the company will be worth $40b @fart","a good goof would be to find ppl you dont like posting their powerball tickets and go buy the exact same numbers and show them. #JonsTips. @fart","if Y2K were a person it would be 16 years old tonight, drinking peppermint schnapps, and still bragging about getting a handjob 4 months ago. @fart","if you fire a duck out of a catapult would it just keep flying or would the g-forces render it unconscious. need a myth buster to email me. @fart","if a first responders ever did cpr really bad and a dying guy said 'more like worst responder' i bet that sticks with them a while. @fart","only putting up with this bull shit until the hour of 6pm during which time i morph into my night form 'The Dinner Boy'.@fart","martin shkreli looks like he was in the womb about 3 weeks too long. @fart","i bet Slash has a lot of trouble trying to tell people how to get to his website. @fart","just accidentally crashed the yahoo employee christmas party in redwood city. ate sooo many snacks before being escorted out. @fart","if your name is Doug you probably have a phase where people call you 'Dirty Doug' then you try to walk it back in your 30s with 'Nice Doug'.@fart","#TodayInHistory on this day 8 years ago i bought a washing machine off craigslist from a guy with an email address that went 'spermguy79@'.@fart","I have been approached by Disney and asked to promote Star Wars: The Force Awakens. Here it goes: 'Now that's what I call a Star War!'.@fart","the eharmony guy is just orville redenbacher but now hes horny and wants to watch people bang. @fart"
];


		randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    quoteAuthor=randomQuote.split("@");
		$('.saying').text(quoteAuthor[0]);
    $('.author').text(quoteAuthor[1]);
  }


$(".quoteBtn").on( "click", function() {
    generate();
});

});
