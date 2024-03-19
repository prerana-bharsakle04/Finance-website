const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://cryptonit-cryptonit---crypto-currency-exchange.p.rapidapi.com/rest/public/ccorder?bid_currency=btc&ask_currency=usd&type=placed');
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
xhr.setRequestHeader('X-RapidAPI-Host', 'cryptonit-cryptonit---crypto-currency-exchange.p.rapidapi.com');

xhr.send(data);

//src="https://www.chatbase.co/chatbot-iframe/etH5wgAm1B7_9sUt4pIXn" 