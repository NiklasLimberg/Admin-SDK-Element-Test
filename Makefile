init: ## Initializes both servers via 'npm install'
	cd Admin-SDK-Server && npm install && cd ../Handshake-Server && npm install

handshake: ## Runs the handshake server, necessary for the app
	cd Handshake-Server && node main.js

appserver: ## Runs the appserver with the dailymotion example
	cd Admin-SDK-Server && npm run dev

